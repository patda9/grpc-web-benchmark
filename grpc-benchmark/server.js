let PROTO_PATH = __dirname + '/../helloworld.proto';

let grpc = require('@grpc/grpc-js');
let protoLoader = require('@grpc/proto-loader');
let packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
let protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
let helloworld = protoDescriptor.helloworld;

function requestBenchmark(call, callback) {
  callback(null, {
    rows: call.request.rows
  });
}

function getServer() {
  let server = new grpc.Server();
  server.addService(helloworld.Greeter.service, {
    requestBenchmark,
  });

  return server;
}

if (require.main === module) {
  let server = getServer();
  
  server.bindAsync(
    '0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
      assert.ifError(err);
      server.start();
    });
}

exports.getServer = getServer;
