const {
  BenchmarkRequest,
  BenchmarkResponse,
} = require("./.protobuf/benchmark_pb.js");
const { BenchmarkClient } = require("./.protobuf/benchmark_grpc_web_pb.js");

var client = new BenchmarkClient("http://localhost:8080");

var request = new BenchmarkRequest();
request.setN(10000000);

client.requestBenchmark(request, {}, (_, response) => { });
