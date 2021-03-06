var PROTO_PATH = __dirname + "/../protobuf/benchmark.proto";

var async = require('async');
var _ = require('lodash');

var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var benchmark = protoDescriptor.benchmark;

const sendBenchmarkResponse = (call, callback) => {
  callback(null, { one_to_n: [...Array(call.request.n)].map((_, i) => i + 1) });
};

const streamBenchmarkResponse = (call) => {
  const number = (n) => {
    return (callback) => {
      call.write({ n });
      _.delay(callback, .01); // in ms
    };
  }

  const numbers = [...Array(call.request.n)].map((_, i) => number(i + 1));

  try {
    async.series(numbers, () => {
      call.end();
    });
  }
  catch(e) {
    console.log(e)
  }
}

function getServer() {
  var server = new grpc.Server();
  server.addService(
    benchmark.Benchmark.service,
    {
      requestBenchmark: sendBenchmarkResponse,
      requestBenchmarkStream: streamBenchmarkResponse
    }
  );

  return server;
}

if (require.main === module) {
  var server = getServer();
  server.bindAsync(
    "0.0.0.0:9090",
    grpc.ServerCredentials.createInsecure(),
    (_, port) => {
      server.start();

      console.log(`Server is started on port ${port}`);
    }
  );
}

exports.getServer = getServer;
