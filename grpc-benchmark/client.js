const { BenchmarkRequest } = require(__dirname + '.protobuf/benchmark_pb.js');
const { BenchmarkClient } = require(__dirname + '.protobuf/benchmark_grpc_web_pb.js');

let client = new BenchmarkClient('http://' + window.location.hostname + ':8080', null, null);

let request = new BenchmarkRequest();
request.setRows(1000);

client.requestBenchmark(request, {}, (err, response) => {
  if (err) {
    console.log(`Unexpected error for requestBenchmark: code = ${err.code}, message = "${err.message}"`);
  }
  else {
    console.log(response.getMessage());
  }
});
