/**
 * @fileoverview gRPC-Web generated client stub for benchmark
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.benchmark = require('./benchmark_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.benchmark.BenchmarkClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.benchmark.BenchmarkPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.benchmark.BenchmarkRequest,
 *   !proto.benchmark.BenchmarkResponse>}
 */
const methodDescriptor_Benchmark_RequestBenchmark = new grpc.web.MethodDescriptor(
  '/benchmark.Benchmark/RequestBenchmark',
  grpc.web.MethodType.UNARY,
  proto.benchmark.BenchmarkRequest,
  proto.benchmark.BenchmarkResponse,
  /**
   * @param {!proto.benchmark.BenchmarkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.benchmark.BenchmarkResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.benchmark.BenchmarkRequest,
 *   !proto.benchmark.BenchmarkResponse>}
 */
const methodInfo_Benchmark_RequestBenchmark = new grpc.web.AbstractClientBase.MethodInfo(
  proto.benchmark.BenchmarkResponse,
  /**
   * @param {!proto.benchmark.BenchmarkRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.benchmark.BenchmarkResponse.deserializeBinary
);


/**
 * @param {!proto.benchmark.BenchmarkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.benchmark.BenchmarkResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.benchmark.BenchmarkResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.benchmark.BenchmarkClient.prototype.requestBenchmark =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/benchmark.Benchmark/RequestBenchmark',
      request,
      metadata || {},
      methodDescriptor_Benchmark_RequestBenchmark,
      callback);
};


/**
 * @param {!proto.benchmark.BenchmarkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.benchmark.BenchmarkResponse>}
 *     A native promise that resolves to the response
 */
proto.benchmark.BenchmarkPromiseClient.prototype.requestBenchmark =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/benchmark.Benchmark/RequestBenchmark',
      request,
      metadata || {},
      methodDescriptor_Benchmark_RequestBenchmark);
};


module.exports = proto.benchmark;

