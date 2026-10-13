--d351900712b782093f358e4f33fc48df25edeb7cf34fca4737094f8c9d43
Content-Disposition: form-data; name="worker-clean.js"

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
if (!("__unenv__" in performance)) {
  const proto = Performance.prototype;
  for (const key of Object.getOwnPropertyNames(proto)) {
    if (key !== "constructor" && !(key in performance)) {
      const desc = Object.getOwnPropertyDescriptor(proto, key);
      if (desc) {
        Object.defineProperty(performance, key, desc);
      }
    }
  }
}
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole = globalThis["console"];
var {
  assert,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;

// ../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
globalThis.console = console_default;

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir4, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env3) {
    return 1;
  }
  hasColors(count4, env3) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd3) {
    this.#cwd = cwd3;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// ../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var unenvProcess = new Process({
  env: globalProcess.env,
  hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  _channel,
  _debugEnd,
  _debugProcess,
  _disconnect,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _handleQueue,
  _kill,
  _linkedBinding,
  _maxListeners,
  _pendingMessage,
  _preload_modules,
  _rawDebug,
  _send,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert: assert2,
  availableMemory,
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  disconnect,
  dlopen,
  domain,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime: hrtime3,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  mainModule,
  memoryUsage,
  moduleLoadList,
  nextTick,
  off,
  on,
  once,
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert: assert2,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// ../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// extracted/worker-clean.js
import { Writable as Writable2 } from "node:stream";
import { EventEmitter as EventEmitter2 } from "node:events";
var __defProp2 = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var __esm = /* @__PURE__ */ __name((fn, res, err) => /* @__PURE__ */ __name(function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
}, "__init"), "__esm");
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
}, "__export");
// @__NO_SIDE_EFFECTS__
function createNotImplementedError2(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError2, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented2(name) {
  const fn = /* @__PURE__ */ __name2(() => {
    throw /* @__PURE__ */ createNotImplementedError2(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented2, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass2(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass2, "notImplementedClass");
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name2(createNotImplementedError2, "createNotImplementedError");
    __name2(notImplemented2, "notImplemented");
    __name2(notImplementedClass2, "notImplementedClass");
  }
});
var _timeOrigin2;
var _performanceNow2;
var nodeTiming2;
var PerformanceEntry2;
var PerformanceMark3;
var PerformanceMeasure2;
var PerformanceResourceTiming2;
var PerformanceObserverEntryList2;
var Performance2;
var PerformanceObserver2;
var performance2;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin2 = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow2 = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin2;
    nodeTiming2 = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry2 = class {
      static {
        __name(this, "PerformanceEntry");
      }
      static {
        __name2(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow2();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow2() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark3 = class PerformanceMark2 extends PerformanceEntry2 {
      static {
        __name(this, "PerformanceMark2");
      }
      static {
        __name2(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure2 = class extends PerformanceEntry2 {
      static {
        __name(this, "PerformanceMeasure");
      }
      static {
        __name2(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming2 = class extends PerformanceEntry2 {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      static {
        __name2(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList2 = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      static {
        __name2(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance2 = class {
      static {
        __name(this, "Performance");
      }
      static {
        __name2(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin2;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw /* @__PURE__ */ createNotImplementedError2("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming2;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming2("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin2) {
          return _performanceNow2();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark3(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure2(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw /* @__PURE__ */ createNotImplementedError2("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw /* @__PURE__ */ createNotImplementedError2("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw /* @__PURE__ */ createNotImplementedError2("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver2 = class {
      static {
        __name(this, "PerformanceObserver");
      }
      static {
        __name2(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw /* @__PURE__ */ createNotImplementedError2("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw /* @__PURE__ */ createNotImplementedError2("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance2();
  }
});
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance2)) {
      const proto = Performance2.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance2)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance2, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance2;
    globalThis.Performance = Performance2;
    globalThis.PerformanceEntry = PerformanceEntry2;
    globalThis.PerformanceMark = PerformanceMark3;
    globalThis.PerformanceMeasure = PerformanceMeasure2;
    globalThis.PerformanceObserver = PerformanceObserver2;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList2;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming2;
  }
});
var noop_default2;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default2 = Object.assign(() => {
    }, { __unenv__: true });
  }
});
var _console2;
var _ignoreErrors2;
var _stderr2;
var _stdout2;
var log3;
var info3;
var trace3;
var debug3;
var table3;
var error3;
var warn3;
var createTask3;
var clear3;
var count3;
var countReset3;
var dir3;
var dirxml3;
var group3;
var groupEnd3;
var groupCollapsed3;
var profile3;
var profileEnd3;
var time3;
var timeEnd3;
var timeLog3;
var timeStamp3;
var Console2;
var _times2;
var _stdoutErrorHandler2;
var _stderrErrorHandler2;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console2 = globalThis.console;
    _ignoreErrors2 = true;
    _stderr2 = new Writable2();
    _stdout2 = new Writable2();
    log3 = _console2?.log ?? noop_default2;
    info3 = _console2?.info ?? log3;
    trace3 = _console2?.trace ?? info3;
    debug3 = _console2?.debug ?? log3;
    table3 = _console2?.table ?? log3;
    error3 = _console2?.error ?? log3;
    warn3 = _console2?.warn ?? error3;
    createTask3 = _console2?.createTask ?? /* @__PURE__ */ notImplemented2("console.createTask");
    clear3 = _console2?.clear ?? noop_default2;
    count3 = _console2?.count ?? noop_default2;
    countReset3 = _console2?.countReset ?? noop_default2;
    dir3 = _console2?.dir ?? noop_default2;
    dirxml3 = _console2?.dirxml ?? noop_default2;
    group3 = _console2?.group ?? noop_default2;
    groupEnd3 = _console2?.groupEnd ?? noop_default2;
    groupCollapsed3 = _console2?.groupCollapsed ?? noop_default2;
    profile3 = _console2?.profile ?? noop_default2;
    profileEnd3 = _console2?.profileEnd ?? noop_default2;
    time3 = _console2?.time ?? noop_default2;
    timeEnd3 = _console2?.timeEnd ?? noop_default2;
    timeLog3 = _console2?.timeLog ?? noop_default2;
    timeStamp3 = _console2?.timeStamp ?? noop_default2;
    Console2 = _console2?.Console ?? /* @__PURE__ */ notImplementedClass2("console.Console");
    _times2 = /* @__PURE__ */ new Map();
    _stdoutErrorHandler2 = noop_default2;
    _stderrErrorHandler2 = noop_default2;
  }
});
var workerdConsole2;
var assert3;
var clear22;
var context2;
var count22;
var countReset22;
var createTask22;
var debug22;
var dir22;
var dirxml22;
var error22;
var group22;
var groupCollapsed22;
var groupEnd22;
var info22;
var log22;
var profile22;
var profileEnd22;
var table22;
var time22;
var timeEnd22;
var timeLog22;
var timeStamp22;
var trace22;
var warn22;
var console_default2;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole2 = globalThis["console"];
    ({
      assert: assert3,
      clear: clear22,
      context: (
        // @ts-expect-error undocumented public API
        context2
      ),
      count: count22,
      countReset: countReset22,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask22
      ),
      debug: debug22,
      dir: dir22,
      dirxml: dirxml22,
      error: error22,
      group: group22,
      groupCollapsed: groupCollapsed22,
      groupEnd: groupEnd22,
      info: info22,
      log: log22,
      profile: profile22,
      profileEnd: profileEnd22,
      table: table22,
      time: time22,
      timeEnd: timeEnd22,
      timeLog: timeLog22,
      timeStamp: timeStamp22,
      trace: trace22,
      warn: warn22
    } = workerdConsole2);
    Object.assign(workerdConsole2, {
      Console: Console2,
      _ignoreErrors: _ignoreErrors2,
      _stderr: _stderr2,
      _stderrErrorHandler: _stderrErrorHandler2,
      _stdout: _stdout2,
      _stdoutErrorHandler: _stdoutErrorHandler2,
      _times: _times2
    });
    console_default2 = workerdConsole2;
  }
});
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default2;
  }
});
var hrtime4;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime4 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name2(/* @__PURE__ */ __name(function hrtime22(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime2"), "hrtime"), { bigint: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function bigint2() {
      return BigInt(Date.now() * 1e6);
    }, "bigint"), "bigint") });
  }
});
var ReadStream2;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream2 = class {
      static {
        __name(this, "ReadStream");
      }
      static {
        __name2(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});
var WriteStream2;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream2 = class {
      static {
        __name(this, "WriteStream");
      }
      static {
        __name2(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir32, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env3) {
        return 1;
      }
      hasColors(count32, env3) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});
var NODE_VERSION2;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION2 = "22.14.0";
  }
});
var Process2;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process2 = class _Process extends EventEmitter2 {
      static {
        __name(this, "_Process");
      }
      static {
        __name2(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter2.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream2(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream2(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream2(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd22) {
        this.#cwd = cwd22;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION2}`;
      }
      get versions() {
        return { node: NODE_VERSION2 };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw /* @__PURE__ */ createNotImplementedError2("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw /* @__PURE__ */ createNotImplementedError2("process.getActiveResourcesInfo");
      }
      exit() {
        throw /* @__PURE__ */ createNotImplementedError2("process.exit");
      }
      reallyExit() {
        throw /* @__PURE__ */ createNotImplementedError2("process.reallyExit");
      }
      kill() {
        throw /* @__PURE__ */ createNotImplementedError2("process.kill");
      }
      abort() {
        throw /* @__PURE__ */ createNotImplementedError2("process.abort");
      }
      dlopen() {
        throw /* @__PURE__ */ createNotImplementedError2("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw /* @__PURE__ */ createNotImplementedError2("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw /* @__PURE__ */ createNotImplementedError2("process.loadEnvFile");
      }
      disconnect() {
        throw /* @__PURE__ */ createNotImplementedError2("process.disconnect");
      }
      cpuUsage() {
        throw /* @__PURE__ */ createNotImplementedError2("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw /* @__PURE__ */ createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw /* @__PURE__ */ createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw /* @__PURE__ */ createNotImplementedError2("process.initgroups");
      }
      openStdin() {
        throw /* @__PURE__ */ createNotImplementedError2("process.openStdin");
      }
      assert() {
        throw /* @__PURE__ */ createNotImplementedError2("process.assert");
      }
      binding() {
        throw /* @__PURE__ */ createNotImplementedError2("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented2("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented2("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented2("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented2("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented2("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented2("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name2(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});
var globalProcess2;
var getBuiltinModule2;
var workerdProcess2;
var unenvProcess2;
var exit2;
var features2;
var platform2;
var _channel2;
var _debugEnd2;
var _debugProcess2;
var _disconnect2;
var _events2;
var _eventsCount2;
var _exiting2;
var _fatalException2;
var _getActiveHandles2;
var _getActiveRequests2;
var _handleQueue2;
var _kill2;
var _linkedBinding2;
var _maxListeners2;
var _pendingMessage2;
var _preload_modules2;
var _rawDebug2;
var _send2;
var _startProfilerIdleNotifier2;
var _stopProfilerIdleNotifier2;
var _tickCallback2;
var abort2;
var addListener2;
var allowedNodeEnvironmentFlags2;
var arch2;
var argv2;
var argv02;
var assert22;
var availableMemory2;
var binding2;
var channel2;
var chdir2;
var config2;
var connected2;
var constrainedMemory2;
var cpuUsage2;
var cwd2;
var debugPort2;
var disconnect2;
var dlopen2;
var domain2;
var emit2;
var emitWarning2;
var env2;
var eventNames2;
var execArgv2;
var execPath2;
var exitCode2;
var finalization2;
var getActiveResourcesInfo2;
var getegid2;
var geteuid2;
var getgid2;
var getgroups2;
var getMaxListeners2;
var getuid2;
var hasUncaughtExceptionCaptureCallback2;
var hrtime32;
var initgroups2;
var kill2;
var listenerCount2;
var listeners2;
var loadEnvFile2;
var mainModule2;
var memoryUsage2;
var moduleLoadList2;
var nextTick2;
var off2;
var on2;
var once2;
var openStdin2;
var permission2;
var pid2;
var ppid2;
var prependListener2;
var prependOnceListener2;
var rawListeners2;
var reallyExit2;
var ref2;
var release2;
var removeAllListeners2;
var removeListener2;
var report2;
var resourceUsage2;
var send2;
var setegid2;
var seteuid2;
var setgid2;
var setgroups2;
var setMaxListeners2;
var setSourceMapsEnabled2;
var setuid2;
var setUncaughtExceptionCaptureCallback2;
var sourceMapsEnabled2;
var stderr2;
var stdin2;
var stdout2;
var throwDeprecation2;
var title2;
var traceDeprecation2;
var umask2;
var unref2;
var uptime2;
var version2;
var versions2;
var _process2;
var process_default2;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess2 = globalThis["process"];
    getBuiltinModule2 = globalProcess2.getBuiltinModule;
    workerdProcess2 = getBuiltinModule2("node:process");
    unenvProcess2 = new Process2({
      env: globalProcess2.env,
      hrtime: hrtime4,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess2.nextTick
    });
    ({ exit: exit2, features: features2, platform: platform2 } = workerdProcess2);
    ({
      _channel: _channel2,
      _debugEnd: _debugEnd2,
      _debugProcess: _debugProcess2,
      _disconnect: _disconnect2,
      _events: _events2,
      _eventsCount: _eventsCount2,
      _exiting: _exiting2,
      _fatalException: _fatalException2,
      _getActiveHandles: _getActiveHandles2,
      _getActiveRequests: _getActiveRequests2,
      _handleQueue: _handleQueue2,
      _kill: _kill2,
      _linkedBinding: _linkedBinding2,
      _maxListeners: _maxListeners2,
      _pendingMessage: _pendingMessage2,
      _preload_modules: _preload_modules2,
      _rawDebug: _rawDebug2,
      _send: _send2,
      _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
      _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
      _tickCallback: _tickCallback2,
      abort: abort2,
      addListener: addListener2,
      allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
      arch: arch2,
      argv: argv2,
      argv0: argv02,
      assert: assert22,
      availableMemory: availableMemory2,
      binding: binding2,
      channel: channel2,
      chdir: chdir2,
      config: config2,
      connected: connected2,
      constrainedMemory: constrainedMemory2,
      cpuUsage: cpuUsage2,
      cwd: cwd2,
      debugPort: debugPort2,
      disconnect: disconnect2,
      dlopen: dlopen2,
      domain: domain2,
      emit: emit2,
      emitWarning: emitWarning2,
      env: env2,
      eventNames: eventNames2,
      execArgv: execArgv2,
      execPath: execPath2,
      exitCode: exitCode2,
      finalization: finalization2,
      getActiveResourcesInfo: getActiveResourcesInfo2,
      getegid: getegid2,
      geteuid: geteuid2,
      getgid: getgid2,
      getgroups: getgroups2,
      getMaxListeners: getMaxListeners2,
      getuid: getuid2,
      hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
      hrtime: hrtime32,
      initgroups: initgroups2,
      kill: kill2,
      listenerCount: listenerCount2,
      listeners: listeners2,
      loadEnvFile: loadEnvFile2,
      mainModule: mainModule2,
      memoryUsage: memoryUsage2,
      moduleLoadList: moduleLoadList2,
      nextTick: nextTick2,
      off: off2,
      on: on2,
      once: once2,
      openStdin: openStdin2,
      permission: permission2,
      pid: pid2,
      ppid: ppid2,
      prependListener: prependListener2,
      prependOnceListener: prependOnceListener2,
      rawListeners: rawListeners2,
      reallyExit: reallyExit2,
      ref: ref2,
      release: release2,
      removeAllListeners: removeAllListeners2,
      removeListener: removeListener2,
      report: report2,
      resourceUsage: resourceUsage2,
      send: send2,
      setegid: setegid2,
      seteuid: seteuid2,
      setgid: setgid2,
      setgroups: setgroups2,
      setMaxListeners: setMaxListeners2,
      setSourceMapsEnabled: setSourceMapsEnabled2,
      setuid: setuid2,
      setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
      sourceMapsEnabled: sourceMapsEnabled2,
      stderr: stderr2,
      stdin: stdin2,
      stdout: stdout2,
      throwDeprecation: throwDeprecation2,
      title: title2,
      traceDeprecation: traceDeprecation2,
      umask: umask2,
      unref: unref2,
      uptime: uptime2,
      version: version2,
      versions: versions2
    } = unenvProcess2);
    _process2 = {
      abort: abort2,
      addListener: addListener2,
      allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
      hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
      setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
      loadEnvFile: loadEnvFile2,
      sourceMapsEnabled: sourceMapsEnabled2,
      arch: arch2,
      argv: argv2,
      argv0: argv02,
      chdir: chdir2,
      config: config2,
      connected: connected2,
      constrainedMemory: constrainedMemory2,
      availableMemory: availableMemory2,
      cpuUsage: cpuUsage2,
      cwd: cwd2,
      debugPort: debugPort2,
      dlopen: dlopen2,
      disconnect: disconnect2,
      emit: emit2,
      emitWarning: emitWarning2,
      env: env2,
      eventNames: eventNames2,
      execArgv: execArgv2,
      execPath: execPath2,
      exit: exit2,
      finalization: finalization2,
      features: features2,
      getBuiltinModule: getBuiltinModule2,
      getActiveResourcesInfo: getActiveResourcesInfo2,
      getMaxListeners: getMaxListeners2,
      hrtime: hrtime32,
      kill: kill2,
      listeners: listeners2,
      listenerCount: listenerCount2,
      memoryUsage: memoryUsage2,
      nextTick: nextTick2,
      on: on2,
      off: off2,
      once: once2,
      pid: pid2,
      platform: platform2,
      ppid: ppid2,
      prependListener: prependListener2,
      prependOnceListener: prependOnceListener2,
      rawListeners: rawListeners2,
      release: release2,
      removeAllListeners: removeAllListeners2,
      removeListener: removeListener2,
      report: report2,
      resourceUsage: resourceUsage2,
      setMaxListeners: setMaxListeners2,
      setSourceMapsEnabled: setSourceMapsEnabled2,
      stderr: stderr2,
      stdin: stdin2,
      stdout: stdout2,
      title: title2,
      throwDeprecation: throwDeprecation2,
      traceDeprecation: traceDeprecation2,
      umask: umask2,
      uptime: uptime2,
      version: version2,
      versions: versions2,
      // @ts-expect-error old API
      domain: domain2,
      initgroups: initgroups2,
      moduleLoadList: moduleLoadList2,
      reallyExit: reallyExit2,
      openStdin: openStdin2,
      assert: assert22,
      binding: binding2,
      send: send2,
      exitCode: exitCode2,
      channel: channel2,
      getegid: getegid2,
      geteuid: geteuid2,
      getgid: getgid2,
      getgroups: getgroups2,
      getuid: getuid2,
      setegid: setegid2,
      seteuid: seteuid2,
      setgid: setgid2,
      setgroups: setgroups2,
      setuid: setuid2,
      permission: permission2,
      mainModule: mainModule2,
      _events: _events2,
      _eventsCount: _eventsCount2,
      _exiting: _exiting2,
      _maxListeners: _maxListeners2,
      _debugEnd: _debugEnd2,
      _debugProcess: _debugProcess2,
      _fatalException: _fatalException2,
      _getActiveHandles: _getActiveHandles2,
      _getActiveRequests: _getActiveRequests2,
      _kill: _kill2,
      _preload_modules: _preload_modules2,
      _rawDebug: _rawDebug2,
      _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
      _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
      _tickCallback: _tickCallback2,
      _disconnect: _disconnect2,
      _handleQueue: _handleQueue2,
      _pendingMessage: _pendingMessage2,
      _channel: _channel2,
      _send: _send2,
      _linkedBinding: _linkedBinding2
    };
    process_default2 = _process2;
  }
});
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default2;
  }
});
var isTestEnvironment;
var isProductionEnvironment;
var init_runtimeEnvironment_BB2sO_19 = __esm({
  "node_modules/@clerk/shared/dist/runtime/runtimeEnvironment-BB2sO-19.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    isTestEnvironment = /* @__PURE__ */ __name2(() => {
      try {
        return false;
      } catch {
      }
      return false;
    }, "isTestEnvironment");
    isProductionEnvironment = /* @__PURE__ */ __name2(() => {
      try {
        return true;
      } catch {
      }
      return false;
    }, "isProductionEnvironment");
  }
});
var displayedWarnings;
var deprecated;
var init_deprecated_BqlFbLHj = __esm({
  "node_modules/@clerk/shared/dist/runtime/deprecated-BqlFbLHj.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_runtimeEnvironment_BB2sO_19();
    displayedWarnings = /* @__PURE__ */ new Set();
    deprecated = /* @__PURE__ */ __name2((fnName, warning, key) => {
      const hideWarning = isTestEnvironment() || isProductionEnvironment();
      const messageId = key ?? fnName;
      if (displayedWarnings.has(messageId) || hideWarning) return;
      displayedWarnings.add(messageId);
      console.warn(`Clerk - DEPRECATION WARNING: "${fnName}" is deprecated and will be removed in the next major release.
${warning}`);
    }, "deprecated");
  }
});
var init_deprecated = __esm({
  "node_modules/@clerk/shared/dist/runtime/deprecated.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_runtimeEnvironment_BB2sO_19();
    init_deprecated_BqlFbLHj();
  }
});
var LEGACY_DEV_INSTANCE_SUFFIXES;
var CURRENT_DEV_INSTANCE_SUFFIXES;
var DEV_OR_STAGING_SUFFIXES;
var init_constants_ByUssRbE = __esm({
  "node_modules/@clerk/shared/dist/runtime/constants-ByUssRbE.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    LEGACY_DEV_INSTANCE_SUFFIXES = [
      ".lcl.dev",
      ".lclstage.dev",
      ".lclclerk.com"
    ];
    CURRENT_DEV_INSTANCE_SUFFIXES = [
      ".accounts.dev",
      ".accountsstage.dev",
      ".accounts.lclclerk.com"
    ];
    DEV_OR_STAGING_SUFFIXES = [
      ".lcl.dev",
      ".stg.dev",
      ".lclstage.dev",
      ".stgstage.dev",
      ".dev.lclclerk.com",
      ".stg.lclclerk.com",
      ".accounts.lclclerk.com",
      "accountsstage.dev",
      "accounts.dev"
    ];
  }
});
var isomorphicAtob;
var init_isomorphicAtob_DybBXGFR = __esm({
  "node_modules/@clerk/shared/dist/runtime/isomorphicAtob-DybBXGFR.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    isomorphicAtob = /* @__PURE__ */ __name2((data) => {
      if (typeof atob !== "undefined" && typeof atob === "function") return atob(data);
      else if (typeof global !== "undefined" && global.Buffer) return new global.Buffer(data, "base64").toString();
      return data;
    }, "isomorphicAtob");
  }
});
var isomorphicBtoa;
var init_isomorphicBtoa_Dr7WubZv = __esm({
  "node_modules/@clerk/shared/dist/runtime/isomorphicBtoa-Dr7WubZv.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    isomorphicBtoa = /* @__PURE__ */ __name2((data) => {
      if (typeof btoa !== "undefined" && typeof btoa === "function") return btoa(data);
      else if (typeof global !== "undefined" && global.Buffer) return new global.Buffer(data).toString("base64");
      return data;
    }, "isomorphicBtoa");
  }
});
function isValidDecodedPublishableKey(decoded) {
  if (!decoded.endsWith("$")) return false;
  const withoutTrailing = decoded.slice(0, -1);
  if (withoutTrailing.includes("$")) return false;
  return withoutTrailing.includes(".");
}
__name(isValidDecodedPublishableKey, "isValidDecodedPublishableKey");
function parsePublishableKey(key, options = {}) {
  key = key || "";
  if (!key || !isPublishableKey(key)) {
    if (options.fatal && !key) throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");
    if (options.fatal && !isPublishableKey(key)) throw new Error("Publishable key not valid.");
    return null;
  }
  const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
  let decodedFrontendApi;
  try {
    decodedFrontendApi = isomorphicAtob(key.split("_")[2]);
  } catch {
    if (options.fatal) throw new Error("Publishable key not valid: Failed to decode key.");
    return null;
  }
  if (!isValidDecodedPublishableKey(decodedFrontendApi)) {
    if (options.fatal) throw new Error("Publishable key not valid: Decoded key has invalid format.");
    return null;
  }
  let frontendApi = decodedFrontendApi.slice(0, -1);
  if (options.proxyUrl) frontendApi = options.proxyUrl;
  else if (instanceType !== "development" && options.domain && options.isSatellite) frontendApi = `clerk.${options.domain}`;
  return {
    instanceType,
    frontendApi
  };
}
__name(parsePublishableKey, "parsePublishableKey");
function isPublishableKey(key = "") {
  try {
    if (!(key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX))) return false;
    const parts = key.split("_");
    if (parts.length !== 3) return false;
    const encodedPart = parts[2];
    if (!encodedPart) return false;
    return isValidDecodedPublishableKey(isomorphicAtob(encodedPart));
  } catch {
    return false;
  }
}
__name(isPublishableKey, "isPublishableKey");
function createDevOrStagingUrlCache() {
  const devOrStagingUrlCache = /* @__PURE__ */ new Map();
  return { isDevOrStagingUrl: /* @__PURE__ */ __name2((url) => {
    if (!url) return false;
    const hostname = typeof url === "string" ? url : url.hostname;
    let res = devOrStagingUrlCache.get(hostname);
    if (res === void 0) {
      res = DEV_OR_STAGING_SUFFIXES.some((s2) => hostname.endsWith(s2));
      devOrStagingUrlCache.set(hostname, res);
    }
    return res;
  }, "isDevOrStagingUrl") };
}
__name(createDevOrStagingUrlCache, "createDevOrStagingUrlCache");
function isDevelopmentFromSecretKey(apiKey) {
  return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
__name(isDevelopmentFromSecretKey, "isDevelopmentFromSecretKey");
async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
  const data = new TextEncoder().encode(publishableKey);
  const digest = await subtle.digest("sha-1", data);
  return isomorphicBtoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
__name(getCookieSuffix, "getCookieSuffix");
var PUBLISHABLE_KEY_LIVE_PREFIX;
var PUBLISHABLE_KEY_TEST_PREFIX;
var getSuffixedCookieName;
var init_keys_YNv6yjKk = __esm({
  "node_modules/@clerk/shared/dist/runtime/keys-YNv6yjKk.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_constants_ByUssRbE();
    init_isomorphicAtob_DybBXGFR();
    init_isomorphicBtoa_Dr7WubZv();
    PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
    PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
    __name2(isValidDecodedPublishableKey, "isValidDecodedPublishableKey");
    __name2(parsePublishableKey, "parsePublishableKey");
    __name2(isPublishableKey, "isPublishableKey");
    __name2(createDevOrStagingUrlCache, "createDevOrStagingUrlCache");
    __name2(isDevelopmentFromSecretKey, "isDevelopmentFromSecretKey");
    __name2(getCookieSuffix, "getCookieSuffix");
    getSuffixedCookieName = /* @__PURE__ */ __name2((cookieName, cookieSuffix) => {
      return `${cookieName}_${cookieSuffix}`;
    }, "getSuffixedCookieName");
  }
});
var init_keys = __esm({
  "node_modules/@clerk/shared/dist/runtime/keys.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_constants_ByUssRbE();
    init_isomorphicAtob_DybBXGFR();
    init_isomorphicBtoa_Dr7WubZv();
    init_keys_YNv6yjKk();
  }
});
var defaultOptions;
var RETRY_IMMEDIATELY_DELAY;
var sleep;
var applyJitter;
var createExponentialDelayAsyncFn;
var retry;
var init_retry_DAlTROH9 = __esm({
  "node_modules/@clerk/shared/dist/runtime/retry-DAlTROH9.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    defaultOptions = {
      initialDelay: 125,
      maxDelayBetweenRetries: 0,
      factor: 2,
      shouldRetry: /* @__PURE__ */ __name2((_2, iteration) => iteration < 5, "shouldRetry"),
      retryImmediately: false,
      jitter: true
    };
    RETRY_IMMEDIATELY_DELAY = 100;
    sleep = /* @__PURE__ */ __name2(async (ms) => new Promise((s2) => setTimeout(s2, ms)), "sleep");
    applyJitter = /* @__PURE__ */ __name2((delay, jitter) => {
      return jitter ? delay * (1 + Math.random()) : delay;
    }, "applyJitter");
    createExponentialDelayAsyncFn = /* @__PURE__ */ __name2((opts) => {
      let timesCalled = 0;
      const calculateDelayInMs = /* @__PURE__ */ __name2(() => {
        const constant = opts.initialDelay;
        const base = opts.factor;
        let delay = constant * Math.pow(base, timesCalled);
        delay = applyJitter(delay, opts.jitter);
        return Math.min(opts.maxDelayBetweenRetries || delay, delay);
      }, "calculateDelayInMs");
      return async () => {
        await sleep(calculateDelayInMs());
        timesCalled++;
      };
    }, "createExponentialDelayAsyncFn");
    retry = /* @__PURE__ */ __name2(async (callback, options = {}) => {
      let iterations = 0;
      const { shouldRetry, initialDelay, maxDelayBetweenRetries, factor, retryImmediately, jitter, onBeforeRetry } = {
        ...defaultOptions,
        ...options
      };
      const delay = createExponentialDelayAsyncFn({
        initialDelay,
        maxDelayBetweenRetries,
        factor,
        jitter
      });
      while (true) try {
        return await callback();
      } catch (e) {
        iterations++;
        if (!shouldRetry(e, iterations)) throw e;
        if (onBeforeRetry) await onBeforeRetry(iterations);
        if (retryImmediately && iterations === 1) await sleep(applyJitter(RETRY_IMMEDIATELY_DELAY, jitter));
        else await delay();
      }
    }, "retry");
  }
});
var init_retry = __esm({
  "node_modules/@clerk/shared/dist/runtime/retry.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_retry_DAlTROH9();
  }
});
var init_instance_Cze6Nv61 = __esm({
  "node_modules/@clerk/shared/dist/runtime/instance-Cze6Nv61.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});
function isLegacyDevAccountPortalOrigin(host) {
  return LEGACY_DEV_INSTANCE_SUFFIXES.some((legacyDevSuffix) => {
    return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
  });
}
__name(isLegacyDevAccountPortalOrigin, "isLegacyDevAccountPortalOrigin");
function isCurrentDevAccountPortalOrigin(host) {
  return CURRENT_DEV_INSTANCE_SUFFIXES.some((currentDevSuffix) => {
    return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
  });
}
__name(isCurrentDevAccountPortalOrigin, "isCurrentDevAccountPortalOrigin");
var init_url_Cdy8w8vK = __esm({
  "node_modules/@clerk/shared/dist/runtime/url-Cdy8w8vK.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_constants_ByUssRbE();
    init_instance_Cze6Nv61();
    __name2(isLegacyDevAccountPortalOrigin, "isLegacyDevAccountPortalOrigin");
    __name2(isCurrentDevAccountPortalOrigin, "isCurrentDevAccountPortalOrigin");
  }
});
var init_url = __esm({
  "node_modules/@clerk/shared/dist/runtime/url.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_constants_ByUssRbE();
    init_instance_Cze6Nv61();
    init_url_Cdy8w8vK();
  }
});
function createErrorTypeGuard(ErrorClass) {
  function typeGuard(error32) {
    const target = error32 ?? this;
    if (!target) throw new TypeError(`${ErrorClass.kind || ErrorClass.name} type guard requires an error object`);
    if (ErrorClass.kind && typeof target === "object" && target !== null && "constructor" in target) {
      if (target.constructor?.kind === ErrorClass.kind) return true;
    }
    return target instanceof ErrorClass;
  }
  __name(typeGuard, "typeGuard");
  __name2(typeGuard, "typeGuard");
  return typeGuard;
}
__name(createErrorTypeGuard, "createErrorTypeGuard");
function parseError(error32) {
  return new ClerkAPIError(error32);
}
__name(parseError, "parseError");
function buildErrorThrower({ packageName, customMessages }) {
  let pkg = packageName;
  function buildMessage(rawMessage, replacements) {
    if (!replacements) return `${pkg}: ${rawMessage}`;
    let msg = rawMessage;
    const matches2 = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
    for (const match3 of matches2) {
      const replacement = (replacements[match3[1]] || "").toString();
      msg = msg.replace(`{{${match3[1]}}}`, replacement);
    }
    return `${pkg}: ${msg}`;
  }
  __name(buildMessage, "buildMessage");
  __name2(buildMessage, "buildMessage");
  const messages = {
    ...DefaultMessages,
    ...customMessages
  };
  return {
    setPackageName({ packageName: packageName$1 }) {
      if (typeof packageName$1 === "string") pkg = packageName$1;
      return this;
    },
    setMessages({ customMessages: customMessages$1 }) {
      Object.assign(messages, customMessages$1 || {});
      return this;
    },
    throwInvalidPublishableKeyError(params) {
      throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
    },
    throwInvalidProxyUrl(params) {
      throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
    },
    throwMissingPublishableKeyError() {
      throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
    },
    throwMissingSecretKeyError() {
      throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
    },
    throwMissingClerkProviderError(params) {
      throw new Error(buildMessage(messages.MissingClerkProvider, params));
    },
    throw(message) {
      throw new Error(buildMessage(message));
    }
  };
}
__name(buildErrorThrower, "buildErrorThrower");
var ClerkAPIError;
var isClerkAPIError;
var ClerkError;
var ClerkAPIResponseError;
var isClerkAPIResponseError;
var DefaultMessages;
var ClerkRuntimeError;
var isClerkRuntimeError;
var init_error_Dl9xmUf3 = __esm({
  "node_modules/@clerk/shared/dist/runtime/error-Dl9xmUf3.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name2(createErrorTypeGuard, "createErrorTypeGuard");
    ClerkAPIError = class {
      static {
        __name(this, "ClerkAPIError");
      }
      static {
        __name2(this, "ClerkAPIError");
      }
      static kind = "ClerkApiError";
      code;
      message;
      longMessage;
      meta;
      constructor(json) {
        const parsedError = {
          code: json.code,
          message: json.message,
          longMessage: json.long_message,
          meta: {
            paramName: json.meta?.param_name,
            sessionId: json.meta?.session_id,
            emailAddresses: json.meta?.email_addresses,
            identifiers: json.meta?.identifiers,
            zxcvbn: json.meta?.zxcvbn,
            plan: json.meta?.plan,
            isPlanUpgradePossible: json.meta?.is_plan_upgrade_possible
          }
        };
        this.code = parsedError.code;
        this.message = parsedError.message;
        this.longMessage = parsedError.longMessage;
        this.meta = parsedError.meta;
      }
    };
    isClerkAPIError = createErrorTypeGuard(ClerkAPIError);
    __name2(parseError, "parseError");
    ClerkError = class ClerkError2 extends Error {
      static {
        __name(this, "ClerkError2");
      }
      static {
        __name2(this, "ClerkError");
      }
      static kind = "ClerkError";
      clerkError = true;
      code;
      longMessage;
      docsUrl;
      cause;
      get name() {
        return this.constructor.name;
      }
      constructor(opts) {
        super(new.target.formatMessage(new.target.kind, opts.message, opts.code, opts.docsUrl), { cause: opts.cause });
        Object.setPrototypeOf(this, ClerkError2.prototype);
        this.code = opts.code;
        this.docsUrl = opts.docsUrl;
        this.longMessage = opts.longMessage;
        this.cause = opts.cause;
      }
      toString() {
        return `[${this.name}]
Message:${this.message}`;
      }
      static formatMessage(name, msg, code, docsUrl) {
        const prefix = "Clerk:";
        const regex = new RegExp(prefix.replace(" ", "\\s*"), "i");
        msg = msg.replace(regex, "");
        msg = `${prefix} ${msg.trim()}

(code="${code}")

`;
        if (docsUrl) msg += `

Docs: ${docsUrl}`;
        return msg;
      }
    };
    ClerkAPIResponseError = class ClerkAPIResponseError2 extends ClerkError {
      static {
        __name(this, "ClerkAPIResponseError2");
      }
      static {
        __name2(this, "ClerkAPIResponseError");
      }
      static kind = "ClerkAPIResponseError";
      status;
      clerkTraceId;
      retryAfter;
      errors;
      constructor(message, options) {
        const { data: errorsJson, status, clerkTraceId, retryAfter } = options;
        super({
          ...options,
          message,
          code: "api_response_error"
        });
        Object.setPrototypeOf(this, ClerkAPIResponseError2.prototype);
        this.status = status;
        this.clerkTraceId = clerkTraceId;
        this.retryAfter = retryAfter;
        this.errors = (errorsJson || []).map((e) => new ClerkAPIError(e));
      }
      toString() {
        let message = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map((e) => JSON.stringify(e))}`;
        if (this.clerkTraceId) message += `
Clerk Trace ID: ${this.clerkTraceId}`;
        return message;
      }
      static formatMessage(name, msg, _2, __) {
        return msg;
      }
    };
    isClerkAPIResponseError = createErrorTypeGuard(ClerkAPIResponseError);
    DefaultMessages = Object.freeze({
      InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
      InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
      MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
      MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
      MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
    });
    __name2(buildErrorThrower, "buildErrorThrower");
    ClerkRuntimeError = class ClerkRuntimeError2 extends ClerkError {
      static {
        __name(this, "ClerkRuntimeError2");
      }
      static {
        __name2(this, "ClerkRuntimeError");
      }
      static kind = "ClerkRuntimeError";
      /**
      * @deprecated Use `clerkError` property instead. This property is maintained for backward compatibility.
      */
      clerkRuntimeError = true;
      constructor(message, options) {
        super({
          ...options,
          message
        });
        Object.setPrototypeOf(this, ClerkRuntimeError2.prototype);
      }
    };
    isClerkRuntimeError = createErrorTypeGuard(ClerkRuntimeError);
  }
});
var init_error = __esm({
  "node_modules/@clerk/shared/dist/runtime/error.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_error_Dl9xmUf3();
  }
});
var errorThrower;
var isDevOrStagingUrl;
var init_chunk_YBVFDYDR = __esm({
  "node_modules/@clerk/backend/dist/chunk-YBVFDYDR.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_deprecated();
    init_keys();
    init_retry();
    init_url();
    init_error();
    init_keys();
    errorThrower = buildErrorThrower({ packageName: "@clerk/backend" });
    ({ isDevOrStagingUrl } = createDevOrStagingUrlCache());
  }
});
var TokenVerificationErrorCode;
var TokenVerificationErrorReason;
var TokenVerificationErrorAction;
var TokenVerificationError;
var MachineTokenVerificationErrorCode;
var _MachineTokenVerificationError;
var MachineTokenVerificationError;
var init_chunk_I4B6KCGC = __esm({
  "node_modules/@clerk/backend/dist/chunk-I4B6KCGC.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_error();
    TokenVerificationErrorCode = {
      InvalidSecretKey: "clerk_key_invalid"
    };
    TokenVerificationErrorReason = {
      TokenExpired: "token-expired",
      TokenInvalid: "token-invalid",
      TokenInvalidAlgorithm: "token-invalid-algorithm",
      TokenInvalidAuthorizedParties: "token-invalid-authorized-parties",
      TokenInvalidSignature: "token-invalid-signature",
      TokenNotActiveYet: "token-not-active-yet",
      TokenIatInTheFuture: "token-iat-in-the-future",
      TokenVerificationFailed: "token-verification-failed",
      InvalidSecretKey: "secret-key-invalid",
      LocalJWKMissing: "jwk-local-missing",
      RemoteJWKFailedToLoad: "jwk-remote-failed-to-load",
      RemoteJWKInvalid: "jwk-remote-invalid",
      RemoteJWKMissing: "jwk-remote-missing",
      JWKFailedToResolve: "jwk-failed-to-resolve",
      JWKKidMismatch: "jwk-kid-mismatch"
    };
    TokenVerificationErrorAction = {
      ContactSupport: "Contact support@clerk.com",
      EnsureClerkJWT: "Make sure that this is a valid Clerk-generated JWT.",
      SetClerkJWTKey: "Set the CLERK_JWT_KEY environment variable.",
      SetClerkSecretKey: "Set the CLERK_SECRET_KEY environment variable.",
      EnsureClockSync: "Make sure your system clock is in sync (e.g. turn off and on automatic time synchronization)."
    };
    TokenVerificationError = class _TokenVerificationError extends Error {
      static {
        __name(this, "_TokenVerificationError");
      }
      static {
        __name2(this, "_TokenVerificationError");
      }
      constructor({
        action,
        message,
        reason
      }) {
        super(message);
        Object.setPrototypeOf(this, _TokenVerificationError.prototype);
        this.reason = reason;
        this.message = message;
        this.action = action;
      }
      getFullMessage() {
        return `${[this.message, this.action].filter((m) => m).join(" ")} (reason=${this.reason}, token-carrier=${this.tokenCarrier})`;
      }
    };
    MachineTokenVerificationErrorCode = {
      TokenInvalid: "token-invalid",
      InvalidSecretKey: "secret-key-invalid",
      UnexpectedError: "unexpected-error",
      TokenVerificationFailed: "token-verification-failed"
    };
    _MachineTokenVerificationError = class _MachineTokenVerificationError2 extends ClerkError {
      static {
        __name(this, "_MachineTokenVerificationError2");
      }
      static {
        __name2(this, "_MachineTokenVerificationError");
      }
      constructor({
        message,
        code,
        status,
        action
      }) {
        super({ message, code });
        Object.setPrototypeOf(this, _MachineTokenVerificationError2.prototype);
        this.status = status;
        this.action = action;
      }
      // Keep message unformatted, matching ClerkAPIResponseError's approach
      static formatMessage(_name, msg, _code, _docsUrl) {
        return msg;
      }
      getFullMessage() {
        return `${this.message} (code=${this.code}, status=${this.status || "n/a"})`;
      }
    };
    _MachineTokenVerificationError.kind = "MachineTokenVerificationError";
    MachineTokenVerificationError = _MachineTokenVerificationError;
  }
});
var webcrypto;
var init_crypto = __esm({
  "node_modules/@clerk/backend/dist/runtime/browser/crypto.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    webcrypto = crypto;
  }
});
var init_isomorphicAtob = __esm({
  "node_modules/@clerk/shared/dist/runtime/isomorphicAtob.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_isomorphicAtob_DybBXGFR();
  }
});
function parse(string, encoding, opts = {}) {
  if (!encoding.codes) {
    encoding.codes = {};
    for (let i = 0; i < encoding.chars.length; ++i) {
      encoding.codes[encoding.chars[i]] = i;
    }
  }
  if (!opts.loose && string.length * encoding.bits & 7) {
    throw new SyntaxError("Invalid padding");
  }
  let end = string.length;
  while (string[end - 1] === "=") {
    --end;
    if (!opts.loose && !((string.length - end) * encoding.bits & 7)) {
      throw new SyntaxError("Invalid padding");
    }
  }
  const out = new (opts.out ?? Uint8Array)(end * encoding.bits / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = encoding.codes[string[i]];
    if (value === void 0) {
      throw new SyntaxError("Invalid character " + string[i]);
    }
    buffer = buffer << encoding.bits | value;
    bits += encoding.bits;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= encoding.bits || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
}
__name(parse, "parse");
function stringify(data, encoding, opts = {}) {
  const { pad = true } = opts;
  const mask = (1 << encoding.bits) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | 255 & data[i];
    bits += 8;
    while (bits > encoding.bits) {
      bits -= encoding.bits;
      out += encoding.chars[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += encoding.chars[mask & buffer << encoding.bits - bits];
  }
  if (pad) {
    while (out.length * encoding.bits & 7) {
      out += "=";
    }
  }
  return out;
}
__name(stringify, "stringify");
function getCryptoAlgorithm(algorithmName) {
  const hash = algToHash[algorithmName];
  const name = jwksAlgToCryptoAlg[algorithmName];
  if (!hash || !name) {
    throw new Error(`Unsupported algorithm ${algorithmName}, expected one of ${algs.join(",")}.`);
  }
  return {
    hash: { name: algToHash[algorithmName] },
    name: jwksAlgToCryptoAlg[algorithmName]
  };
}
__name(getCryptoAlgorithm, "getCryptoAlgorithm");
function pemToBuffer(secret) {
  const trimmed = secret.replace(/-----BEGIN.*?-----/g, "").replace(/-----END.*?-----/g, "").replace(/\s/g, "");
  const decoded = isomorphicAtob(trimmed);
  const buffer = new ArrayBuffer(decoded.length);
  const bufView = new Uint8Array(buffer);
  for (let i = 0, strLen = decoded.length; i < strLen; i++) {
    bufView[i] = decoded.charCodeAt(i);
  }
  return bufView;
}
__name(pemToBuffer, "pemToBuffer");
function importKey(key, algorithm, keyUsage) {
  if (typeof key === "object") {
    return runtime.crypto.subtle.importKey("jwk", key, algorithm, false, [keyUsage]);
  }
  const keyData = pemToBuffer(key);
  const format = keyUsage === "sign" ? "pkcs8" : "spki";
  return runtime.crypto.subtle.importKey(format, keyData, algorithm, false, [keyUsage]);
}
__name(importKey, "importKey");
async function hasValidSignature(jwt, key) {
  const { header, signature, raw: raw2 } = jwt;
  const encoder = new TextEncoder();
  const data = encoder.encode([raw2.header, raw2.payload].join("."));
  const algorithm = getCryptoAlgorithm(header.alg);
  try {
    const cryptoKey = await importKey(key, algorithm, "verify");
    const verified = await runtime.crypto.subtle.verify(algorithm.name, cryptoKey, signature, data);
    return { data: verified };
  } catch (error32) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalidSignature,
          message: error32?.message
        })
      ]
    };
  }
}
__name(hasValidSignature, "hasValidSignature");
function decodeJwt(token) {
  const tokenParts = (token || "").toString().split(".");
  if (tokenParts.length !== 3) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalid,
          message: `Invalid JWT form. A JWT consists of three parts separated by dots.`
        })
      ]
    };
  }
  const [rawHeader, rawPayload, rawSignature] = tokenParts;
  const decoder = new TextDecoder();
  const header = JSON.parse(decoder.decode(base64url.parse(rawHeader, { loose: true })));
  const payload = JSON.parse(decoder.decode(base64url.parse(rawPayload, { loose: true })));
  const signature = base64url.parse(rawSignature, { loose: true });
  const data = {
    header,
    payload,
    signature,
    raw: {
      header: rawHeader,
      payload: rawPayload,
      signature: rawSignature,
      text: token
    }
  };
  return { data };
}
__name(decodeJwt, "decodeJwt");
async function verifyJwt(token, options) {
  const { audience, authorizedParties, clockSkewInMs, key, headerType } = options;
  const clockSkew = clockSkewInMs || DEFAULT_CLOCK_SKEW_IN_MS;
  const { data: decoded, errors } = decodeJwt(token);
  if (errors) {
    return { errors };
  }
  const { header, payload } = decoded;
  try {
    const { typ, alg } = header;
    assertHeaderType(typ, headerType);
    assertHeaderAlgorithm(alg);
    const { azp, sub, aud, iat, exp, nbf } = payload;
    assertSubClaim(sub);
    assertAudienceClaim([aud], [audience]);
    assertAuthorizedPartiesClaim(azp, authorizedParties);
    assertExpirationClaim(exp, clockSkew);
    assertActivationClaim(nbf, clockSkew);
    assertIssuedAtClaim(iat, clockSkew);
  } catch (err) {
    return { errors: [err] };
  }
  const { data: signatureValid, errors: signatureErrors } = await hasValidSignature(decoded, key);
  if (signatureErrors) {
    return {
      errors: [
        new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenVerificationFailed,
          message: `Error verifying JWT signature. ${signatureErrors[0]}`
        })
      ]
    };
  }
  if (!signatureValid) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalidSignature,
          message: "JWT signature is invalid."
        })
      ]
    };
  }
  return { data: payload };
}
__name(verifyJwt, "verifyJwt");
var globalFetch;
var runtime;
var base64url;
var base64UrlEncoding;
var algToHash;
var RSA_ALGORITHM_NAME;
var jwksAlgToCryptoAlg;
var algs;
var isArrayString;
var assertAudienceClaim;
var assertHeaderType;
var assertHeaderAlgorithm;
var assertSubClaim;
var assertAuthorizedPartiesClaim;
var assertExpirationClaim;
var assertActivationClaim;
var assertIssuedAtClaim;
var DEFAULT_CLOCK_SKEW_IN_MS;
var init_chunk_KDNHJOF3 = __esm({
  "node_modules/@clerk/backend/dist/chunk-KDNHJOF3.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_chunk_I4B6KCGC();
    init_crypto();
    init_isomorphicAtob();
    globalFetch = fetch.bind(globalThis);
    runtime = {
      crypto: webcrypto,
      get fetch() {
        return false ? fetch : globalFetch;
      },
      AbortController: globalThis.AbortController,
      Blob: globalThis.Blob,
      FormData: globalThis.FormData,
      Headers: globalThis.Headers,
      Request: globalThis.Request,
      Response: globalThis.Response
    };
    base64url = {
      parse(string, opts) {
        return parse(string, base64UrlEncoding, opts);
      },
      stringify(data, opts) {
        return stringify(data, base64UrlEncoding, opts);
      }
    };
    base64UrlEncoding = {
      chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      bits: 6
    };
    __name2(parse, "parse");
    __name2(stringify, "stringify");
    algToHash = {
      RS256: "SHA-256",
      RS384: "SHA-384",
      RS512: "SHA-512"
    };
    RSA_ALGORITHM_NAME = "RSASSA-PKCS1-v1_5";
    jwksAlgToCryptoAlg = {
      RS256: RSA_ALGORITHM_NAME,
      RS384: RSA_ALGORITHM_NAME,
      RS512: RSA_ALGORITHM_NAME
    };
    algs = Object.keys(algToHash);
    __name2(getCryptoAlgorithm, "getCryptoAlgorithm");
    isArrayString = /* @__PURE__ */ __name2((s2) => {
      return Array.isArray(s2) && s2.length > 0 && s2.every((a) => typeof a === "string");
    }, "isArrayString");
    assertAudienceClaim = /* @__PURE__ */ __name2((aud, audience) => {
      const audienceList = [audience].flat().filter((a) => !!a);
      const audList = [aud].flat().filter((a) => !!a);
      const shouldVerifyAudience = audienceList.length > 0 && audList.length > 0;
      if (!shouldVerifyAudience) {
        return;
      }
      if (typeof aud === "string") {
        if (!audienceList.includes(aud)) {
          throw new TokenVerificationError({
            action: TokenVerificationErrorAction.EnsureClerkJWT,
            reason: TokenVerificationErrorReason.TokenVerificationFailed,
            message: `Invalid JWT audience claim (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(
              audienceList
            )}".`
          });
        }
      } else if (isArrayString(aud)) {
        if (!aud.some((a) => audienceList.includes(a))) {
          throw new TokenVerificationError({
            action: TokenVerificationErrorAction.EnsureClerkJWT,
            reason: TokenVerificationErrorReason.TokenVerificationFailed,
            message: `Invalid JWT audience claim array (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(
              audienceList
            )}".`
          });
        }
      }
    }, "assertAudienceClaim");
    assertHeaderType = /* @__PURE__ */ __name2((typ, allowedTypes = "JWT") => {
      if (typeof typ === "undefined") {
        return;
      }
      const allowed = Array.isArray(allowedTypes) ? allowedTypes : [allowedTypes];
      if (!allowed.includes(typ)) {
        throw new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenInvalid,
          message: `Invalid JWT type ${JSON.stringify(typ)}. Expected "${allowed.join(", ")}".`
        });
      }
    }, "assertHeaderType");
    assertHeaderAlgorithm = /* @__PURE__ */ __name2((alg) => {
      if (!algs.includes(alg)) {
        throw new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenInvalidAlgorithm,
          message: `Invalid JWT algorithm ${JSON.stringify(alg)}. Supported: ${algs}.`
        });
      }
    }, "assertHeaderAlgorithm");
    assertSubClaim = /* @__PURE__ */ __name2((sub) => {
      if (typeof sub !== "string") {
        throw new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenVerificationFailed,
          message: `Subject claim (sub) is required and must be a string. Received ${JSON.stringify(sub)}.`
        });
      }
    }, "assertSubClaim");
    assertAuthorizedPartiesClaim = /* @__PURE__ */ __name2((azp, authorizedParties) => {
      if (!azp || !authorizedParties || authorizedParties.length === 0) {
        return;
      }
      if (!authorizedParties.includes(azp)) {
        throw new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalidAuthorizedParties,
          message: `Invalid JWT Authorized party claim (azp) ${JSON.stringify(azp)}. Expected "${authorizedParties}".`
        });
      }
    }, "assertAuthorizedPartiesClaim");
    assertExpirationClaim = /* @__PURE__ */ __name2((exp, clockSkewInMs) => {
      if (typeof exp !== "number") {
        throw new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenVerificationFailed,
          message: `Invalid JWT expiry date claim (exp) ${JSON.stringify(exp)}. Expected number.`
        });
      }
      const currentDate = new Date(Date.now());
      const expiryDate = /* @__PURE__ */ new Date(0);
      expiryDate.setUTCSeconds(exp);
      const expired = expiryDate.getTime() <= currentDate.getTime() - clockSkewInMs;
      if (expired) {
        throw new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenExpired,
          message: `JWT is expired. Expiry date: ${expiryDate.toUTCString()}, Current date: ${currentDate.toUTCString()}.`
        });
      }
    }, "assertExpirationClaim");
    assertActivationClaim = /* @__PURE__ */ __name2((nbf, clockSkewInMs) => {
      if (typeof nbf === "undefined") {
        return;
      }
      if (typeof nbf !== "number") {
        throw new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenVerificationFailed,
          message: `Invalid JWT not before date claim (nbf) ${JSON.stringify(nbf)}. Expected number.`
        });
      }
      const currentDate = new Date(Date.now());
      const notBeforeDate = /* @__PURE__ */ new Date(0);
      notBeforeDate.setUTCSeconds(nbf);
      const early = notBeforeDate.getTime() > currentDate.getTime() + clockSkewInMs;
      if (early) {
        throw new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenNotActiveYet,
          message: `JWT cannot be used prior to not before date claim (nbf). Not before date: ${notBeforeDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
        });
      }
    }, "assertActivationClaim");
    assertIssuedAtClaim = /* @__PURE__ */ __name2((iat, clockSkewInMs) => {
      if (typeof iat === "undefined") {
        return;
      }
      if (typeof iat !== "number") {
        throw new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenVerificationFailed,
          message: `Invalid JWT issued at date claim (iat) ${JSON.stringify(iat)}. Expected number.`
        });
      }
      const currentDate = new Date(Date.now());
      const issuedAtDate = /* @__PURE__ */ new Date(0);
      issuedAtDate.setUTCSeconds(iat);
      const postIssued = issuedAtDate.getTime() > currentDate.getTime() + clockSkewInMs;
      if (postIssued) {
        throw new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenIatInTheFuture,
          message: `JWT issued at date claim (iat) is in the future. Issued at date: ${issuedAtDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
        });
      }
    }, "assertIssuedAtClaim");
    __name2(pemToBuffer, "pemToBuffer");
    __name2(importKey, "importKey");
    DEFAULT_CLOCK_SKEW_IN_MS = 5 * 1e3;
    __name2(hasValidSignature, "hasValidSignature");
    __name2(decodeJwt, "decodeJwt");
    __name2(verifyJwt, "verifyJwt");
  }
});
var __create;
var __defProp22;
var __getOwnPropDesc;
var __getOwnPropNames2;
var __getProtoOf;
var __hasOwnProp;
var __typeError;
var __commonJS;
var __copyProps;
var __toESM;
var __accessCheck;
var __privateGet;
var __privateAdd;
var __privateSet;
var __privateMethod;
var init_chunk_TOROEX6P = __esm({
  "node_modules/@clerk/backend/dist/chunk-TOROEX6P.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __create = Object.create;
    __defProp22 = Object.defineProperty;
    __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    __getOwnPropNames2 = Object.getOwnPropertyNames;
    __getProtoOf = Object.getPrototypeOf;
    __hasOwnProp = Object.prototype.hasOwnProperty;
    __typeError = /* @__PURE__ */ __name2((msg) => {
      throw TypeError(msg);
    }, "__typeError");
    __commonJS = /* @__PURE__ */ __name2((cb, mod) => /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    }, "__require"), "__require"), "__commonJS");
    __copyProps = /* @__PURE__ */ __name2((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp22(to, key, { get: /* @__PURE__ */ __name2(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    __toESM = /* @__PURE__ */ __name2((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp22(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    __accessCheck = /* @__PURE__ */ __name2((obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg), "__accessCheck");
    __privateGet = /* @__PURE__ */ __name2((obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), "__privateGet");
    __privateAdd = /* @__PURE__ */ __name2((obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value), "__privateAdd");
    __privateSet = /* @__PURE__ */ __name2((obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value), "__privateSet");
    __privateMethod = /* @__PURE__ */ __name2((obj, member, method) => (__accessCheck(obj, member, "access private method"), method), "__privateMethod");
  }
});
function buildAccountsBaseUrl(frontendApi) {
  if (!frontendApi) return "";
  return `https://${frontendApi.replace(/clerk\.accountsstage\./, "accountsstage.").replace(/clerk\.accounts\.|clerk\./, "accounts.")}`;
}
__name(buildAccountsBaseUrl, "buildAccountsBaseUrl");
var init_buildAccountsBaseUrl = __esm({
  "node_modules/@clerk/shared/dist/runtime/buildAccountsBaseUrl.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name2(buildAccountsBaseUrl, "buildAccountsBaseUrl");
  }
});
var TYPES_TO_OBJECTS;
var ALLOWED_LEVELS;
var ALLOWED_TYPES;
var isValidMaxAge;
var isValidLevel;
var isValidVerificationType;
var isValidFactorAge;
var prefixWithOrg;
var checkOrgAuthorization;
var checkForFeatureOrPlan;
var checkBillingAuthorization;
var splitByScope;
var validateReverificationConfig;
var checkReverificationAuthorization;
var combine;
var createCheckAuthorization;
var init_authorization_CV9xGlIX = __esm({
  "node_modules/@clerk/shared/dist/runtime/authorization-CV9xGlIX.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    TYPES_TO_OBJECTS = {
      strict_mfa: {
        afterMinutes: 10,
        level: "multi_factor"
      },
      strict: {
        afterMinutes: 10,
        level: "second_factor"
      },
      moderate: {
        afterMinutes: 60,
        level: "second_factor"
      },
      lax: {
        afterMinutes: 1440,
        level: "second_factor"
      }
    };
    ALLOWED_LEVELS = /* @__PURE__ */ new Set([
      "first_factor",
      "second_factor",
      "multi_factor"
    ]);
    ALLOWED_TYPES = /* @__PURE__ */ new Set([
      "strict_mfa",
      "strict",
      "moderate",
      "lax"
    ]);
    isValidMaxAge = /* @__PURE__ */ __name2((maxAge) => typeof maxAge === "number" && maxAge > 0, "isValidMaxAge");
    isValidLevel = /* @__PURE__ */ __name2((level) => ALLOWED_LEVELS.has(level), "isValidLevel");
    isValidVerificationType = /* @__PURE__ */ __name2((type) => ALLOWED_TYPES.has(type), "isValidVerificationType");
    isValidFactorAge = /* @__PURE__ */ __name2((x) => typeof x === "number" && Number.isFinite(x) && (x === -1 || x >= 0), "isValidFactorAge");
    prefixWithOrg = /* @__PURE__ */ __name2((value) => value.replace(/^(org:)*/, "org:"), "prefixWithOrg");
    checkOrgAuthorization = /* @__PURE__ */ __name2((params, options) => {
      const { orgId, orgRole, orgPermissions } = options;
      const roleAsked = params.role !== void 0;
      const permissionAsked = params.permission !== void 0;
      if (!roleAsked && !permissionAsked) return "skip";
      if (roleAsked && typeof params.role !== "string") return "fail";
      if (permissionAsked && typeof params.permission !== "string") return "fail";
      if (!orgId) return "fail";
      if (roleAsked) {
        if (typeof orgRole !== "string" || !orgRole) return "fail";
        if (prefixWithOrg(orgRole) !== prefixWithOrg(params.role)) return "fail";
      }
      if (permissionAsked) {
        if (!Array.isArray(orgPermissions)) return "fail";
        if (!orgPermissions.includes(prefixWithOrg(params.permission))) return "fail";
      }
      return "pass";
    }, "checkOrgAuthorization");
    checkForFeatureOrPlan = /* @__PURE__ */ __name2((claim, featureOrPlan) => {
      const { org: orgFeatures, user: userFeatures } = splitByScope(claim);
      const [scope, _id] = featureOrPlan.split(":");
      const id = _id || scope;
      if (scope === "org") return orgFeatures.includes(id);
      else if (scope === "user") return userFeatures.includes(id);
      else return [...orgFeatures, ...userFeatures].includes(id);
    }, "checkForFeatureOrPlan");
    checkBillingAuthorization = /* @__PURE__ */ __name2((params, options) => {
      const { features: features22, plans } = options;
      const featureAsked = params.feature !== void 0;
      const planAsked = params.plan !== void 0;
      if (!featureAsked && !planAsked) return "skip";
      if (featureAsked && typeof params.feature !== "string") return "fail";
      if (planAsked && typeof params.plan !== "string") return "fail";
      if (featureAsked) {
        if (typeof features22 !== "string" || !features22) return "fail";
        try {
          if (!checkForFeatureOrPlan(features22, params.feature)) return "fail";
        } catch {
          return "fail";
        }
      }
      if (planAsked) {
        if (typeof plans !== "string" || !plans) return "fail";
        try {
          if (!checkForFeatureOrPlan(plans, params.plan)) return "fail";
        } catch {
          return "fail";
        }
      }
      return "pass";
    }, "checkBillingAuthorization");
    splitByScope = /* @__PURE__ */ __name2((fea) => {
      const features22 = fea ? fea.split(",").map((f) => f.trim()) : [];
      return {
        org: features22.filter((f) => f.split(":")[0].includes("o")).map((f) => f.split(":")[1]),
        user: features22.filter((f) => f.split(":")[0].includes("u")).map((f) => f.split(":")[1])
      };
    }, "splitByScope");
    validateReverificationConfig = /* @__PURE__ */ __name2((config22) => {
      if (!config22) return false;
      const convertConfigToObject = /* @__PURE__ */ __name2((config$1) => {
        if (typeof config$1 === "string") return TYPES_TO_OBJECTS[config$1];
        return config$1;
      }, "convertConfigToObject");
      const isValidStringValue = typeof config22 === "string" && isValidVerificationType(config22);
      const isValidObjectValue = typeof config22 === "object" && isValidLevel(config22.level) && isValidMaxAge(config22.afterMinutes);
      if (isValidStringValue || isValidObjectValue) return convertConfigToObject.bind(null, config22);
      return false;
    }, "validateReverificationConfig");
    checkReverificationAuthorization = /* @__PURE__ */ __name2((params, { factorVerificationAge }) => {
      if (params.reverification === void 0) return "skip";
      if (!factorVerificationAge) return "fail";
      if (!Array.isArray(factorVerificationAge) || factorVerificationAge.length !== 2 || !isValidFactorAge(factorVerificationAge[0]) || !isValidFactorAge(factorVerificationAge[1])) return "fail";
      const getConfig = validateReverificationConfig(params.reverification);
      if (!getConfig) return "fail";
      const { level, afterMinutes } = getConfig();
      const [factor1Age, factor2Age] = factorVerificationAge;
      if (factor1Age === -1 && factor2Age === -1) return "fail";
      const factor1FreshEnough = factor1Age !== -1 && afterMinutes > factor1Age;
      const factor2FreshEnough = factor2Age !== -1 && afterMinutes > factor2Age;
      switch (level) {
        case "first_factor":
          return factor1FreshEnough ? "pass" : "fail";
        case "second_factor":
          if (factor2Age === -1) return factor1FreshEnough ? "pass" : "fail";
          if (factor1Age === -1) return factor2FreshEnough ? "pass" : "fail";
          return factor2FreshEnough ? "pass" : "fail";
        case "multi_factor":
          if (factor2Age === -1) return factor1FreshEnough ? "pass" : "fail";
          if (factor1Age === -1) return "fail";
          return factor1FreshEnough && factor2FreshEnough ? "pass" : "fail";
      }
    }, "checkReverificationAuthorization");
    combine = /* @__PURE__ */ __name2((results) => results.some((r) => r === "pass") && results.every((r) => r === "pass" || r === "skip"), "combine");
    createCheckAuthorization = /* @__PURE__ */ __name2((options) => {
      return (params) => {
        if (!options.userId) return false;
        return combine([
          checkOrgAuthorization(params, options),
          checkBillingAuthorization(params, options),
          checkReverificationAuthorization(params, options)
        ]);
      };
    }, "createCheckAuthorization");
  }
});
var init_authorization = __esm({
  "node_modules/@clerk/shared/dist/runtime/authorization.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_authorization_CV9xGlIX();
  }
});
function buildOrgPermissions({ features: features22, permissions, featurePermissionMap }) {
  if (!features22 || !permissions || !featurePermissionMap) return [];
  const orgPermissions = [];
  for (let featureIndex = 0; featureIndex < features22.length; featureIndex++) {
    const feature = features22[featureIndex];
    if (featureIndex >= featurePermissionMap.length) continue;
    const permissionBits = featurePermissionMap[featureIndex];
    if (!permissionBits) continue;
    for (let permIndex = 0; permIndex < permissionBits.length; permIndex++) if (permissionBits[permIndex] === 1) orgPermissions.push(`org:${feature}:${permissions[permIndex]}`);
  }
  return orgPermissions;
}
__name(buildOrgPermissions, "buildOrgPermissions");
var parsePermissions;
var __experimental_JWTPayloadToAuthObjectProperties;
var init_jwtPayloadParser = __esm({
  "node_modules/@clerk/shared/dist/runtime/jwtPayloadParser.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_authorization_CV9xGlIX();
    parsePermissions = /* @__PURE__ */ __name2(({ per, fpm }) => {
      if (!per || !fpm) return {
        permissions: [],
        featurePermissionMap: []
      };
      const permissions = per.split(",").map((p) => p.trim());
      return {
        permissions,
        featurePermissionMap: fpm.split(",").map((permission22) => Number.parseInt(permission22.trim(), 10)).map((permission22) => permission22.toString(2).padStart(permissions.length, "0").split("").map((bit) => Number.parseInt(bit, 10)).reverse()).filter(Boolean)
      };
    }, "parsePermissions");
    __name2(buildOrgPermissions, "buildOrgPermissions");
    __experimental_JWTPayloadToAuthObjectProperties = /* @__PURE__ */ __name2((claims) => {
      let orgId;
      let orgRole;
      let orgSlug;
      let orgPermissions;
      const factorVerificationAge = claims.fva ?? null;
      const sessionStatus = claims.sts ?? null;
      switch (claims.v) {
        case 2:
          if (claims.o) {
            orgId = claims.o?.id;
            orgSlug = claims.o?.slg;
            if (claims.o?.rol) orgRole = `org:${claims.o?.rol}`;
            const { org } = splitByScope(claims.fea);
            const { permissions, featurePermissionMap } = parsePermissions({
              per: claims.o?.per,
              fpm: claims.o?.fpm
            });
            orgPermissions = buildOrgPermissions({
              features: org,
              featurePermissionMap,
              permissions
            });
          }
          break;
        default:
          orgId = claims.org_id;
          orgRole = claims.org_role;
          orgSlug = claims.org_slug;
          orgPermissions = claims.org_permissions;
          break;
      }
      return {
        sessionClaims: claims,
        sessionId: claims.sid,
        sessionStatus,
        actor: claims.act,
        userId: claims.sub,
        orgId,
        orgRole,
        orgSlug,
        orgPermissions,
        factorVerificationAge
      };
    }, "__experimental_JWTPayloadToAuthObjectProperties");
  }
});
function _(r) {
  for (var n = [], e = 0; e < r.length; ) {
    var a = r[e];
    if (a === "*" || a === "+" || a === "?") {
      n.push({
        type: "MODIFIER",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === "\\") {
      n.push({
        type: "ESCAPED_CHAR",
        index: e++,
        value: r[e++]
      });
      continue;
    }
    if (a === "{") {
      n.push({
        type: "OPEN",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === "}") {
      n.push({
        type: "CLOSE",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === ":") {
      for (var u = "", t = e + 1; t < r.length; ) {
        var c = r.charCodeAt(t);
        if (c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95) {
          u += r[t++];
          continue;
        }
        break;
      }
      if (!u) throw new TypeError("Missing parameter name at ".concat(e));
      n.push({
        type: "NAME",
        index: e,
        value: u
      }), e = t;
      continue;
    }
    if (a === "(") {
      var o = 1, m = "", t = e + 1;
      if (r[t] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(t));
      for (; t < r.length; ) {
        if (r[t] === "\\") {
          m += r[t++] + r[t++];
          continue;
        }
        if (r[t] === ")") {
          if (o--, o === 0) {
            t++;
            break;
          }
        } else if (r[t] === "(" && (o++, r[t + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(t));
        m += r[t++];
      }
      if (o) throw new TypeError("Unbalanced pattern at ".concat(e));
      if (!m) throw new TypeError("Missing pattern at ".concat(e));
      n.push({
        type: "PATTERN",
        index: e,
        value: m
      }), e = t;
      continue;
    }
    n.push({
      type: "CHAR",
      index: e,
      value: r[e++]
    });
  }
  return n.push({
    type: "END",
    index: e,
    value: ""
  }), n;
}
__name(_, "_");
function F(r, n) {
  n === void 0 && (n = {});
  for (var e = _(r), a = n.prefixes, u = a === void 0 ? "./" : a, t = n.delimiter, c = t === void 0 ? "/#?" : t, o = [], m = 0, h = 0, p = "", f = function(l) {
    if (h < e.length && e[h].type === l) return e[h++].value;
  }, w = function(l) {
    var v = f(l);
    if (v !== void 0) return v;
    var E = e[h], N = E.type, S = E.index;
    throw new TypeError("Unexpected ".concat(N, " at ").concat(S, ", expected ").concat(l));
  }, d = function() {
    for (var l = "", v; v = f("CHAR") || f("ESCAPED_CHAR"); ) l += v;
    return l;
  }, M = function(l) {
    for (var v = 0, E = c; v < E.length; v++) {
      var N = E[v];
      if (l.indexOf(N) > -1) return true;
    }
    return false;
  }, A = function(l) {
    var v = o[o.length - 1], E = l || (v && typeof v == "string" ? v : "");
    if (v && !E) throw new TypeError('Must have text between two parameters, missing text after "'.concat(v.name, '"'));
    return !E || M(E) ? "[^".concat(s(c), "]+?") : "(?:(?!".concat(s(E), ")[^").concat(s(c), "])+?");
  }; h < e.length; ) {
    var T = f("CHAR"), x = f("NAME"), C = f("PATTERN");
    if (x || C) {
      var g = T || "";
      u.indexOf(g) === -1 && (p += g, g = ""), p && (o.push(p), p = ""), o.push({
        name: x || m++,
        prefix: g,
        suffix: "",
        pattern: C || A(g),
        modifier: f("MODIFIER") || ""
      });
      continue;
    }
    var i = T || f("ESCAPED_CHAR");
    if (i) {
      p += i;
      continue;
    }
    p && (o.push(p), p = "");
    if (f("OPEN")) {
      var g = d(), y = f("NAME") || "", O = f("PATTERN") || "", b = d();
      w("CLOSE"), o.push({
        name: y || (O ? m++ : ""),
        pattern: y && !O ? A(g) : O,
        prefix: g,
        suffix: b,
        modifier: f("MODIFIER") || ""
      });
      continue;
    }
    w("END");
  }
  return o;
}
__name(F, "F");
function H(r, n) {
  var e = [];
  return I(P(r, e, n), e, n);
}
__name(H, "H");
function I(r, n, e) {
  e === void 0 && (e = {});
  var a = e.decode, u = a === void 0 ? function(t) {
    return t;
  } : a;
  return function(t) {
    var c = r.exec(t);
    if (!c) return false;
    for (var o = c[0], m = c.index, h = /* @__PURE__ */ Object.create(null), p = function(w) {
      if (c[w] === void 0) return "continue";
      var d = n[w - 1];
      d.modifier === "*" || d.modifier === "+" ? h[d.name] = c[w].split(d.prefix + d.suffix).map(function(M) {
        return u(M, d);
      }) : h[d.name] = u(c[w], d);
    }, f = 1; f < c.length; f++) p(f);
    return {
      path: o,
      index: m,
      params: h
    };
  };
}
__name(I, "I");
function s(r) {
  return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(s, "s");
function D(r) {
  return r && r.sensitive ? "" : "i";
}
__name(D, "D");
function $(r, n) {
  if (!n) return r;
  for (var e = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, u = e.exec(r.source); u; ) n.push({
    name: u[1] || a++,
    prefix: "",
    suffix: "",
    modifier: "",
    pattern: ""
  }), u = e.exec(r.source);
  return r;
}
__name($, "$");
function W(r, n, e) {
  var a = r.map(function(u) {
    return P(u, n, e).source;
  });
  return new RegExp("(?:".concat(a.join("|"), ")"), D(e));
}
__name(W, "W");
function L(r, n, e) {
  return U(F(r, e), n, e);
}
__name(L, "L");
function U(r, n, e) {
  e === void 0 && (e = {});
  for (var a = e.strict, u = a === void 0 ? false : a, t = e.start, c = t === void 0 ? true : t, o = e.end, m = o === void 0 ? true : o, h = e.encode, p = h === void 0 ? function(v) {
    return v;
  } : h, f = e.delimiter, w = f === void 0 ? "/#?" : f, d = e.endsWith, M = d === void 0 ? "" : d, A = "[".concat(s(M), "]|$"), T = "[".concat(s(w), "]"), x = c ? "^" : "", C = 0, g = r; C < g.length; C++) {
    var i = g[C];
    if (typeof i == "string") x += s(p(i));
    else {
      var R = s(p(i.prefix)), y = s(p(i.suffix));
      if (i.pattern) if (n && n.push(i), R || y) if (i.modifier === "+" || i.modifier === "*") {
        var O = i.modifier === "*" ? "?" : "";
        x += "(?:".concat(R, "((?:").concat(i.pattern, ")(?:").concat(y).concat(R, "(?:").concat(i.pattern, "))*)").concat(y, ")").concat(O);
      } else x += "(?:".concat(R, "(").concat(i.pattern, ")").concat(y, ")").concat(i.modifier);
      else {
        if (i.modifier === "+" || i.modifier === "*") throw new TypeError('Can not repeat "'.concat(i.name, '" without a prefix and suffix'));
        x += "(".concat(i.pattern, ")").concat(i.modifier);
      }
      else x += "(?:".concat(R).concat(y, ")").concat(i.modifier);
    }
  }
  if (m) u || (x += "".concat(T, "?")), x += e.endsWith ? "(?=".concat(A, ")") : "$";
  else {
    var b = r[r.length - 1], l = typeof b == "string" ? T.indexOf(b[b.length - 1]) > -1 : b === void 0;
    u || (x += "(?:".concat(T, "(?=").concat(A, "))?")), l || (x += "(?=".concat(T, "|").concat(A, ")"));
  }
  return new RegExp(x, D(e));
}
__name(U, "U");
function P(r, n, e) {
  return r instanceof RegExp ? $(r, n) : Array.isArray(r) ? W(r, n, e) : L(r, n, e);
}
__name(P, "P");
function match2(str, options) {
  try {
    return H(str, options);
  } catch (e) {
    throw new Error(`Invalid path and options: Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x
${e.message}`);
  }
}
__name(match2, "match2");
var init_pathToRegexp_Bu45OrlU = __esm({
  "node_modules/@clerk/shared/dist/runtime/pathToRegexp-Bu45OrlU.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name2(_, "_");
    __name2(F, "F");
    __name2(H, "H");
    __name2(I, "I");
    __name2(s, "s");
    __name2(D, "D");
    __name2($, "$");
    __name2(W, "W");
    __name2(L, "L");
    __name2(U, "U");
    __name2(P, "P");
    __name2(match2, "match");
  }
});
var init_pathToRegexp = __esm({
  "node_modules/@clerk/shared/dist/runtime/pathToRegexp.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_pathToRegexp_Bu45OrlU();
  }
});
var init_authorization_errors_CS1pNy8i = __esm({
  "node_modules/@clerk/shared/dist/runtime/authorization-errors-CS1pNy8i.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});
var init_authorization_errors = __esm({
  "node_modules/@clerk/shared/dist/runtime/authorization-errors.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_authorization_errors_CS1pNy8i();
  }
});
function mergePreDefinedOptions(preDefinedOptions, options) {
  return Object.keys(preDefinedOptions).reduce(
    (obj, key) => {
      return { ...obj, [key]: options[key] || obj[key] };
    },
    { ...preDefinedOptions }
  );
}
__name(mergePreDefinedOptions, "mergePreDefinedOptions");
function assertValidSecretKey(val) {
  if (!val || typeof val !== "string") {
    throw Error("Missing Clerk Secret Key. Go to https://dashboard.clerk.com and get your key for your instance.");
  }
}
__name(assertValidSecretKey, "assertValidSecretKey");
function assertValidPublishableKey(val) {
  parsePublishableKey(val, { fatal: true });
}
__name(assertValidPublishableKey, "assertValidPublishableKey");
function joinPaths(...args) {
  return args.filter((p) => p).join(SEPARATOR).replace(MULTIPLE_SEPARATOR_REGEX, SEPARATOR);
}
__name(joinPaths, "joinPaths");
function getFromCache(kid) {
  return cache[kid];
}
__name(getFromCache, "getFromCache");
function getCacheValues() {
  return Object.values(cache);
}
__name(getCacheValues, "getCacheValues");
function setInCache(cacheKey, jwk, shouldExpire = true) {
  cache[cacheKey] = jwk;
  lastUpdatedAt = shouldExpire ? Date.now() : -1;
}
__name(setInCache, "setInCache");
function loadClerkJwkFromPem(params) {
  const { kid, pem } = params;
  const prefixedKid = `local-${kid}`;
  const cachedJwk = getFromCache(prefixedKid);
  if (cachedJwk) {
    return cachedJwk;
  }
  if (!pem) {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.SetClerkJWTKey,
      message: "Missing local JWK.",
      reason: TokenVerificationErrorReason.LocalJWKMissing
    });
  }
  const modulus = pem.replace(/\r\n|\n|\r/g, "").replace(PEM_HEADER, "").replace(PEM_TRAILER, "").replace(RSA_PREFIX, "").replace(RSA_SUFFIX, "").replace(/\+/g, "-").replace(/\//g, "_");
  const jwk = { kid: prefixedKid, kty: "RSA", alg: "RS256", n: modulus, e: "AQAB" };
  setInCache(prefixedKid, jwk, false);
  return jwk;
}
__name(loadClerkJwkFromPem, "loadClerkJwkFromPem");
async function loadClerkJWKFromRemote(params) {
  const { secretKey, apiUrl = API_URL, apiVersion = API_VERSION, kid, skipJwksCache } = params;
  if (skipJwksCache || cacheHasExpired() || !getFromCache(kid)) {
    if (!secretKey) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: "Failed to load JWKS from Clerk Backend or Frontend API.",
        reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
      });
    }
    const fetcher = /* @__PURE__ */ __name2(() => fetchJWKSFromBAPI(apiUrl, secretKey, apiVersion), "fetcher");
    const { keys } = await retry(fetcher);
    if (!keys || !keys.length) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: "The JWKS endpoint did not contain any signing keys. Contact support@clerk.com.",
        reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
      });
    }
    keys.forEach((key) => setInCache(key.kid, key));
  }
  const jwk = getFromCache(kid);
  if (!jwk) {
    const cacheValues = getCacheValues();
    const jwkKeys = cacheValues.map((jwk2) => jwk2.kid).sort().join(", ");
    throw new TokenVerificationError({
      action: `Go to your Dashboard and validate your secret and public keys are correct. ${TokenVerificationErrorAction.ContactSupport} if the issue persists.`,
      message: `Unable to find a signing key in JWKS that matches the kid='${kid}' of the provided session token. Please make sure that the __session cookie or the HTTP authorization header contain a Clerk-generated session JWT. The following kid is available: ${jwkKeys}`,
      reason: TokenVerificationErrorReason.JWKKidMismatch
    });
  }
  return jwk;
}
__name(loadClerkJWKFromRemote, "loadClerkJWKFromRemote");
async function fetchJWKSFromBAPI(apiUrl, key, apiVersion) {
  if (!key) {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.SetClerkSecretKey,
      message: "Missing Clerk Secret Key or API Key. Go to https://dashboard.clerk.com and get your key for your instance.",
      reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
    });
  }
  const url = new URL(apiUrl);
  url.pathname = joinPaths(url.pathname, apiVersion, "/jwks");
  const response = await runtime.fetch(url.href, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Clerk-API-Version": SUPPORTED_BAPI_VERSION,
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT
    }
  });
  if (!response.ok) {
    const json = await response.json();
    const invalidSecretKeyError = getErrorObjectByCode(json?.errors, TokenVerificationErrorCode.InvalidSecretKey);
    if (invalidSecretKeyError) {
      const reason = TokenVerificationErrorReason.InvalidSecretKey;
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: invalidSecretKeyError.message,
        reason
      });
    }
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.ContactSupport,
      message: `Error loading Clerk JWKS from ${url.href} with code=${response.status}`,
      reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
    });
  }
  return response.json();
}
__name(fetchJWKSFromBAPI, "fetchJWKSFromBAPI");
function cacheHasExpired() {
  if (lastUpdatedAt === -1) {
    return false;
  }
  const isExpired = Date.now() - lastUpdatedAt >= MAX_CACHE_LAST_UPDATED_AT_SECONDS * 1e3;
  if (isExpired) {
    cache = {};
  }
  return isExpired;
}
__name(cacheHasExpired, "cacheHasExpired");
function isJwtFormat(token) {
  return JwtFormatRegExp.test(token);
}
__name(isJwtFormat, "isJwtFormat");
function isOAuthJwt(token) {
  if (!isJwtFormat(token)) {
    return false;
  }
  try {
    const { data, errors } = decodeJwt(token);
    return !errors && !!data && OAUTH_ACCESS_TOKEN_TYPES.includes(data.header.typ);
  } catch {
    return false;
  }
}
__name(isOAuthJwt, "isOAuthJwt");
function isM2MJwt(token) {
  if (!isJwtFormat(token)) {
    return false;
  }
  try {
    const { data, errors } = decodeJwt(token);
    return !errors && !!data && typeof data.payload.sub === "string" && data.payload.sub.startsWith(M2M_SUBJECT_PREFIX);
  } catch {
    return false;
  }
}
__name(isM2MJwt, "isM2MJwt");
function isMachineJwt(token) {
  return isOAuthJwt(token) || isM2MJwt(token);
}
__name(isMachineJwt, "isMachineJwt");
function isMachineTokenByPrefix(token) {
  return MACHINE_TOKEN_PREFIXES.some((prefix) => token.startsWith(prefix));
}
__name(isMachineTokenByPrefix, "isMachineTokenByPrefix");
function isMachineToken(token) {
  return isMachineTokenByPrefix(token) || isOAuthJwt(token) || isM2MJwt(token);
}
__name(isMachineToken, "isMachineToken");
function getMachineTokenType(token) {
  if (token.startsWith(M2M_TOKEN_PREFIX) || isM2MJwt(token)) {
    return TokenType.M2MToken;
  }
  if (token.startsWith(OAUTH_TOKEN_PREFIX) || isOAuthJwt(token)) {
    return TokenType.OAuthToken;
  }
  if (token.startsWith(API_KEY_PREFIX)) {
    return TokenType.ApiKey;
  }
  throw new Error("Unknown machine token type");
}
__name(getMachineTokenType, "getMachineTokenType");
function isMachineTokenType(type) {
  return MACHINE_TOKEN_TYPES.has(type);
}
__name(isMachineTokenType, "isMachineTokenType");
async function resolveKeyAndVerifyJwt(token, kid, options, headerType) {
  try {
    let key;
    if (options.jwtKey) {
      key = loadClerkJwkFromPem({ kid, pem: options.jwtKey });
    } else if (options.secretKey) {
      key = await loadClerkJWKFromRemote({ ...options, kid });
    } else {
      return {
        error: new MachineTokenVerificationError({
          action: TokenVerificationErrorAction.SetClerkJWTKey,
          message: "Failed to resolve JWK during verification.",
          code: MachineTokenVerificationErrorCode.TokenVerificationFailed
        })
      };
    }
    const { data: payload, errors: verifyErrors } = await verifyJwt(token, {
      ...options,
      key,
      ...headerType ? { headerType } : {}
    });
    if (verifyErrors) {
      return {
        error: new MachineTokenVerificationError({
          code: MachineTokenVerificationErrorCode.TokenVerificationFailed,
          message: verifyErrors[0].message
        })
      };
    }
    return { payload };
  } catch (error32) {
    return {
      error: new MachineTokenVerificationError({
        code: MachineTokenVerificationErrorCode.TokenVerificationFailed,
        message: error32.message
      })
    };
  }
}
__name(resolveKeyAndVerifyJwt, "resolveKeyAndVerifyJwt");
async function verifyM2MJwt(token, decoded, options) {
  const result = await resolveKeyAndVerifyJwt(token, decoded.header.kid, options);
  if ("error" in result) {
    return { data: void 0, tokenType: TokenType.M2MToken, errors: [result.error] };
  }
  return {
    data: M2MToken.fromJwtPayload(result.payload, options.clockSkewInMs),
    tokenType: TokenType.M2MToken,
    errors: void 0
  };
}
__name(verifyM2MJwt, "verifyM2MJwt");
async function verifyOAuthJwt(token, decoded, options) {
  const result = await resolveKeyAndVerifyJwt(token, decoded.header.kid, options, OAUTH_ACCESS_TOKEN_TYPES);
  if ("error" in result) {
    return { data: void 0, tokenType: TokenType.OAuthToken, errors: [result.error] };
  }
  return {
    data: IdPOAuthAccessToken.fromJwtPayload(result.payload, options.clockSkewInMs),
    tokenType: TokenType.OAuthToken,
    errors: void 0
  };
}
__name(verifyOAuthJwt, "verifyOAuthJwt");
function mapObject(object, mapper, options) {
  if (!isObject(object)) {
    throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
  }
  if (Array.isArray(object)) {
    throw new TypeError("Expected an object, got an array");
  }
  return _mapObject(object, mapper, options);
}
__name(mapObject, "mapObject");
function split(value) {
  let result = value.trim();
  result = result.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
  result = result.replace(DEFAULT_STRIP_REGEXP, "\0");
  let start = 0;
  let end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  if (start === end)
    return [];
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split(/\0/g);
}
__name(split, "split");
function splitSeparateNumbers(value) {
  const words = split(value);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const match22 = SPLIT_SEPARATE_NUMBER_RE.exec(word);
    if (match22) {
      const offset = match22.index + (match22[1] ?? match22[2]).length;
      words.splice(i, 1, word.slice(0, offset), word.slice(offset));
    }
  }
  return words;
}
__name(splitSeparateNumbers, "splitSeparateNumbers");
function noCase(input, options) {
  const [prefix, words, suffix] = splitPrefixSuffix(input, options);
  return prefix + words.map(lowerFactory(options?.locale)).join(options?.delimiter ?? " ") + suffix;
}
__name(noCase, "noCase");
function snakeCase(input, options) {
  return noCase(input, { delimiter: "_", ...options });
}
__name(snakeCase, "snakeCase");
function lowerFactory(locale) {
  return locale === false ? (input) => input.toLowerCase() : (input) => input.toLocaleLowerCase(locale);
}
__name(lowerFactory, "lowerFactory");
function splitPrefixSuffix(input, options = {}) {
  const splitFn = options.split ?? (options.separateNumbers ? splitSeparateNumbers : split);
  const prefixCharacters = options.prefixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
  const suffixCharacters = options.suffixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
  let prefixIndex = 0;
  let suffixIndex = input.length;
  while (prefixIndex < input.length) {
    const char = input.charAt(prefixIndex);
    if (!prefixCharacters.includes(char))
      break;
    prefixIndex++;
  }
  while (suffixIndex > prefixIndex) {
    const index = suffixIndex - 1;
    const char = input.charAt(index);
    if (!suffixCharacters.includes(char))
      break;
    suffixIndex = index;
  }
  return [
    input.slice(0, prefixIndex),
    splitFn(input.slice(prefixIndex, suffixIndex)),
    input.slice(suffixIndex)
  ];
}
__name(splitPrefixSuffix, "splitPrefixSuffix");
function snakecaseKeys(obj, options) {
  if (Array.isArray(obj)) {
    if (obj.some((item) => item.constructor !== PlainObjectConstructor)) {
      throw new Error("obj must be array of plain objects");
    }
    options = { deep: true, exclude: [], parsingOptions: {}, ...options };
    const convertCase2 = options.snakeCase || ((key) => snakeCase(key, options.parsingOptions));
    return obj.map((item) => {
      return mapObject(item, (key, val) => {
        return [
          matches(options.exclude, key) ? key : convertCase2(key),
          val,
          mapperOptions(key, val, options)
        ];
      }, options);
    });
  } else {
    if (obj.constructor !== PlainObjectConstructor) {
      throw new Error("obj must be an plain object");
    }
  }
  options = { deep: true, exclude: [], parsingOptions: {}, ...options };
  const convertCase = options.snakeCase || ((key) => snakeCase(key, options.parsingOptions));
  return mapObject(obj, (key, val) => {
    return [
      matches(options.exclude, key) ? key : convertCase(key),
      val,
      mapperOptions(key, val, options)
    ];
  }, options);
}
__name(snakecaseKeys, "snakecaseKeys");
function matches(patterns, value) {
  return patterns.some((pattern) => {
    return typeof pattern === "string" ? pattern === value : pattern.test(value);
  });
}
__name(matches, "matches");
function mapperOptions(key, val, options) {
  return options.shouldRecurse ? { shouldRecurse: options.shouldRecurse(key, val) } : void 0;
}
__name(mapperOptions, "mapperOptions");
function deserialize(payload) {
  let data, totalCount;
  if (Array.isArray(payload)) {
    const data2 = payload.map((item) => jsonToObject(item));
    return { data: data2 };
  } else if (isM2MTokenResponse(payload)) {
    data = payload.m2m_tokens.map((item) => jsonToObject(item));
    totalCount = payload.total_count;
    return { data, totalCount };
  } else if (isPaginated(payload)) {
    data = payload.data.map((item) => jsonToObject(item));
    totalCount = payload.total_count;
    return { data, totalCount };
  } else {
    return { data: jsonToObject(payload) };
  }
}
__name(deserialize, "deserialize");
function isPaginated(payload) {
  if (!payload || typeof payload !== "object" || !("data" in payload)) {
    return false;
  }
  return Array.isArray(payload.data) && payload.data !== void 0;
}
__name(isPaginated, "isPaginated");
function isM2MTokenResponse(payload) {
  if (!payload || typeof payload !== "object" || !("m2m_tokens" in payload)) {
    return false;
  }
  return Array.isArray(payload.m2m_tokens);
}
__name(isM2MTokenResponse, "isM2MTokenResponse");
function getCount(item) {
  return item.total_count;
}
__name(getCount, "getCount");
function jsonToObject(item) {
  if (typeof item !== "string" && "object" in item && "deleted" in item) {
    return DeletedObject.fromJSON(item);
  }
  switch (item.object) {
    case ObjectType.AccountlessApplication:
      return AccountlessApplication.fromJSON(item);
    case ObjectType.ActorToken:
      return ActorToken.fromJSON(item);
    case ObjectType.AllowlistIdentifier:
      return AllowlistIdentifier.fromJSON(item);
    case ObjectType.ApiKey:
      return APIKey.fromJSON(item);
    case ObjectType.BlocklistIdentifier:
      return BlocklistIdentifier.fromJSON(item);
    case ObjectType.Client:
      return Client.fromJSON(item);
    case ObjectType.Cookies:
      return Cookies2.fromJSON(item);
    case ObjectType.Domain:
      return Domain.fromJSON(item);
    case ObjectType.EmailAddress:
      return EmailAddress.fromJSON(item);
    case ObjectType.Email:
      return Email.fromJSON(item);
    case ObjectType.IdpOAuthAccessToken:
      return IdPOAuthAccessToken.fromJSON(item);
    case ObjectType.Instance:
      return Instance.fromJSON(item);
    case ObjectType.InstanceRestrictions:
      return InstanceRestrictions.fromJSON(item);
    case ObjectType.InstanceSettings:
      return InstanceSettings.fromJSON(item);
    case ObjectType.Invitation:
      return Invitation.fromJSON(item);
    case ObjectType.JwtTemplate:
      return JwtTemplate.fromJSON(item);
    case ObjectType.Machine:
      return Machine.fromJSON(item);
    case ObjectType.MachineScope:
      return MachineScope.fromJSON(item);
    case ObjectType.MachineSecretKey:
      return MachineSecretKey.fromJSON(item);
    case ObjectType.M2MToken:
      return M2MToken.fromJSON(item);
    case ObjectType.OauthAccessToken:
      return OauthAccessToken.fromJSON(item);
    case ObjectType.OAuthApplication:
      return OAuthApplication.fromJSON(item);
    case ObjectType.Organization:
      return Organization.fromJSON(item);
    case ObjectType.OrganizationInvitation:
      return OrganizationInvitation.fromJSON(item);
    case ObjectType.OrganizationMembership:
      return OrganizationMembership.fromJSON(item);
    case ObjectType.OrganizationSettings:
      return OrganizationSettings.fromJSON(item);
    case ObjectType.PhoneNumber:
      return PhoneNumber.fromJSON(item);
    case ObjectType.ProxyCheck:
      return ProxyCheck.fromJSON(item);
    case ObjectType.RedirectUrl:
      return RedirectUrl.fromJSON(item);
    case ObjectType.SamlConnection:
      return SamlConnection.fromJSON(item);
    case ObjectType.SignInToken:
      return SignInToken.fromJSON(item);
    case ObjectType.AgentTask:
      return AgentTask.fromJSON(item);
    case ObjectType.SignUpAttempt:
      return SignUpAttempt.fromJSON(item);
    case ObjectType.Session:
      return Session.fromJSON(item);
    case ObjectType.SmsMessage:
      return SMSMessage.fromJSON(item);
    case ObjectType.Token:
      return Token.fromJSON(item);
    case ObjectType.TotalCount:
      return getCount(item);
    case ObjectType.User:
      return User.fromJSON(item);
    case ObjectType.WaitlistEntry:
      return WaitlistEntry.fromJSON(item);
    case ObjectType.BillingPlan:
      return BillingPlan.fromJSON(item);
    case ObjectType.BillingSubscription:
      return BillingSubscription.fromJSON(item);
    case ObjectType.BillingSubscriptionItem:
      return BillingSubscriptionItem.fromJSON(item);
    case ObjectType.Feature:
      return Feature.fromJSON(item);
    default:
      return item;
  }
}
__name(jsonToObject, "jsonToObject");
function buildRequest(options) {
  const requestFn = /* @__PURE__ */ __name2(async (requestOptions) => {
    const {
      secretKey,
      machineSecretKey,
      useMachineSecretKey = false,
      requireSecretKey = true,
      apiUrl = API_URL,
      apiVersion = API_VERSION,
      userAgent = USER_AGENT,
      skipApiVersionInUrl = false
    } = options;
    const { path, method, queryParams, headerParams, bodyParams, formData, options: opts } = requestOptions;
    const { deepSnakecaseBodyParamKeys = false } = opts || {};
    if (requireSecretKey) {
      assertValidSecretKey(secretKey);
    }
    const url = skipApiVersionInUrl ? joinPaths(apiUrl, path) : joinPaths(apiUrl, apiVersion, path);
    const finalUrl = new URL(url);
    if (queryParams) {
      const snakecasedQueryParams = snakecase_keys_default({ ...queryParams });
      for (const [key, val] of Object.entries(snakecasedQueryParams)) {
        if (val) {
          [val].flat().forEach((v) => finalUrl.searchParams.append(key, v));
        }
      }
    }
    const headers = new Headers({
      "Clerk-API-Version": SUPPORTED_BAPI_VERSION,
      [constants.Headers.UserAgent]: userAgent,
      ...headerParams
    });
    const authorizationHeader = constants.Headers.Authorization;
    if (!headers.has(authorizationHeader)) {
      if (useMachineSecretKey && machineSecretKey) {
        headers.set(authorizationHeader, `Bearer ${machineSecretKey}`);
      } else if (secretKey) {
        headers.set(authorizationHeader, `Bearer ${secretKey}`);
      }
    }
    let res;
    try {
      if (formData) {
        res = await runtime.fetch(finalUrl.href, {
          method,
          headers,
          body: formData
        });
      } else {
        headers.set("Content-Type", "application/json");
        const buildBody = /* @__PURE__ */ __name2(() => {
          const hasBody = method !== "GET" && bodyParams && Object.keys(bodyParams).length > 0;
          if (!hasBody) {
            return null;
          }
          const formatKeys = /* @__PURE__ */ __name2((object) => snakecase_keys_default(object, { deep: deepSnakecaseBodyParamKeys }), "formatKeys");
          return {
            body: JSON.stringify(Array.isArray(bodyParams) ? bodyParams.map(formatKeys) : formatKeys(bodyParams))
          };
        }, "buildBody");
        res = await runtime.fetch(finalUrl.href, {
          method,
          headers,
          ...buildBody()
        });
      }
      const isJSONResponse = res?.headers && res.headers?.get(constants.Headers.ContentType) === constants.ContentTypes.Json;
      const responseBody = await (isJSONResponse ? res.json() : res.text());
      if (!res.ok) {
        return {
          data: null,
          errors: parseErrors2(responseBody),
          status: res?.status,
          statusText: res?.statusText,
          clerkTraceId: getTraceId(responseBody, res?.headers),
          retryAfter: getRetryAfter(res?.headers)
        };
      }
      return {
        ...deserialize(responseBody),
        errors: null
      };
    } catch (err) {
      if (err instanceof Error) {
        return {
          data: null,
          errors: [
            {
              code: "unexpected_error",
              message: err.message || "Unexpected error"
            }
          ],
          clerkTraceId: getTraceId(err, res?.headers)
        };
      }
      return {
        data: null,
        errors: parseErrors2(err),
        status: res?.status,
        statusText: res?.statusText,
        clerkTraceId: getTraceId(err, res?.headers),
        retryAfter: getRetryAfter(res?.headers)
      };
    }
  }, "requestFn");
  return withLegacyRequestReturn(requestFn);
}
__name(buildRequest, "buildRequest");
function getTraceId(data, headers) {
  if (data && typeof data === "object" && "clerk_trace_id" in data && typeof data.clerk_trace_id === "string") {
    return data.clerk_trace_id;
  }
  const cfRay = headers?.get("cf-ray");
  return cfRay || "";
}
__name(getTraceId, "getTraceId");
function getRetryAfter(headers) {
  const retryAfter = headers?.get("Retry-After");
  if (!retryAfter) {
    return;
  }
  const value = parseInt(retryAfter, 10);
  if (isNaN(value)) {
    return;
  }
  return value;
}
__name(getRetryAfter, "getRetryAfter");
function parseErrors2(data) {
  if (!!data && typeof data === "object" && "errors" in data) {
    const errors = data.errors;
    return errors.length > 0 ? errors.map(parseError) : [];
  }
  return [];
}
__name(parseErrors2, "parseErrors2");
function withLegacyRequestReturn(cb) {
  return async (...args) => {
    const { data, errors, totalCount, status, statusText, clerkTraceId, retryAfter } = await cb(...args);
    if (errors) {
      const error32 = new ClerkAPIResponseError(statusText || "", {
        data: [],
        status,
        clerkTraceId,
        retryAfter
      });
      error32.errors = errors;
      throw error32;
    }
    if (typeof totalCount !== "undefined") {
      return { data, totalCount };
    }
    return data;
  };
}
__name(withLegacyRequestReturn, "withLegacyRequestReturn");
function createBackendApiClient(options) {
  const request = buildRequest(options);
  return {
    __experimental_accountlessApplications: new AccountlessApplicationAPI(
      buildRequest({ ...options, requireSecretKey: false })
    ),
    actorTokens: new ActorTokenAPI(request),
    /**
     * @experimental This is an experimental API for the Agent Tasks feature that is available under a private beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
     */
    agentTasks: new AgentTaskAPI(request),
    allowlistIdentifiers: new AllowlistIdentifierAPI(request),
    apiKeys: new APIKeysAPI(
      buildRequest({
        ...options,
        skipApiVersionInUrl: true
      })
    ),
    betaFeatures: new BetaFeaturesAPI(request),
    blocklistIdentifiers: new BlocklistIdentifierAPI(request),
    /**
     * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
     */
    billing: new BillingAPI(request),
    clients: new ClientAPI(request),
    domains: new DomainAPI(request),
    emailAddresses: new EmailAddressAPI(request),
    idPOAuthAccessToken: new IdPOAuthAccessTokenApi(
      buildRequest({
        ...options,
        skipApiVersionInUrl: true
      })
    ),
    instance: new InstanceAPI(request),
    invitations: new InvitationAPI(request),
    jwks: new JwksAPI(request),
    jwtTemplates: new JwtTemplatesApi(request),
    machines: new MachineApi(request),
    m2m: new M2MTokenApi(
      buildRequest({
        ...options,
        skipApiVersionInUrl: true,
        requireSecretKey: false,
        useMachineSecretKey: true
      }),
      {
        secretKey: options.secretKey,
        apiUrl: options.apiUrl,
        jwtKey: options.jwtKey
      }
    ),
    oauthApplications: new OAuthApplicationsApi(request),
    organizations: new OrganizationAPI(request),
    phoneNumbers: new PhoneNumberAPI(request),
    proxyChecks: new ProxyCheckAPI(request),
    redirectUrls: new RedirectUrlAPI(request),
    samlConnections: new SamlConnectionAPI(request),
    sessions: new SessionAPI(request),
    signInTokens: new SignInTokenAPI(request),
    signUps: new SignUpAPI(request),
    testingTokens: new TestingTokenAPI(request),
    users: new UserAPI(request),
    waitlistEntries: new WaitlistEntryAPI(request),
    webhooks: new WebhookAPI(request)
  };
}
__name(createBackendApiClient, "createBackendApiClient");
function signedInAuthObject(authenticateContext, sessionToken, sessionClaims) {
  const { actor, sessionId, sessionStatus, userId, orgId, orgRole, orgSlug, orgPermissions, factorVerificationAge } = __experimental_JWTPayloadToAuthObjectProperties(sessionClaims);
  const apiClient = createBackendApiClient(authenticateContext);
  const getToken = createGetToken({
    sessionId,
    sessionToken,
    fetcher: /* @__PURE__ */ __name2(async (sessionId2, template, expiresInSeconds) => (await apiClient.sessions.getToken(sessionId2, template || "", expiresInSeconds)).jwt, "fetcher")
  });
  return {
    tokenType: TokenType.SessionToken,
    actor,
    sessionClaims,
    sessionId,
    sessionStatus,
    userId,
    orgId,
    orgRole,
    orgSlug,
    orgPermissions,
    factorVerificationAge,
    getToken,
    has: createCheckAuthorization({
      orgId,
      orgRole,
      orgPermissions,
      userId,
      factorVerificationAge,
      features: sessionClaims.fea || "",
      plans: sessionClaims.pla || ""
    }),
    debug: createDebug({ ...authenticateContext, sessionToken }),
    isAuthenticated: true
  };
}
__name(signedInAuthObject, "signedInAuthObject");
function signedOutAuthObject(debugData, initialSessionStatus) {
  return {
    tokenType: TokenType.SessionToken,
    sessionClaims: null,
    sessionId: null,
    sessionStatus: initialSessionStatus ?? null,
    userId: null,
    actor: null,
    orgId: null,
    orgRole: null,
    orgSlug: null,
    orgPermissions: null,
    factorVerificationAge: null,
    getToken: /* @__PURE__ */ __name2(() => Promise.resolve(null), "getToken"),
    has: /* @__PURE__ */ __name2(() => false, "has"),
    debug: createDebug(debugData),
    isAuthenticated: false
  };
}
__name(signedOutAuthObject, "signedOutAuthObject");
function authenticatedMachineObject(tokenType, token, verificationResult, debugData) {
  const baseObject = {
    id: verificationResult.id,
    subject: verificationResult.subject,
    getToken: /* @__PURE__ */ __name2(() => Promise.resolve(token), "getToken"),
    has: /* @__PURE__ */ __name2(() => false, "has"),
    debug: createDebug(debugData),
    isAuthenticated: true
  };
  switch (tokenType) {
    case TokenType.ApiKey: {
      const result = verificationResult;
      return {
        ...baseObject,
        tokenType,
        name: result.name,
        claims: result.claims,
        scopes: result.scopes,
        userId: result.subject.startsWith("user_") ? result.subject : null,
        orgId: result.subject.startsWith("org_") ? result.subject : null
      };
    }
    case TokenType.M2MToken: {
      const result = verificationResult;
      return {
        ...baseObject,
        tokenType,
        claims: result.claims,
        scopes: result.scopes,
        machineId: result.subject
      };
    }
    case TokenType.OAuthToken: {
      const result = verificationResult;
      return {
        ...baseObject,
        tokenType,
        scopes: result.scopes,
        userId: result.subject,
        clientId: result.clientId
      };
    }
    default:
      throw new Error(`Invalid token type: ${tokenType}`);
  }
}
__name(authenticatedMachineObject, "authenticatedMachineObject");
function unauthenticatedMachineObject(tokenType, debugData) {
  const baseObject = {
    id: null,
    subject: null,
    scopes: null,
    has: /* @__PURE__ */ __name2(() => false, "has"),
    getToken: /* @__PURE__ */ __name2(() => Promise.resolve(null), "getToken"),
    debug: createDebug(debugData),
    isAuthenticated: false
  };
  switch (tokenType) {
    case TokenType.ApiKey: {
      return {
        ...baseObject,
        tokenType,
        name: null,
        claims: null,
        scopes: null,
        userId: null,
        orgId: null
      };
    }
    case TokenType.M2MToken: {
      return {
        ...baseObject,
        tokenType,
        claims: null,
        scopes: null,
        machineId: null
      };
    }
    case TokenType.OAuthToken: {
      return {
        ...baseObject,
        tokenType,
        scopes: null,
        userId: null,
        clientId: null
      };
    }
    default:
      throw new Error(`Invalid token type: ${tokenType}`);
  }
}
__name(unauthenticatedMachineObject, "unauthenticatedMachineObject");
function invalidTokenAuthObject() {
  return {
    isAuthenticated: false,
    tokenType: null,
    getToken: /* @__PURE__ */ __name2(() => Promise.resolve(null), "getToken"),
    has: /* @__PURE__ */ __name2(() => false, "has"),
    debug: /* @__PURE__ */ __name2(() => ({}), "debug")
  };
}
__name(invalidTokenAuthObject, "invalidTokenAuthObject");
function signedIn(params) {
  const { authenticateContext, headers = new Headers(), token } = params;
  const toAuth = /* @__PURE__ */ __name2((({ treatPendingAsSignedOut = true } = {}) => {
    if (params.tokenType === TokenType.SessionToken) {
      const { sessionClaims } = params;
      const authObject = signedInAuthObject(authenticateContext, token, sessionClaims);
      if (treatPendingAsSignedOut && authObject.sessionStatus === "pending") {
        return signedOutAuthObject(void 0, authObject.sessionStatus);
      }
      return authObject;
    }
    const { machineData } = params;
    return authenticatedMachineObject(params.tokenType, token, machineData, authenticateContext);
  }), "toAuth");
  return {
    status: AuthStatus.SignedIn,
    reason: null,
    message: null,
    proxyUrl: authenticateContext.proxyUrl || "",
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: true,
    isAuthenticated: true,
    tokenType: params.tokenType,
    toAuth,
    headers,
    token
  };
}
__name(signedIn, "signedIn");
function signedOut(params) {
  const { authenticateContext, headers = new Headers(), reason, message = "", tokenType } = params;
  const toAuth = /* @__PURE__ */ __name2((() => {
    if (tokenType === TokenType.SessionToken) {
      return signedOutAuthObject({ ...authenticateContext, status: AuthStatus.SignedOut, reason, message });
    }
    return unauthenticatedMachineObject(tokenType, { reason, message, headers });
  }), "toAuth");
  return withDebugHeaders({
    status: AuthStatus.SignedOut,
    reason,
    message,
    proxyUrl: authenticateContext.proxyUrl || "",
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: false,
    isAuthenticated: false,
    tokenType,
    toAuth,
    headers,
    token: null
  });
}
__name(signedOut, "signedOut");
function handshake(authenticateContext, reason, message = "", headers) {
  return withDebugHeaders({
    status: AuthStatus.Handshake,
    reason,
    message,
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    proxyUrl: authenticateContext.proxyUrl || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: false,
    isAuthenticated: false,
    tokenType: TokenType.SessionToken,
    toAuth: /* @__PURE__ */ __name2(() => null, "toAuth"),
    headers,
    token: null
  });
}
__name(handshake, "handshake");
function signedOutInvalidToken() {
  const authObject = invalidTokenAuthObject();
  return withDebugHeaders({
    status: AuthStatus.SignedOut,
    reason: AuthErrorReason.TokenTypeMismatch,
    message: "",
    proxyUrl: "",
    publishableKey: "",
    isSatellite: false,
    domain: "",
    signInUrl: "",
    signUpUrl: "",
    afterSignInUrl: "",
    afterSignUpUrl: "",
    isSignedIn: false,
    isAuthenticated: false,
    tokenType: null,
    toAuth: /* @__PURE__ */ __name2(() => authObject, "toAuth"),
    headers: new Headers(),
    token: null
  });
}
__name(signedOutInvalidToken, "signedOutInvalidToken");
async function verifyToken(token, options) {
  const { data: decodedResult, errors } = decodeJwt(token);
  if (errors) {
    return { errors };
  }
  const { header } = decodedResult;
  const { kid } = header;
  try {
    let key;
    if (options.jwtKey) {
      key = loadClerkJwkFromPem({ kid, pem: options.jwtKey });
    } else if (options.secretKey) {
      key = await loadClerkJWKFromRemote({ ...options, kid });
    } else {
      return {
        errors: [
          new TokenVerificationError({
            action: TokenVerificationErrorAction.SetClerkJWTKey,
            message: "Failed to resolve JWK during verification.",
            reason: TokenVerificationErrorReason.JWKFailedToResolve
          })
        ]
      };
    }
    return await verifyJwt(token, { ...options, key });
  } catch (error32) {
    return { errors: [error32] };
  }
}
__name(verifyToken, "verifyToken");
function handleClerkAPIError(tokenType, err, notFoundMessage) {
  if (isClerkAPIResponseError(err)) {
    let code;
    let message;
    switch (err.status) {
      case 401:
        code = MachineTokenVerificationErrorCode.InvalidSecretKey;
        message = err.errors[0]?.message || "Invalid secret key";
        break;
      case 404:
        code = MachineTokenVerificationErrorCode.TokenInvalid;
        message = notFoundMessage;
        break;
      default:
        code = MachineTokenVerificationErrorCode.UnexpectedError;
        message = "Unexpected error";
    }
    return {
      data: void 0,
      tokenType,
      errors: [
        new MachineTokenVerificationError({
          message,
          code,
          status: err.status
        })
      ]
    };
  }
  return {
    data: void 0,
    tokenType,
    errors: [
      new MachineTokenVerificationError({
        message: "Unexpected error",
        code: MachineTokenVerificationErrorCode.UnexpectedError,
        status: err.status
      })
    ]
  };
}
__name(handleClerkAPIError, "handleClerkAPIError");
async function verifyM2MToken(token, options) {
  try {
    const client = createBackendApiClient(options);
    const verifiedToken = await client.m2m.verify({ token });
    return { data: verifiedToken, tokenType: TokenType.M2MToken, errors: void 0 };
  } catch (err) {
    return handleClerkAPIError(TokenType.M2MToken, err, "Machine token not found");
  }
}
__name(verifyM2MToken, "verifyM2MToken");
async function verifyOAuthToken(accessToken, options) {
  try {
    const client = createBackendApiClient(options);
    const verifiedToken = await client.idPOAuthAccessToken.verify(accessToken);
    return { data: verifiedToken, tokenType: TokenType.OAuthToken, errors: void 0 };
  } catch (err) {
    return handleClerkAPIError(TokenType.OAuthToken, err, "OAuth token not found");
  }
}
__name(verifyOAuthToken, "verifyOAuthToken");
async function verifyAPIKey(secret, options) {
  try {
    const client = createBackendApiClient(options);
    const verifiedToken = await client.apiKeys.verify(secret);
    return { data: verifiedToken, tokenType: TokenType.ApiKey, errors: void 0 };
  } catch (err) {
    return handleClerkAPIError(TokenType.ApiKey, err, "API key not found");
  }
}
__name(verifyAPIKey, "verifyAPIKey");
async function verifyMachineAuthToken(token, options) {
  if (isJwtFormat(token)) {
    let decodedResult;
    try {
      const { data, errors: decodeErrors } = decodeJwt(token);
      if (decodeErrors) {
        throw decodeErrors[0];
      }
      decodedResult = data;
    } catch (e) {
      return {
        data: void 0,
        tokenType: TokenType.M2MToken,
        errors: [
          new MachineTokenVerificationError({
            code: MachineTokenVerificationErrorCode.TokenInvalid,
            message: e.message
          })
        ]
      };
    }
    if (decodedResult.payload.sub.startsWith(M2M_SUBJECT_PREFIX)) {
      return verifyM2MJwt(token, decodedResult, options);
    }
    if (OAUTH_ACCESS_TOKEN_TYPES.includes(decodedResult.header.typ)) {
      return verifyOAuthJwt(token, decodedResult, options);
    }
    return {
      data: void 0,
      tokenType: TokenType.OAuthToken,
      errors: [
        new MachineTokenVerificationError({
          code: MachineTokenVerificationErrorCode.TokenVerificationFailed,
          message: `Invalid JWT type: ${decodedResult.header.typ ?? "missing"}. Expected one of: ${OAUTH_ACCESS_TOKEN_TYPES.join(", ")} for OAuth, or sub starting with 'mch_' for M2M`
        })
      ]
    };
  }
  if (token.startsWith(M2M_TOKEN_PREFIX)) {
    return verifyM2MToken(token, options);
  }
  if (token.startsWith(OAUTH_TOKEN_PREFIX)) {
    return verifyOAuthToken(token, options);
  }
  if (token.startsWith(API_KEY_PREFIX)) {
    return verifyAPIKey(token, options);
  }
  throw new Error("Unknown machine token type");
}
__name(verifyMachineAuthToken, "verifyMachineAuthToken");
async function verifyHandshakeJwt(token, { key }) {
  const { data: decoded, errors } = decodeJwt(token);
  if (errors) {
    throw errors[0];
  }
  const { header, payload } = decoded;
  const { typ, alg } = header;
  assertHeaderType(typ);
  assertHeaderAlgorithm(alg);
  const { data: signatureValid, errors: signatureErrors } = await hasValidSignature(decoded, key);
  if (signatureErrors) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Error verifying handshake token. ${signatureErrors[0]}`
    });
  }
  if (!signatureValid) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenInvalidSignature,
      message: "Handshake signature is invalid."
    });
  }
  return payload;
}
__name(verifyHandshakeJwt, "verifyHandshakeJwt");
async function verifyHandshakeToken(token, options) {
  const { secretKey, apiUrl, apiVersion, jwksCacheTtlInMs, jwtKey, skipJwksCache } = options;
  const { data, errors } = decodeJwt(token);
  if (errors) {
    throw errors[0];
  }
  const { kid } = data.header;
  let key;
  if (jwtKey) {
    key = loadClerkJwkFromPem({ kid, pem: jwtKey });
  } else if (secretKey) {
    key = await loadClerkJWKFromRemote({ secretKey, apiUrl, apiVersion, kid, jwksCacheTtlInMs, skipJwksCache });
  } else {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.SetClerkJWTKey,
      message: "Failed to resolve JWK during handshake verification.",
      reason: TokenVerificationErrorReason.JWKFailedToResolve
    });
  }
  return verifyHandshakeJwt(token, { key });
}
__name(verifyHandshakeToken, "verifyHandshakeToken");
function assertSignInUrlExists(signInUrl, key) {
  if (!signInUrl && isDevelopmentFromSecretKey(key)) {
    throw new Error(`Missing signInUrl. Pass a signInUrl for dev instances if an app is satellite`);
  }
}
__name(assertSignInUrlExists, "assertSignInUrlExists");
function assertProxyUrlOrDomain(proxyUrlOrDomain) {
  if (!proxyUrlOrDomain) {
    throw new Error(`Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl`);
  }
}
__name(assertProxyUrlOrDomain, "assertProxyUrlOrDomain");
function assertSignInUrlFormatAndOrigin(_signInUrl, origin) {
  let signInUrl;
  try {
    signInUrl = new URL(_signInUrl);
  } catch {
    throw new Error(`The signInUrl needs to have a absolute url format.`);
  }
  if (signInUrl.origin === origin) {
    throw new Error(`The signInUrl needs to be on a different origin than your satellite application.`);
  }
}
__name(assertSignInUrlFormatAndOrigin, "assertSignInUrlFormatAndOrigin");
function assertMachineSecretOrSecretKey(authenticateContext) {
  if (!authenticateContext.machineSecretKey && !authenticateContext.secretKey) {
    throw new Error(
      "Machine token authentication requires either a Machine secret key or a Clerk secret key. Ensure a Clerk secret key or Machine secret key is set."
    );
  }
}
__name(assertMachineSecretOrSecretKey, "assertMachineSecretOrSecretKey");
function isRequestEligibleForRefresh(err, authenticateContext, request) {
  return err.reason === TokenVerificationErrorReason.TokenExpired && !!authenticateContext.refreshTokenInCookie && request.method === "GET";
}
__name(isRequestEligibleForRefresh, "isRequestEligibleForRefresh");
function checkTokenTypeMismatch(parsedTokenType, acceptsToken, authenticateContext) {
  const mismatch = !isTokenTypeAccepted(parsedTokenType, acceptsToken);
  if (mismatch) {
    const tokenTypeToReturn = typeof acceptsToken === "string" ? acceptsToken : parsedTokenType;
    return signedOut({
      tokenType: tokenTypeToReturn,
      authenticateContext,
      reason: AuthErrorReason.TokenTypeMismatch
    });
  }
  return null;
}
__name(checkTokenTypeMismatch, "checkTokenTypeMismatch");
function isTokenTypeInAcceptedArray(acceptsToken, authenticateContext) {
  let parsedTokenType = null;
  const { tokenInHeader } = authenticateContext;
  if (tokenInHeader) {
    if (isMachineToken(tokenInHeader)) {
      parsedTokenType = getMachineTokenType(tokenInHeader);
    } else {
      parsedTokenType = TokenType.SessionToken;
    }
  }
  const typeToCheck = parsedTokenType ?? TokenType.SessionToken;
  return isTokenTypeAccepted(typeToCheck, acceptsToken);
}
__name(isTokenTypeInAcceptedArray, "isTokenTypeInAcceptedArray");
function createAuthenticateRequest(params) {
  const buildTimeOptions = mergePreDefinedOptions(defaultOptions2, params.options);
  const apiClient = params.apiClient;
  const authenticateRequest2 = /* @__PURE__ */ __name2((request, options = {}) => {
    const { apiUrl, apiVersion } = buildTimeOptions;
    const runTimeOptions = mergePreDefinedOptions(buildTimeOptions, options);
    return authenticateRequest(request, {
      ...options,
      ...runTimeOptions,
      // We should add all the omitted props from options here (eg apiUrl / apiVersion)
      // to avoid runtime options override them.
      apiUrl,
      apiVersion,
      apiClient
    });
  }, "authenticateRequest2");
  return {
    authenticateRequest: authenticateRequest2,
    debugRequestState
  };
}
__name(createAuthenticateRequest, "createAuthenticateRequest");
var require_dist;
var API_URL;
var API_VERSION;
var USER_AGENT;
var MAX_CACHE_LAST_UPDATED_AT_SECONDS;
var SUPPORTED_BAPI_VERSION;
var Attributes;
var Cookies;
var QueryParameters;
var Headers2;
var ContentTypes;
var constants;
var TokenType;
var AuthenticateContext;
var createAuthenticateContext;
var SEPARATOR;
var MULTIPLE_SEPARATOR_REGEX;
var AbstractAPI;
var basePath;
var ActorTokenAPI;
var basePath2;
var AgentTaskAPI;
var basePath3;
var AccountlessApplicationAPI;
var basePath4;
var AllowlistIdentifierAPI;
var basePath5;
var APIKeysAPI;
var basePath6;
var BetaFeaturesAPI;
var basePath7;
var BlocklistIdentifierAPI;
var basePath8;
var ClientAPI;
var basePath9;
var DomainAPI;
var basePath10;
var EmailAddressAPI;
var basePath11;
var IdPOAuthAccessTokenApi;
var basePath12;
var InstanceAPI;
var basePath13;
var InvitationAPI;
var basePath14;
var MachineApi;
var IdPOAuthAccessToken;
var M2MToken;
var cache;
var lastUpdatedAt;
var PEM_HEADER;
var PEM_TRAILER;
var RSA_PREFIX;
var RSA_SUFFIX;
var getErrorObjectByCode;
var M2M_TOKEN_PREFIX;
var M2M_SUBJECT_PREFIX;
var OAUTH_TOKEN_PREFIX;
var API_KEY_PREFIX;
var MACHINE_TOKEN_PREFIXES;
var JwtFormatRegExp;
var OAUTH_ACCESS_TOKEN_TYPES;
var isTokenTypeAccepted;
var MACHINE_TOKEN_TYPES;
var basePath15;
var _verifyOptions;
var _M2MTokenApi_instances;
var createRequestOptions_fn;
var verifyJwtFormat_fn;
var M2MTokenApi;
var basePath16;
var JwksAPI;
var basePath17;
var JwtTemplatesApi;
var basePath18;
var OrganizationAPI;
var basePath19;
var OAuthApplicationsApi;
var basePath20;
var PhoneNumberAPI;
var basePath21;
var ProxyCheckAPI;
var basePath22;
var RedirectUrlAPI;
var basePath23;
var SamlConnectionAPI;
var basePath24;
var SessionAPI;
var basePath25;
var SignInTokenAPI;
var basePath26;
var SignUpAPI;
var basePath27;
var TestingTokenAPI;
var basePath28;
var UserAPI;
var basePath29;
var WaitlistEntryAPI;
var basePath30;
var WebhookAPI;
var basePath31;
var organizationBasePath;
var userBasePath;
var BillingAPI;
var isObject;
var isObjectCustom;
var mapObjectSkip;
var _mapObject;
var SPLIT_LOWER_UPPER_RE;
var SPLIT_UPPER_UPPER_RE;
var SPLIT_SEPARATE_NUMBER_RE;
var DEFAULT_STRIP_REGEXP;
var SPLIT_REPLACE_VALUE;
var DEFAULT_PREFIX_SUFFIX_CHARACTERS;
var PlainObjectConstructor;
var snakecase_keys_default;
var AccountlessApplication;
var AgentTask;
var ActorToken;
var AllowlistIdentifier;
var APIKey;
var BlocklistIdentifier;
var SessionActivity;
var Session;
var Client;
var CnameTarget;
var Cookies2;
var DeletedObject;
var Domain;
var Email;
var IdentificationLink;
var Verification;
var EmailAddress;
var ExternalAccount;
var Instance;
var InstanceRestrictions;
var InstanceSettings;
var Invitation;
var ObjectType;
var Machine;
var MachineScope;
var MachineSecretKey;
var JwtTemplate;
var OauthAccessToken;
var OAuthApplication;
var Organization;
var OrganizationInvitation;
var OrganizationMembership;
var OrganizationMembershipPublicUserData;
var OrganizationSettings;
var PhoneNumber;
var ProxyCheck;
var RedirectUrl;
var SamlConnection;
var SamlAccountConnection;
var AttributeMapping;
var SamlAccount;
var SignInToken;
var SignUpAttemptVerification;
var SignUpAttemptVerifications;
var SignUpAttempt;
var SMSMessage;
var Token;
var Web3Wallet;
var User;
var WaitlistEntry;
var Feature;
var BillingPlan;
var BillingSubscriptionItem;
var BillingSubscription;
var createDebug;
var createGetToken;
var getAuthObjectForAcceptedToken;
var AuthStatus;
var AuthErrorReason;
var withDebugHeaders;
var import_cookie;
var ClerkUrl;
var createClerkUrl;
var ClerkRequest;
var createClerkRequest;
var getCookieName;
var getCookieValue;
var HandshakeService;
var OrganizationMatcher;
var RefreshTokenErrorReason;
var authenticateRequest;
var debugRequestState;
var convertTokenVerificationErrorReasonToAuthErrorReason;
var defaultOptions2;
var init_chunk_UOT6YP2O = __esm({
  "node_modules/@clerk/backend/dist/chunk-UOT6YP2O.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_chunk_YBVFDYDR();
    init_chunk_KDNHJOF3();
    init_chunk_I4B6KCGC();
    init_chunk_TOROEX6P();
    init_buildAccountsBaseUrl();
    init_buildAccountsBaseUrl();
    init_url();
    init_authorization();
    init_jwtPayloadParser();
    init_error();
    init_error();
    init_pathToRegexp();
    init_authorization_errors();
    require_dist = __commonJS({
      "../../node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.parse = parse2;
        exports.serialize = serialize3;
        var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
        var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
        var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
        var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
        var __toString = Object.prototype.toString;
        var NullObject = /* @__PURE__ */ (() => {
          const C = /* @__PURE__ */ __name2(function() {
          }, "C");
          C.prototype = /* @__PURE__ */ Object.create(null);
          return C;
        })();
        function parse2(str, options) {
          const obj = new NullObject();
          const len = str.length;
          if (len < 2)
            return obj;
          const dec = options?.decode || decode;
          let index = 0;
          do {
            const eqIdx = str.indexOf("=", index);
            if (eqIdx === -1)
              break;
            const colonIdx = str.indexOf(";", index);
            const endIdx = colonIdx === -1 ? len : colonIdx;
            if (eqIdx > endIdx) {
              index = str.lastIndexOf(";", eqIdx - 1) + 1;
              continue;
            }
            const keyStartIdx = startIndex(str, index, eqIdx);
            const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
            const key = str.slice(keyStartIdx, keyEndIdx);
            if (obj[key] === void 0) {
              let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
              let valEndIdx = endIndex(str, endIdx, valStartIdx);
              const value = dec(str.slice(valStartIdx, valEndIdx));
              obj[key] = value;
            }
            index = endIdx + 1;
          } while (index < len);
          return obj;
        }
        __name(parse2, "parse2");
        __name2(parse2, "parse2");
        function startIndex(str, index, max) {
          do {
            const code = str.charCodeAt(index);
            if (code !== 32 && code !== 9)
              return index;
          } while (++index < max);
          return max;
        }
        __name(startIndex, "startIndex");
        __name2(startIndex, "startIndex");
        function endIndex(str, index, min) {
          while (index > min) {
            const code = str.charCodeAt(--index);
            if (code !== 32 && code !== 9)
              return index + 1;
          }
          return min;
        }
        __name(endIndex, "endIndex");
        __name2(endIndex, "endIndex");
        function serialize3(name, val, options) {
          const enc = options?.encode || encodeURIComponent;
          if (!cookieNameRegExp.test(name)) {
            throw new TypeError(`argument name is invalid: ${name}`);
          }
          const value = enc(val);
          if (!cookieValueRegExp.test(value)) {
            throw new TypeError(`argument val is invalid: ${val}`);
          }
          let str = name + "=" + value;
          if (!options)
            return str;
          if (options.maxAge !== void 0) {
            if (!Number.isInteger(options.maxAge)) {
              throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
            }
            str += "; Max-Age=" + options.maxAge;
          }
          if (options.domain) {
            if (!domainValueRegExp.test(options.domain)) {
              throw new TypeError(`option domain is invalid: ${options.domain}`);
            }
            str += "; Domain=" + options.domain;
          }
          if (options.path) {
            if (!pathValueRegExp.test(options.path)) {
              throw new TypeError(`option path is invalid: ${options.path}`);
            }
            str += "; Path=" + options.path;
          }
          if (options.expires) {
            if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
              throw new TypeError(`option expires is invalid: ${options.expires}`);
            }
            str += "; Expires=" + options.expires.toUTCString();
          }
          if (options.httpOnly) {
            str += "; HttpOnly";
          }
          if (options.secure) {
            str += "; Secure";
          }
          if (options.partitioned) {
            str += "; Partitioned";
          }
          if (options.priority) {
            const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
            switch (priority) {
              case "low":
                str += "; Priority=Low";
                break;
              case "medium":
                str += "; Priority=Medium";
                break;
              case "high":
                str += "; Priority=High";
                break;
              default:
                throw new TypeError(`option priority is invalid: ${options.priority}`);
            }
          }
          if (options.sameSite) {
            const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
            switch (sameSite) {
              case true:
              case "strict":
                str += "; SameSite=Strict";
                break;
              case "lax":
                str += "; SameSite=Lax";
                break;
              case "none":
                str += "; SameSite=None";
                break;
              default:
                throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
            }
          }
          return str;
        }
        __name(serialize3, "serialize3");
        __name2(serialize3, "serialize");
        function decode(str) {
          if (str.indexOf("%") === -1)
            return str;
          try {
            return decodeURIComponent(str);
          } catch (e) {
            return str;
          }
        }
        __name(decode, "decode");
        __name2(decode, "decode");
        function isDate(val) {
          return __toString.call(val) === "[object Date]";
        }
        __name(isDate, "isDate");
        __name2(isDate, "isDate");
      }
    });
    API_URL = "https://api.clerk.com";
    API_VERSION = "v1";
    USER_AGENT = `${"@clerk/backend"}@${"2.33.5"}`;
    MAX_CACHE_LAST_UPDATED_AT_SECONDS = 5 * 60;
    SUPPORTED_BAPI_VERSION = "2025-11-10";
    Attributes = {
      AuthToken: "__clerkAuthToken",
      AuthSignature: "__clerkAuthSignature",
      AuthStatus: "__clerkAuthStatus",
      AuthReason: "__clerkAuthReason",
      AuthMessage: "__clerkAuthMessage",
      ClerkUrl: "__clerkUrl"
    };
    Cookies = {
      Session: "__session",
      Refresh: "__refresh",
      ClientUat: "__client_uat",
      Handshake: "__clerk_handshake",
      DevBrowser: "__clerk_db_jwt",
      RedirectCount: "__clerk_redirect_count",
      HandshakeNonce: "__clerk_handshake_nonce"
    };
    QueryParameters = {
      ClerkSynced: "__clerk_synced",
      SuffixedCookies: "suffixed_cookies",
      ClerkRedirectUrl: "__clerk_redirect_url",
      // use the reference to Cookies to indicate that it's the same value
      DevBrowser: Cookies.DevBrowser,
      Handshake: Cookies.Handshake,
      HandshakeHelp: "__clerk_help",
      LegacyDevBrowser: "__dev_session",
      HandshakeReason: "__clerk_hs_reason",
      HandshakeNonce: Cookies.HandshakeNonce,
      HandshakeFormat: "format",
      Session: "__session"
    };
    Headers2 = {
      Accept: "accept",
      AuthMessage: "x-clerk-auth-message",
      Authorization: "authorization",
      AuthReason: "x-clerk-auth-reason",
      AuthSignature: "x-clerk-auth-signature",
      AuthStatus: "x-clerk-auth-status",
      AuthToken: "x-clerk-auth-token",
      CacheControl: "cache-control",
      ClerkRedirectTo: "x-clerk-redirect-to",
      ClerkRequestData: "x-clerk-request-data",
      ClerkUrl: "x-clerk-clerk-url",
      CloudFrontForwardedProto: "cloudfront-forwarded-proto",
      ContentType: "content-type",
      ContentSecurityPolicy: "content-security-policy",
      ContentSecurityPolicyReportOnly: "content-security-policy-report-only",
      EnableDebug: "x-clerk-debug",
      ForwardedHost: "x-forwarded-host",
      ForwardedPort: "x-forwarded-port",
      ForwardedProto: "x-forwarded-proto",
      Host: "host",
      Location: "location",
      Nonce: "x-nonce",
      Origin: "origin",
      Referrer: "referer",
      SecFetchDest: "sec-fetch-dest",
      SecFetchSite: "sec-fetch-site",
      UserAgent: "user-agent",
      ReportingEndpoints: "reporting-endpoints"
    };
    ContentTypes = {
      Json: "application/json"
    };
    constants = {
      Attributes,
      Cookies,
      Headers: Headers2,
      ContentTypes,
      QueryParameters
    };
    __name2(mergePreDefinedOptions, "mergePreDefinedOptions");
    __name2(assertValidSecretKey, "assertValidSecretKey");
    __name2(assertValidPublishableKey, "assertValidPublishableKey");
    TokenType = {
      SessionToken: "session_token",
      ApiKey: "api_key",
      M2MToken: "m2m_token",
      OAuthToken: "oauth_token"
    };
    AuthenticateContext = class {
      static {
        __name(this, "AuthenticateContext");
      }
      static {
        __name2(this, "AuthenticateContext");
      }
      constructor(cookieSuffix, clerkRequest, options) {
        this.cookieSuffix = cookieSuffix;
        this.clerkRequest = clerkRequest;
        this.originalFrontendApi = "";
        if (options.acceptsToken === TokenType.M2MToken || options.acceptsToken === TokenType.ApiKey) {
          this.initHeaderValues();
        } else {
          this.initPublishableKeyValues(options);
          this.initHeaderValues();
          this.initCookieValues();
          this.initHandshakeValues();
        }
        Object.assign(this, options);
        this.clerkUrl = this.clerkRequest.clerkUrl;
      }
      /**
       * Retrieves the session token from either the cookie or the header.
       *
       * @returns {string | undefined} The session token if available, otherwise undefined.
       */
      get sessionToken() {
        return this.sessionTokenInCookie || this.tokenInHeader;
      }
      usesSuffixedCookies() {
        const suffixedClientUat = this.getSuffixedCookie(constants.Cookies.ClientUat);
        const clientUat = this.getCookie(constants.Cookies.ClientUat);
        const suffixedSession = this.getSuffixedCookie(constants.Cookies.Session) || "";
        const session = this.getCookie(constants.Cookies.Session) || "";
        if (session && !this.tokenHasIssuer(session)) {
          return false;
        }
        if (session && !this.tokenBelongsToInstance(session)) {
          return true;
        }
        if (!suffixedClientUat && !suffixedSession) {
          return false;
        }
        const { data: sessionData } = decodeJwt(session);
        const sessionIat = sessionData?.payload.iat || 0;
        const { data: suffixedSessionData } = decodeJwt(suffixedSession);
        const suffixedSessionIat = suffixedSessionData?.payload.iat || 0;
        if (suffixedClientUat !== "0" && clientUat !== "0" && sessionIat > suffixedSessionIat) {
          return false;
        }
        if (suffixedClientUat === "0" && clientUat !== "0") {
          return false;
        }
        if (this.instanceType !== "production") {
          const isSuffixedSessionExpired = this.sessionExpired(suffixedSessionData);
          if (suffixedClientUat !== "0" && clientUat === "0" && isSuffixedSessionExpired) {
            return false;
          }
        }
        if (!suffixedClientUat && suffixedSession) {
          return false;
        }
        return true;
      }
      /**
       * Determines if the request came from a different origin based on the referrer header.
       * Used for cross-origin detection in multi-domain authentication flows.
       *
       * @returns {boolean} True if referrer exists and is from a different origin, false otherwise.
       */
      isCrossOriginReferrer() {
        if (!this.referrer || !this.clerkUrl.origin) {
          return false;
        }
        try {
          const referrerOrigin = new URL(this.referrer).origin;
          return referrerOrigin !== this.clerkUrl.origin;
        } catch {
          return false;
        }
      }
      /**
       * Determines if the referrer URL is from a Clerk domain (accounts portal or FAPI).
       * This includes both development and production account portal domains, as well as FAPI domains
       * used for redirect-based authentication flows.
       *
       * @returns {boolean} True if the referrer is from a Clerk accounts portal or FAPI domain, false otherwise
       */
      isKnownClerkReferrer() {
        if (!this.referrer) {
          return false;
        }
        try {
          const referrerOrigin = new URL(this.referrer);
          const referrerHost = referrerOrigin.hostname;
          if (this.frontendApi) {
            const fapiHost = this.frontendApi.startsWith("http") ? new URL(this.frontendApi).hostname : this.frontendApi;
            if (referrerHost === fapiHost) {
              return true;
            }
          }
          if (isLegacyDevAccountPortalOrigin(referrerHost) || isCurrentDevAccountPortalOrigin(referrerHost)) {
            return true;
          }
          const expectedAccountsUrl = buildAccountsBaseUrl(this.frontendApi);
          if (expectedAccountsUrl) {
            const expectedAccountsOrigin = new URL(expectedAccountsUrl).origin;
            if (referrerOrigin.origin === expectedAccountsOrigin) {
              return true;
            }
          }
          if (referrerHost.startsWith("accounts.")) {
            return true;
          }
          return false;
        } catch {
          return false;
        }
      }
      initPublishableKeyValues(options) {
        assertValidPublishableKey(options.publishableKey);
        this.publishableKey = options.publishableKey;
        const originalPk = parsePublishableKey(this.publishableKey, {
          fatal: true,
          domain: options.domain,
          isSatellite: options.isSatellite
        });
        this.originalFrontendApi = originalPk.frontendApi;
        const pk = parsePublishableKey(this.publishableKey, {
          fatal: true,
          proxyUrl: options.proxyUrl,
          domain: options.domain,
          isSatellite: options.isSatellite
        });
        this.instanceType = pk.instanceType;
        this.frontendApi = pk.frontendApi;
      }
      initHeaderValues() {
        this.tokenInHeader = this.parseAuthorizationHeader(this.getHeader(constants.Headers.Authorization));
        this.origin = this.getHeader(constants.Headers.Origin);
        this.host = this.getHeader(constants.Headers.Host);
        this.forwardedHost = this.getHeader(constants.Headers.ForwardedHost);
        this.forwardedProto = this.getHeader(constants.Headers.CloudFrontForwardedProto) || this.getHeader(constants.Headers.ForwardedProto);
        this.referrer = this.getHeader(constants.Headers.Referrer);
        this.userAgent = this.getHeader(constants.Headers.UserAgent);
        this.secFetchDest = this.getHeader(constants.Headers.SecFetchDest);
        this.accept = this.getHeader(constants.Headers.Accept);
      }
      initCookieValues() {
        this.sessionTokenInCookie = this.getSuffixedOrUnSuffixedCookie(constants.Cookies.Session);
        this.refreshTokenInCookie = this.getSuffixedCookie(constants.Cookies.Refresh);
        this.clientUat = Number.parseInt(this.getSuffixedOrUnSuffixedCookie(constants.Cookies.ClientUat) || "") || 0;
      }
      initHandshakeValues() {
        this.devBrowserToken = this.getQueryParam(constants.QueryParameters.DevBrowser) || this.getSuffixedOrUnSuffixedCookie(constants.Cookies.DevBrowser);
        this.handshakeToken = this.getQueryParam(constants.QueryParameters.Handshake) || this.getCookie(constants.Cookies.Handshake);
        this.handshakeRedirectLoopCounter = Number(this.getCookie(constants.Cookies.RedirectCount)) || 0;
        this.handshakeNonce = this.getQueryParam(constants.QueryParameters.HandshakeNonce) || this.getCookie(constants.Cookies.HandshakeNonce);
      }
      getQueryParam(name) {
        return this.clerkRequest.clerkUrl.searchParams.get(name);
      }
      getHeader(name) {
        return this.clerkRequest.headers.get(name) || void 0;
      }
      getCookie(name) {
        return this.clerkRequest.cookies.get(name) || void 0;
      }
      getSuffixedCookie(name) {
        return this.getCookie(getSuffixedCookieName(name, this.cookieSuffix)) || void 0;
      }
      getSuffixedOrUnSuffixedCookie(cookieName) {
        if (this.usesSuffixedCookies()) {
          return this.getSuffixedCookie(cookieName);
        }
        return this.getCookie(cookieName);
      }
      parseAuthorizationHeader(authorizationHeader) {
        if (!authorizationHeader) {
          return void 0;
        }
        const [scheme, token] = authorizationHeader.split(" ", 2);
        if (!token) {
          return scheme;
        }
        if (scheme === "Bearer") {
          return token;
        }
        return void 0;
      }
      tokenHasIssuer(token) {
        const { data, errors } = decodeJwt(token);
        if (errors) {
          return false;
        }
        return !!data.payload.iss;
      }
      tokenBelongsToInstance(token) {
        if (!token) {
          return false;
        }
        const { data, errors } = decodeJwt(token);
        if (errors) {
          return false;
        }
        const tokenIssuer = data.payload.iss.replace(/https?:\/\//gi, "");
        return this.originalFrontendApi === tokenIssuer;
      }
      sessionExpired(jwt) {
        return !!jwt && jwt?.payload.exp <= Date.now() / 1e3 >> 0;
      }
    };
    createAuthenticateContext = /* @__PURE__ */ __name2(async (clerkRequest, options) => {
      const cookieSuffix = options.publishableKey ? await getCookieSuffix(options.publishableKey, runtime.crypto.subtle) : "";
      return new AuthenticateContext(cookieSuffix, clerkRequest, options);
    }, "createAuthenticateContext");
    SEPARATOR = "/";
    MULTIPLE_SEPARATOR_REGEX = new RegExp("(?<!:)" + SEPARATOR + "{1,}", "g");
    __name2(joinPaths, "joinPaths");
    AbstractAPI = class {
      static {
        __name(this, "AbstractAPI");
      }
      static {
        __name2(this, "AbstractAPI");
      }
      constructor(request) {
        this.request = request;
      }
      requireId(id) {
        if (!id) {
          throw new Error("A valid resource ID is required.");
        }
      }
    };
    basePath = "/actor_tokens";
    ActorTokenAPI = class extends AbstractAPI {
      static {
        __name(this, "ActorTokenAPI");
      }
      static {
        __name2(this, "ActorTokenAPI");
      }
      async create(params) {
        return this.request({
          method: "POST",
          path: basePath,
          bodyParams: params
        });
      }
      async revoke(actorTokenId) {
        this.requireId(actorTokenId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath, actorTokenId, "revoke")
        });
      }
    };
    basePath2 = "/agents/tasks";
    AgentTaskAPI = class extends AbstractAPI {
      static {
        __name(this, "AgentTaskAPI");
      }
      static {
        __name2(this, "AgentTaskAPI");
      }
      /**
       * @experimental This is an experimental API for the Agent Tokens feature that is available under a private beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
       */
      async create(params) {
        return this.request({
          method: "POST",
          path: basePath2,
          bodyParams: params,
          options: {
            deepSnakecaseBodyParamKeys: true
          }
        });
      }
      async revoke(agentTaskId) {
        this.requireId(agentTaskId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath2, agentTaskId, "revoke")
        });
      }
    };
    basePath3 = "/accountless_applications";
    AccountlessApplicationAPI = class extends AbstractAPI {
      static {
        __name(this, "AccountlessApplicationAPI");
      }
      static {
        __name2(this, "AccountlessApplicationAPI");
      }
      async createAccountlessApplication(params) {
        const headerParams = params?.requestHeaders ? Object.fromEntries(params.requestHeaders.entries()) : void 0;
        return this.request({
          method: "POST",
          path: basePath3,
          headerParams
        });
      }
      async completeAccountlessApplicationOnboarding(params) {
        const headerParams = params?.requestHeaders ? Object.fromEntries(params.requestHeaders.entries()) : void 0;
        return this.request({
          method: "POST",
          path: joinPaths(basePath3, "complete"),
          headerParams
        });
      }
    };
    basePath4 = "/allowlist_identifiers";
    AllowlistIdentifierAPI = class extends AbstractAPI {
      static {
        __name(this, "AllowlistIdentifierAPI");
      }
      static {
        __name2(this, "AllowlistIdentifierAPI");
      }
      async getAllowlistIdentifierList(params = {}) {
        return this.request({
          method: "GET",
          path: basePath4,
          queryParams: { ...params, paginated: true }
        });
      }
      async createAllowlistIdentifier(params) {
        return this.request({
          method: "POST",
          path: basePath4,
          bodyParams: params
        });
      }
      async deleteAllowlistIdentifier(allowlistIdentifierId) {
        this.requireId(allowlistIdentifierId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath4, allowlistIdentifierId)
        });
      }
    };
    basePath5 = "/api_keys";
    APIKeysAPI = class extends AbstractAPI {
      static {
        __name(this, "APIKeysAPI");
      }
      static {
        __name2(this, "APIKeysAPI");
      }
      async list(queryParams) {
        return this.request({
          method: "GET",
          path: basePath5,
          queryParams
        });
      }
      async create(params) {
        return this.request({
          method: "POST",
          path: basePath5,
          bodyParams: params
        });
      }
      async get(apiKeyId) {
        this.requireId(apiKeyId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath5, apiKeyId)
        });
      }
      async update(params) {
        const { apiKeyId, ...bodyParams } = params;
        this.requireId(apiKeyId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath5, apiKeyId),
          bodyParams
        });
      }
      async delete(apiKeyId) {
        this.requireId(apiKeyId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath5, apiKeyId)
        });
      }
      async revoke(params) {
        const { apiKeyId, revocationReason = null } = params;
        this.requireId(apiKeyId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath5, apiKeyId, "revoke"),
          bodyParams: { revocationReason }
        });
      }
      async getSecret(apiKeyId) {
        this.requireId(apiKeyId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath5, apiKeyId, "secret")
        });
      }
      async verify(secret) {
        return this.request({
          method: "POST",
          path: joinPaths(basePath5, "verify"),
          bodyParams: { secret }
        });
      }
      /**
       * @deprecated Use `verify()` instead. This method will be removed in the next major release.
       */
      async verifySecret(secret) {
        deprecated("apiKeys.verifySecret()", "Use `apiKeys.verify()` instead.");
        return this.verify(secret);
      }
    };
    basePath6 = "/beta_features";
    BetaFeaturesAPI = class extends AbstractAPI {
      static {
        __name(this, "BetaFeaturesAPI");
      }
      static {
        __name2(this, "BetaFeaturesAPI");
      }
      /**
       * Change the domain of a production instance.
       *
       * Changing the domain requires updating the DNS records accordingly, deploying new SSL certificates,
       * updating your Social Connection's redirect URLs and setting the new keys in your code.
       *
       * @remarks
       * WARNING: Changing your domain will invalidate all current user sessions (i.e. users will be logged out).
       *          Also, while your application is being deployed, a small downtime is expected to occur.
       */
      async changeDomain(params) {
        return this.request({
          method: "POST",
          path: joinPaths(basePath6, "change_domain"),
          bodyParams: params
        });
      }
    };
    basePath7 = "/blocklist_identifiers";
    BlocklistIdentifierAPI = class extends AbstractAPI {
      static {
        __name(this, "BlocklistIdentifierAPI");
      }
      static {
        __name2(this, "BlocklistIdentifierAPI");
      }
      async getBlocklistIdentifierList(params = {}) {
        return this.request({
          method: "GET",
          path: basePath7,
          queryParams: params
        });
      }
      async createBlocklistIdentifier(params) {
        return this.request({
          method: "POST",
          path: basePath7,
          bodyParams: params
        });
      }
      async deleteBlocklistIdentifier(blocklistIdentifierId) {
        this.requireId(blocklistIdentifierId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath7, blocklistIdentifierId)
        });
      }
    };
    basePath8 = "/clients";
    ClientAPI = class extends AbstractAPI {
      static {
        __name(this, "ClientAPI");
      }
      static {
        __name2(this, "ClientAPI");
      }
      async getClientList(params = {}) {
        return this.request({
          method: "GET",
          path: basePath8,
          queryParams: { ...params, paginated: true }
        });
      }
      async getClient(clientId) {
        this.requireId(clientId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath8, clientId)
        });
      }
      verifyClient(token) {
        return this.request({
          method: "POST",
          path: joinPaths(basePath8, "verify"),
          bodyParams: { token }
        });
      }
      async getHandshakePayload(queryParams) {
        return this.request({
          method: "GET",
          path: joinPaths(basePath8, "handshake_payload"),
          queryParams
        });
      }
    };
    basePath9 = "/domains";
    DomainAPI = class extends AbstractAPI {
      static {
        __name(this, "DomainAPI");
      }
      static {
        __name2(this, "DomainAPI");
      }
      async list() {
        return this.request({
          method: "GET",
          path: basePath9
        });
      }
      async add(params) {
        return this.request({
          method: "POST",
          path: basePath9,
          bodyParams: params
        });
      }
      async update(params) {
        const { domainId, ...bodyParams } = params;
        this.requireId(domainId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath9, domainId),
          bodyParams
        });
      }
      /**
       * Deletes a satellite domain for the instance.
       * It is currently not possible to delete the instance's primary domain.
       */
      async delete(satelliteDomainId) {
        return this.deleteDomain(satelliteDomainId);
      }
      /**
       * @deprecated Use `delete` instead
       */
      async deleteDomain(satelliteDomainId) {
        this.requireId(satelliteDomainId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath9, satelliteDomainId)
        });
      }
    };
    basePath10 = "/email_addresses";
    EmailAddressAPI = class extends AbstractAPI {
      static {
        __name(this, "EmailAddressAPI");
      }
      static {
        __name2(this, "EmailAddressAPI");
      }
      async getEmailAddress(emailAddressId) {
        this.requireId(emailAddressId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath10, emailAddressId)
        });
      }
      async createEmailAddress(params) {
        return this.request({
          method: "POST",
          path: basePath10,
          bodyParams: params
        });
      }
      async updateEmailAddress(emailAddressId, params = {}) {
        this.requireId(emailAddressId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath10, emailAddressId),
          bodyParams: params
        });
      }
      async deleteEmailAddress(emailAddressId) {
        this.requireId(emailAddressId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath10, emailAddressId)
        });
      }
    };
    basePath11 = "/oauth_applications/access_tokens";
    IdPOAuthAccessTokenApi = class extends AbstractAPI {
      static {
        __name(this, "IdPOAuthAccessTokenApi");
      }
      static {
        __name2(this, "IdPOAuthAccessTokenApi");
      }
      async verify(accessToken) {
        return this.request({
          method: "POST",
          path: joinPaths(basePath11, "verify"),
          bodyParams: { access_token: accessToken }
        });
      }
      /**
       * @deprecated Use `verify()` instead. This method will be removed in the next major release.
       */
      async verifyAccessToken(accessToken) {
        deprecated("idPOAuthAccessToken.verifyAccessToken()", "Use `idPOAuthAccessToken.verify()` instead.");
        return this.verify(accessToken);
      }
    };
    basePath12 = "/instance";
    InstanceAPI = class extends AbstractAPI {
      static {
        __name(this, "InstanceAPI");
      }
      static {
        __name2(this, "InstanceAPI");
      }
      async get() {
        return this.request({
          method: "GET",
          path: basePath12
        });
      }
      async update(params) {
        return this.request({
          method: "PATCH",
          path: basePath12,
          bodyParams: params
        });
      }
      async updateRestrictions(params) {
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath12, "restrictions"),
          bodyParams: params
        });
      }
      async updateOrganizationSettings(params) {
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath12, "organization_settings"),
          bodyParams: params
        });
      }
    };
    basePath13 = "/invitations";
    InvitationAPI = class extends AbstractAPI {
      static {
        __name(this, "InvitationAPI");
      }
      static {
        __name2(this, "InvitationAPI");
      }
      async getInvitationList(params = {}) {
        return this.request({
          method: "GET",
          path: basePath13,
          queryParams: { ...params, paginated: true }
        });
      }
      async createInvitation(params) {
        return this.request({
          method: "POST",
          path: basePath13,
          bodyParams: params
        });
      }
      async createInvitationBulk(params) {
        return this.request({
          method: "POST",
          path: joinPaths(basePath13, "bulk"),
          bodyParams: params
        });
      }
      async revokeInvitation(invitationId) {
        this.requireId(invitationId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath13, invitationId, "revoke")
        });
      }
    };
    basePath14 = "/machines";
    MachineApi = class extends AbstractAPI {
      static {
        __name(this, "MachineApi");
      }
      static {
        __name2(this, "MachineApi");
      }
      async get(machineId) {
        this.requireId(machineId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath14, machineId)
        });
      }
      async list(queryParams = {}) {
        return this.request({
          method: "GET",
          path: basePath14,
          queryParams
        });
      }
      async create(bodyParams) {
        return this.request({
          method: "POST",
          path: basePath14,
          bodyParams
        });
      }
      async update(params) {
        const { machineId, ...bodyParams } = params;
        this.requireId(machineId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath14, machineId),
          bodyParams
        });
      }
      async delete(machineId) {
        this.requireId(machineId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath14, machineId)
        });
      }
      async getSecretKey(machineId) {
        this.requireId(machineId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath14, machineId, "secret_key")
        });
      }
      async rotateSecretKey(params) {
        const { machineId, previousTokenTtl } = params;
        this.requireId(machineId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath14, machineId, "secret_key", "rotate"),
          bodyParams: {
            previousTokenTtl
          }
        });
      }
      /**
       * Creates a new machine scope, allowing the specified machine to access another machine.
       *
       * @param machineId - The ID of the machine that will have access to another machine.
       * @param toMachineId - The ID of the machine that will be scoped to the current machine.
       */
      async createScope(machineId, toMachineId) {
        this.requireId(machineId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath14, machineId, "scopes"),
          bodyParams: {
            toMachineId
          }
        });
      }
      /**
       * Deletes a machine scope, removing access from one machine to another.
       *
       * @param machineId - The ID of the machine that has access to another machine.
       * @param otherMachineId - The ID of the machine that is being accessed.
       */
      async deleteScope(machineId, otherMachineId) {
        this.requireId(machineId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath14, machineId, "scopes", otherMachineId)
        });
      }
    };
    IdPOAuthAccessToken = class _IdPOAuthAccessToken {
      static {
        __name(this, "_IdPOAuthAccessToken");
      }
      static {
        __name2(this, "_IdPOAuthAccessToken");
      }
      constructor(id, clientId, type, subject, scopes, revoked, revocationReason, expired, expiration, createdAt, updatedAt) {
        this.id = id;
        this.clientId = clientId;
        this.type = type;
        this.subject = subject;
        this.scopes = scopes;
        this.revoked = revoked;
        this.revocationReason = revocationReason;
        this.expired = expired;
        this.expiration = expiration;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      }
      static fromJSON(data) {
        return new _IdPOAuthAccessToken(
          data.id,
          data.client_id,
          data.type,
          data.subject,
          data.scopes,
          data.revoked,
          data.revocation_reason,
          data.expired,
          data.expiration,
          data.created_at,
          data.updated_at
        );
      }
      /**
       * Creates an IdPOAuthAccessToken from a JWT payload.
       * Maps standard JWT claims and OAuth-specific fields to token properties.
       */
      static fromJwtPayload(payload, clockSkewInMs = 5e3) {
        const oauthPayload = payload;
        return new _IdPOAuthAccessToken(
          oauthPayload.jti ?? "",
          oauthPayload.client_id ?? "",
          "oauth_token",
          payload.sub,
          oauthPayload.scp ?? oauthPayload.scope?.split(" ") ?? [],
          false,
          null,
          payload.exp * 1e3 <= Date.now() - clockSkewInMs,
          payload.exp,
          payload.iat,
          payload.iat
        );
      }
    };
    M2MToken = class _M2MToken {
      static {
        __name(this, "_M2MToken");
      }
      static {
        __name2(this, "_M2MToken");
      }
      constructor(id, subject, scopes, claims, revoked, revocationReason, expired, expiration, createdAt, updatedAt, token) {
        this.id = id;
        this.subject = subject;
        this.scopes = scopes;
        this.claims = claims;
        this.revoked = revoked;
        this.revocationReason = revocationReason;
        this.expired = expired;
        this.expiration = expiration;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.token = token;
      }
      static fromJSON(data) {
        return new _M2MToken(
          data.id,
          data.subject,
          data.scopes,
          data.claims,
          data.revoked,
          data.revocation_reason,
          data.expired,
          data.expiration,
          data.created_at,
          data.updated_at,
          data.token
        );
      }
      static fromJwtPayload(payload, clockSkewInMs = 5e3) {
        return new _M2MToken(
          payload.jti ?? "",
          // jti should always be present in Clerk-issued M2M JWTs
          payload.sub,
          payload.scopes?.split(" ") ?? payload.aud ?? [],
          null,
          false,
          null,
          payload.exp * 1e3 <= Date.now() - clockSkewInMs,
          payload.exp * 1e3,
          // milliseconds — expiration, converted from JWT exp claim
          payload.iat * 1e3,
          // milliseconds — createdAt, converted from JWT iat claim
          payload.iat * 1e3
          // milliseconds — updatedAt, no JWT equivalent; defaults to iat
        );
      }
    };
    cache = {};
    lastUpdatedAt = 0;
    __name2(getFromCache, "getFromCache");
    __name2(getCacheValues, "getCacheValues");
    __name2(setInCache, "setInCache");
    PEM_HEADER = "-----BEGIN PUBLIC KEY-----";
    PEM_TRAILER = "-----END PUBLIC KEY-----";
    RSA_PREFIX = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA";
    RSA_SUFFIX = "IDAQAB";
    __name2(loadClerkJwkFromPem, "loadClerkJwkFromPem");
    __name2(loadClerkJWKFromRemote, "loadClerkJWKFromRemote");
    __name2(fetchJWKSFromBAPI, "fetchJWKSFromBAPI");
    __name2(cacheHasExpired, "cacheHasExpired");
    getErrorObjectByCode = /* @__PURE__ */ __name2((errors, code) => {
      if (!errors) {
        return null;
      }
      return errors.find((err) => err.code === code);
    }, "getErrorObjectByCode");
    M2M_TOKEN_PREFIX = "mt_";
    M2M_SUBJECT_PREFIX = "mch_";
    OAUTH_TOKEN_PREFIX = "oat_";
    API_KEY_PREFIX = "ak_";
    MACHINE_TOKEN_PREFIXES = [M2M_TOKEN_PREFIX, OAUTH_TOKEN_PREFIX, API_KEY_PREFIX];
    JwtFormatRegExp = /^[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+$/;
    __name2(isJwtFormat, "isJwtFormat");
    OAUTH_ACCESS_TOKEN_TYPES = ["at+jwt", "application/at+jwt"];
    __name2(isOAuthJwt, "isOAuthJwt");
    __name2(isM2MJwt, "isM2MJwt");
    __name2(isMachineJwt, "isMachineJwt");
    __name2(isMachineTokenByPrefix, "isMachineTokenByPrefix");
    __name2(isMachineToken, "isMachineToken");
    __name2(getMachineTokenType, "getMachineTokenType");
    isTokenTypeAccepted = /* @__PURE__ */ __name2((tokenType, acceptsToken) => {
      if (!tokenType) {
        return false;
      }
      if (acceptsToken === "any") {
        return true;
      }
      const tokenTypes = Array.isArray(acceptsToken) ? acceptsToken : [acceptsToken];
      return tokenTypes.includes(tokenType);
    }, "isTokenTypeAccepted");
    MACHINE_TOKEN_TYPES = /* @__PURE__ */ new Set([TokenType.ApiKey, TokenType.M2MToken, TokenType.OAuthToken]);
    __name2(isMachineTokenType, "isMachineTokenType");
    __name2(resolveKeyAndVerifyJwt, "resolveKeyAndVerifyJwt");
    __name2(verifyM2MJwt, "verifyM2MJwt");
    __name2(verifyOAuthJwt, "verifyOAuthJwt");
    basePath15 = "/m2m_tokens";
    M2MTokenApi = class extends AbstractAPI {
      static {
        __name(this, "M2MTokenApi");
      }
      static {
        __name2(this, "M2MTokenApi");
      }
      /**
       * @param verifyOptions - JWT verification options (secretKey, apiUrl, etc.).
       * Passed explicitly because BuildRequestOptions are captured inside the buildRequest closure
       * and are not accessible from the RequestFunction itself.
       */
      constructor(request, verifyOptions = {}) {
        super(request);
        __privateAdd(this, _M2MTokenApi_instances);
        __privateAdd(this, _verifyOptions);
        __privateSet(this, _verifyOptions, verifyOptions);
      }
      async list(queryParams) {
        return this.request({
          method: "GET",
          path: basePath15,
          queryParams
        });
      }
      async createToken(params) {
        const { claims = null, machineSecretKey, secondsUntilExpiration = null, tokenFormat = "opaque" } = params || {};
        const requestOptions = __privateMethod(this, _M2MTokenApi_instances, createRequestOptions_fn).call(this, {
          method: "POST",
          path: basePath15,
          bodyParams: {
            secondsUntilExpiration,
            claims,
            tokenFormat
          }
        }, machineSecretKey);
        return this.request(requestOptions);
      }
      async revokeToken(params) {
        const { m2mTokenId, revocationReason = null, machineSecretKey } = params;
        this.requireId(m2mTokenId);
        const requestOptions = __privateMethod(this, _M2MTokenApi_instances, createRequestOptions_fn).call(this, {
          method: "POST",
          path: joinPaths(basePath15, m2mTokenId, "revoke"),
          bodyParams: {
            revocationReason
          }
        }, machineSecretKey);
        return this.request(requestOptions);
      }
      async verify(params) {
        const { token, machineSecretKey } = params;
        if (isM2MJwt(token)) {
          return __privateMethod(this, _M2MTokenApi_instances, verifyJwtFormat_fn).call(this, token);
        }
        const requestOptions = __privateMethod(this, _M2MTokenApi_instances, createRequestOptions_fn).call(this, {
          method: "POST",
          path: joinPaths(basePath15, "verify"),
          bodyParams: { token }
        }, machineSecretKey);
        return this.request(requestOptions);
      }
      /**
       * @deprecated Use `verify()` instead. This method will be removed in the next major release.
       */
      async verifyToken(params) {
        deprecated("m2m.verifyToken()", "Use `m2m.verify()` instead.");
        return this.verify(params);
      }
    };
    _verifyOptions = /* @__PURE__ */ new WeakMap();
    _M2MTokenApi_instances = /* @__PURE__ */ new WeakSet();
    createRequestOptions_fn = /* @__PURE__ */ __name2(function(options, machineSecretKey) {
      if (machineSecretKey) {
        return {
          ...options,
          headerParams: {
            ...options.headerParams,
            Authorization: `Bearer ${machineSecretKey}`
          }
        };
      }
      return options;
    }, "createRequestOptions_fn");
    verifyJwtFormat_fn = /* @__PURE__ */ __name2(async function(token) {
      let decoded;
      try {
        const { data, errors } = decodeJwt(token);
        if (errors) {
          throw errors[0];
        }
        decoded = data;
      } catch (e) {
        throw new MachineTokenVerificationError({
          code: MachineTokenVerificationErrorCode.TokenInvalid,
          message: e.message
        });
      }
      const result = await verifyM2MJwt(token, decoded, __privateGet(this, _verifyOptions));
      if (result.errors) {
        throw result.errors[0];
      }
      return result.data;
    }, "verifyJwtFormat_fn");
    basePath16 = "/jwks";
    JwksAPI = class extends AbstractAPI {
      static {
        __name(this, "JwksAPI");
      }
      static {
        __name2(this, "JwksAPI");
      }
      async getJwks() {
        return this.request({
          method: "GET",
          path: basePath16
        });
      }
    };
    basePath17 = "/jwt_templates";
    JwtTemplatesApi = class extends AbstractAPI {
      static {
        __name(this, "JwtTemplatesApi");
      }
      static {
        __name2(this, "JwtTemplatesApi");
      }
      async list(params = {}) {
        return this.request({
          method: "GET",
          path: basePath17,
          queryParams: { ...params, paginated: true }
        });
      }
      async get(templateId) {
        this.requireId(templateId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath17, templateId)
        });
      }
      async create(params) {
        return this.request({
          method: "POST",
          path: basePath17,
          bodyParams: params
        });
      }
      async update(params) {
        const { templateId, ...bodyParams } = params;
        this.requireId(templateId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath17, templateId),
          bodyParams
        });
      }
      async delete(templateId) {
        this.requireId(templateId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath17, templateId)
        });
      }
    };
    basePath18 = "/organizations";
    OrganizationAPI = class extends AbstractAPI {
      static {
        __name(this, "OrganizationAPI");
      }
      static {
        __name2(this, "OrganizationAPI");
      }
      async getOrganizationList(params) {
        return this.request({
          method: "GET",
          path: basePath18,
          queryParams: params
        });
      }
      async createOrganization(params) {
        return this.request({
          method: "POST",
          path: basePath18,
          bodyParams: params
        });
      }
      async getOrganization(params) {
        const { includeMembersCount } = params;
        const organizationIdOrSlug = "organizationId" in params ? params.organizationId : params.slug;
        this.requireId(organizationIdOrSlug);
        return this.request({
          method: "GET",
          path: joinPaths(basePath18, organizationIdOrSlug),
          queryParams: {
            includeMembersCount
          }
        });
      }
      async updateOrganization(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath18, organizationId),
          bodyParams: params
        });
      }
      async updateOrganizationLogo(organizationId, params) {
        this.requireId(organizationId);
        const formData = new runtime.FormData();
        formData.append("file", params?.file);
        if (params?.uploaderUserId) {
          formData.append("uploader_user_id", params?.uploaderUserId);
        }
        return this.request({
          method: "PUT",
          path: joinPaths(basePath18, organizationId, "logo"),
          formData
        });
      }
      async deleteOrganizationLogo(organizationId) {
        this.requireId(organizationId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath18, organizationId, "logo")
        });
      }
      async updateOrganizationMetadata(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath18, organizationId, "metadata"),
          bodyParams: params
        });
      }
      async deleteOrganization(organizationId) {
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath18, organizationId)
        });
      }
      async getOrganizationMembershipList(params) {
        const { organizationId, ...queryParams } = params;
        this.requireId(organizationId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath18, organizationId, "memberships"),
          queryParams
        });
      }
      async getInstanceOrganizationMembershipList(params) {
        return this.request({
          method: "GET",
          path: "/organization_memberships",
          queryParams: params
        });
      }
      async createOrganizationMembership(params) {
        const { organizationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath18, organizationId, "memberships"),
          bodyParams
        });
      }
      async updateOrganizationMembership(params) {
        const { organizationId, userId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath18, organizationId, "memberships", userId),
          bodyParams
        });
      }
      async updateOrganizationMembershipMetadata(params) {
        const { organizationId, userId, ...bodyParams } = params;
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath18, organizationId, "memberships", userId, "metadata"),
          bodyParams
        });
      }
      async deleteOrganizationMembership(params) {
        const { organizationId, userId } = params;
        this.requireId(organizationId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath18, organizationId, "memberships", userId)
        });
      }
      async getOrganizationInvitationList(params) {
        const { organizationId, ...queryParams } = params;
        this.requireId(organizationId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath18, organizationId, "invitations"),
          queryParams
        });
      }
      async createOrganizationInvitation(params) {
        const { organizationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath18, organizationId, "invitations"),
          bodyParams
        });
      }
      async createOrganizationInvitationBulk(organizationId, params) {
        this.requireId(organizationId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath18, organizationId, "invitations", "bulk"),
          bodyParams: params
        });
      }
      async getOrganizationInvitation(params) {
        const { organizationId, invitationId } = params;
        this.requireId(organizationId);
        this.requireId(invitationId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath18, organizationId, "invitations", invitationId)
        });
      }
      async revokeOrganizationInvitation(params) {
        const { organizationId, invitationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath18, organizationId, "invitations", invitationId, "revoke"),
          bodyParams
        });
      }
      async getOrganizationDomainList(params) {
        const { organizationId, ...queryParams } = params;
        this.requireId(organizationId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath18, organizationId, "domains"),
          queryParams
        });
      }
      async createOrganizationDomain(params) {
        const { organizationId, ...bodyParams } = params;
        this.requireId(organizationId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath18, organizationId, "domains"),
          bodyParams: {
            ...bodyParams,
            verified: bodyParams.verified ?? true
          }
        });
      }
      async updateOrganizationDomain(params) {
        const { organizationId, domainId, ...bodyParams } = params;
        this.requireId(organizationId);
        this.requireId(domainId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath18, organizationId, "domains", domainId),
          bodyParams
        });
      }
      async deleteOrganizationDomain(params) {
        const { organizationId, domainId } = params;
        this.requireId(organizationId);
        this.requireId(domainId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath18, organizationId, "domains", domainId)
        });
      }
    };
    basePath19 = "/oauth_applications";
    OAuthApplicationsApi = class extends AbstractAPI {
      static {
        __name(this, "OAuthApplicationsApi");
      }
      static {
        __name2(this, "OAuthApplicationsApi");
      }
      async list(params = {}) {
        return this.request({
          method: "GET",
          path: basePath19,
          queryParams: params
        });
      }
      async get(oauthApplicationId) {
        this.requireId(oauthApplicationId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath19, oauthApplicationId)
        });
      }
      async create(params) {
        return this.request({
          method: "POST",
          path: basePath19,
          bodyParams: params
        });
      }
      async update(params) {
        const { oauthApplicationId, ...bodyParams } = params;
        this.requireId(oauthApplicationId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath19, oauthApplicationId),
          bodyParams
        });
      }
      async delete(oauthApplicationId) {
        this.requireId(oauthApplicationId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath19, oauthApplicationId)
        });
      }
      async rotateSecret(oauthApplicationId) {
        this.requireId(oauthApplicationId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath19, oauthApplicationId, "rotate_secret")
        });
      }
    };
    basePath20 = "/phone_numbers";
    PhoneNumberAPI = class extends AbstractAPI {
      static {
        __name(this, "PhoneNumberAPI");
      }
      static {
        __name2(this, "PhoneNumberAPI");
      }
      async getPhoneNumber(phoneNumberId) {
        this.requireId(phoneNumberId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath20, phoneNumberId)
        });
      }
      async createPhoneNumber(params) {
        return this.request({
          method: "POST",
          path: basePath20,
          bodyParams: params
        });
      }
      async updatePhoneNumber(phoneNumberId, params = {}) {
        this.requireId(phoneNumberId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath20, phoneNumberId),
          bodyParams: params
        });
      }
      async deletePhoneNumber(phoneNumberId) {
        this.requireId(phoneNumberId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath20, phoneNumberId)
        });
      }
    };
    basePath21 = "/proxy_checks";
    ProxyCheckAPI = class extends AbstractAPI {
      static {
        __name(this, "ProxyCheckAPI");
      }
      static {
        __name2(this, "ProxyCheckAPI");
      }
      async verify(params) {
        return this.request({
          method: "POST",
          path: basePath21,
          bodyParams: params
        });
      }
    };
    basePath22 = "/redirect_urls";
    RedirectUrlAPI = class extends AbstractAPI {
      static {
        __name(this, "RedirectUrlAPI");
      }
      static {
        __name2(this, "RedirectUrlAPI");
      }
      async getRedirectUrlList() {
        return this.request({
          method: "GET",
          path: basePath22,
          queryParams: { paginated: true }
        });
      }
      async getRedirectUrl(redirectUrlId) {
        this.requireId(redirectUrlId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath22, redirectUrlId)
        });
      }
      async createRedirectUrl(params) {
        return this.request({
          method: "POST",
          path: basePath22,
          bodyParams: params
        });
      }
      async deleteRedirectUrl(redirectUrlId) {
        this.requireId(redirectUrlId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath22, redirectUrlId)
        });
      }
    };
    basePath23 = "/saml_connections";
    SamlConnectionAPI = class extends AbstractAPI {
      static {
        __name(this, "SamlConnectionAPI");
      }
      static {
        __name2(this, "SamlConnectionAPI");
      }
      async getSamlConnectionList(params = {}) {
        return this.request({
          method: "GET",
          path: basePath23,
          queryParams: params
        });
      }
      async createSamlConnection(params) {
        return this.request({
          method: "POST",
          path: basePath23,
          bodyParams: params,
          options: {
            deepSnakecaseBodyParamKeys: true
          }
        });
      }
      async getSamlConnection(samlConnectionId) {
        this.requireId(samlConnectionId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath23, samlConnectionId)
        });
      }
      async updateSamlConnection(samlConnectionId, params = {}) {
        this.requireId(samlConnectionId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath23, samlConnectionId),
          bodyParams: params,
          options: {
            deepSnakecaseBodyParamKeys: true
          }
        });
      }
      async deleteSamlConnection(samlConnectionId) {
        this.requireId(samlConnectionId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath23, samlConnectionId)
        });
      }
    };
    basePath24 = "/sessions";
    SessionAPI = class extends AbstractAPI {
      static {
        __name(this, "SessionAPI");
      }
      static {
        __name2(this, "SessionAPI");
      }
      async getSessionList(params = {}) {
        return this.request({
          method: "GET",
          path: basePath24,
          queryParams: { ...params, paginated: true }
        });
      }
      async getSession(sessionId) {
        this.requireId(sessionId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath24, sessionId)
        });
      }
      async createSession(params) {
        return this.request({
          method: "POST",
          path: basePath24,
          bodyParams: params
        });
      }
      async revokeSession(sessionId) {
        this.requireId(sessionId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath24, sessionId, "revoke")
        });
      }
      async verifySession(sessionId, token) {
        this.requireId(sessionId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath24, sessionId, "verify"),
          bodyParams: { token }
        });
      }
      /**
       * Retrieves a session token or generates a JWT using a specified template.
       *
       * @param sessionId - The ID of the session for which to generate the token
       * @param template - Optional name of the JWT template configured in the Clerk Dashboard.
       * @param expiresInSeconds - Optional expiration time for the token in seconds.
       *   If not provided, uses the default expiration.
       *
       * @returns A promise that resolves to the generated token
       *
       * @throws {Error} When sessionId is invalid or empty
       */
      async getToken(sessionId, template, expiresInSeconds) {
        this.requireId(sessionId);
        const path = template ? joinPaths(basePath24, sessionId, "tokens", template) : joinPaths(basePath24, sessionId, "tokens");
        const requestOptions = {
          method: "POST",
          path
        };
        if (expiresInSeconds !== void 0) {
          requestOptions.bodyParams = { expires_in_seconds: expiresInSeconds };
        }
        return this.request(requestOptions);
      }
      async refreshSession(sessionId, params) {
        this.requireId(sessionId);
        const { suffixed_cookies, ...restParams } = params;
        return this.request({
          method: "POST",
          path: joinPaths(basePath24, sessionId, "refresh"),
          bodyParams: restParams,
          queryParams: { suffixed_cookies }
        });
      }
    };
    basePath25 = "/sign_in_tokens";
    SignInTokenAPI = class extends AbstractAPI {
      static {
        __name(this, "SignInTokenAPI");
      }
      static {
        __name2(this, "SignInTokenAPI");
      }
      async createSignInToken(params) {
        return this.request({
          method: "POST",
          path: basePath25,
          bodyParams: params
        });
      }
      async revokeSignInToken(signInTokenId) {
        this.requireId(signInTokenId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath25, signInTokenId, "revoke")
        });
      }
    };
    basePath26 = "/sign_ups";
    SignUpAPI = class extends AbstractAPI {
      static {
        __name(this, "SignUpAPI");
      }
      static {
        __name2(this, "SignUpAPI");
      }
      async get(signUpAttemptId) {
        this.requireId(signUpAttemptId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath26, signUpAttemptId)
        });
      }
      async update(params) {
        const { signUpAttemptId, ...bodyParams } = params;
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath26, signUpAttemptId),
          bodyParams
        });
      }
    };
    basePath27 = "/testing_tokens";
    TestingTokenAPI = class extends AbstractAPI {
      static {
        __name(this, "TestingTokenAPI");
      }
      static {
        __name2(this, "TestingTokenAPI");
      }
      async createTestingToken() {
        return this.request({
          method: "POST",
          path: basePath27
        });
      }
    };
    basePath28 = "/users";
    UserAPI = class extends AbstractAPI {
      static {
        __name(this, "UserAPI");
      }
      static {
        __name2(this, "UserAPI");
      }
      async getUserList(params = {}) {
        const { limit, offset, orderBy, ...userCountParams } = params;
        const [data, totalCount] = await Promise.all([
          this.request({
            method: "GET",
            path: basePath28,
            queryParams: params
          }),
          this.getCount(userCountParams)
        ]);
        return { data, totalCount };
      }
      async getUser(userId) {
        this.requireId(userId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath28, userId)
        });
      }
      async createUser(params) {
        return this.request({
          method: "POST",
          path: basePath28,
          bodyParams: params
        });
      }
      async updateUser(userId, params = {}) {
        this.requireId(userId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath28, userId),
          bodyParams: params
        });
      }
      async updateUserProfileImage(userId, params) {
        this.requireId(userId);
        const formData = new runtime.FormData();
        formData.append("file", params?.file);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "profile_image"),
          formData
        });
      }
      async updateUserMetadata(userId, params) {
        this.requireId(userId);
        return this.request({
          method: "PATCH",
          path: joinPaths(basePath28, userId, "metadata"),
          bodyParams: params
        });
      }
      async deleteUser(userId) {
        this.requireId(userId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath28, userId)
        });
      }
      async getCount(params = {}) {
        return this.request({
          method: "GET",
          path: joinPaths(basePath28, "count"),
          queryParams: params
        });
      }
      async getUserOauthAccessToken(userId, provider) {
        this.requireId(userId);
        const hasPrefix = provider.startsWith("oauth_");
        const _provider = hasPrefix ? provider : `oauth_${provider}`;
        if (hasPrefix) {
          deprecated(
            "getUserOauthAccessToken(userId, provider)",
            "Remove the `oauth_` prefix from the `provider` argument."
          );
        }
        return this.request({
          method: "GET",
          path: joinPaths(basePath28, userId, "oauth_access_tokens", _provider),
          queryParams: { paginated: true }
        });
      }
      async disableUserMFA(userId) {
        this.requireId(userId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath28, userId, "mfa")
        });
      }
      async getOrganizationMembershipList(params) {
        const { userId, limit, offset } = params;
        this.requireId(userId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath28, userId, "organization_memberships"),
          queryParams: { limit, offset }
        });
      }
      async getOrganizationInvitationList(params) {
        const { userId, ...queryParams } = params;
        this.requireId(userId);
        return this.request({
          method: "GET",
          path: joinPaths(basePath28, userId, "organization_invitations"),
          queryParams
        });
      }
      async verifyPassword(params) {
        const { userId, password } = params;
        this.requireId(userId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "verify_password"),
          bodyParams: { password }
        });
      }
      async verifyTOTP(params) {
        const { userId, code } = params;
        this.requireId(userId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "verify_totp"),
          bodyParams: { code }
        });
      }
      async banUser(userId) {
        this.requireId(userId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "ban")
        });
      }
      async unbanUser(userId) {
        this.requireId(userId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "unban")
        });
      }
      async lockUser(userId) {
        this.requireId(userId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "lock")
        });
      }
      async unlockUser(userId) {
        this.requireId(userId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "unlock")
        });
      }
      async deleteUserProfileImage(userId) {
        this.requireId(userId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath28, userId, "profile_image")
        });
      }
      async deleteUserPasskey(params) {
        this.requireId(params.userId);
        this.requireId(params.passkeyIdentificationId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath28, params.userId, "passkeys", params.passkeyIdentificationId)
        });
      }
      async deleteUserWeb3Wallet(params) {
        this.requireId(params.userId);
        this.requireId(params.web3WalletIdentificationId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath28, params.userId, "web3_wallets", params.web3WalletIdentificationId)
        });
      }
      async deleteUserExternalAccount(params) {
        this.requireId(params.userId);
        this.requireId(params.externalAccountId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath28, params.userId, "external_accounts", params.externalAccountId)
        });
      }
      async deleteUserBackupCodes(userId) {
        this.requireId(userId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath28, userId, "backup_code")
        });
      }
      async deleteUserTOTP(userId) {
        this.requireId(userId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath28, userId, "totp")
        });
      }
      async setPasswordCompromised(userId, params = {
        revokeAllSessions: false
      }) {
        this.requireId(userId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "password", "set_compromised"),
          bodyParams: params
        });
      }
      async unsetPasswordCompromised(userId) {
        this.requireId(userId);
        return this.request({
          method: "POST",
          path: joinPaths(basePath28, userId, "password", "unset_compromised")
        });
      }
    };
    basePath29 = "/waitlist_entries";
    WaitlistEntryAPI = class extends AbstractAPI {
      static {
        __name(this, "WaitlistEntryAPI");
      }
      static {
        __name2(this, "WaitlistEntryAPI");
      }
      /**
       * List waitlist entries.
       * @param params Optional parameters (e.g., `query`, `status`, `orderBy`).
       */
      async list(params = {}) {
        return this.request({
          method: "GET",
          path: basePath29,
          queryParams: params
        });
      }
      /**
       * Create a waitlist entry.
       * @param params The parameters for creating a waitlist entry.
       */
      async create(params) {
        return this.request({
          method: "POST",
          path: basePath29,
          bodyParams: params
        });
      }
      /**
       * Bulk create waitlist entries.
       * @param params An array of parameters for creating waitlist entries.
       */
      async createBulk(params) {
        return this.request({
          method: "POST",
          path: joinPaths(basePath29, "bulk"),
          bodyParams: params
        });
      }
      /**
       * Invite a waitlist entry.
       * @param id The waitlist entry ID.
       * @param params Optional parameters (e.g., `ignoreExisting`).
       */
      async invite(id, params = {}) {
        this.requireId(id);
        return this.request({
          method: "POST",
          path: joinPaths(basePath29, id, "invite"),
          bodyParams: params
        });
      }
      /**
       * Reject a waitlist entry.
       * @param id The waitlist entry ID.
       */
      async reject(id) {
        this.requireId(id);
        return this.request({
          method: "POST",
          path: joinPaths(basePath29, id, "reject")
        });
      }
      /**
       * Delete a waitlist entry.
       * @param id The waitlist entry ID.
       */
      async delete(id) {
        this.requireId(id);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath29, id)
        });
      }
    };
    basePath30 = "/webhooks";
    WebhookAPI = class extends AbstractAPI {
      static {
        __name(this, "WebhookAPI");
      }
      static {
        __name2(this, "WebhookAPI");
      }
      async createSvixApp() {
        return this.request({
          method: "POST",
          path: joinPaths(basePath30, "svix")
        });
      }
      async generateSvixAuthURL() {
        return this.request({
          method: "POST",
          path: joinPaths(basePath30, "svix_url")
        });
      }
      async deleteSvixApp() {
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath30, "svix")
        });
      }
    };
    basePath31 = "/billing";
    organizationBasePath = "/organizations";
    userBasePath = "/users";
    BillingAPI = class extends AbstractAPI {
      static {
        __name(this, "BillingAPI");
      }
      static {
        __name2(this, "BillingAPI");
      }
      /**
       * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
       */
      async getPlanList(params) {
        return this.request({
          method: "GET",
          path: joinPaths(basePath31, "plans"),
          queryParams: params
        });
      }
      /**
       * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
       */
      async cancelSubscriptionItem(subscriptionItemId, params) {
        this.requireId(subscriptionItemId);
        return this.request({
          method: "DELETE",
          path: joinPaths(basePath31, "subscription_items", subscriptionItemId),
          queryParams: params
        });
      }
      /**
       * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
       */
      async extendSubscriptionItemFreeTrial(subscriptionItemId, params) {
        this.requireId(subscriptionItemId);
        return this.request({
          method: "POST",
          path: joinPaths("/billing", "subscription_items", subscriptionItemId, "extend_free_trial"),
          bodyParams: params
        });
      }
      /**
       * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
       */
      async getOrganizationBillingSubscription(organizationId) {
        this.requireId(organizationId);
        return this.request({
          method: "GET",
          path: joinPaths(organizationBasePath, organizationId, "billing", "subscription")
        });
      }
      /**
       * @experimental This is an experimental API for the Billing feature that is available under a public beta, and the API is subject to change. It is advised to [pin](https://clerk.com/docs/pinning) the SDK version and the clerk-js version to avoid breaking changes.
       */
      async getUserBillingSubscription(userId) {
        this.requireId(userId);
        return this.request({
          method: "GET",
          path: joinPaths(userBasePath, userId, "billing", "subscription")
        });
      }
    };
    isObject = /* @__PURE__ */ __name2((value) => typeof value === "object" && value !== null, "isObject");
    isObjectCustom = /* @__PURE__ */ __name2((value) => isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date) && !(globalThis.Blob && value instanceof globalThis.Blob), "isObjectCustom");
    mapObjectSkip = /* @__PURE__ */ Symbol("mapObjectSkip");
    _mapObject = /* @__PURE__ */ __name2((object, mapper, options, isSeen = /* @__PURE__ */ new WeakMap()) => {
      options = {
        deep: false,
        target: {},
        ...options
      };
      if (isSeen.has(object)) {
        return isSeen.get(object);
      }
      isSeen.set(object, options.target);
      const { target } = options;
      delete options.target;
      const mapArray = /* @__PURE__ */ __name2((array) => array.map((element) => isObjectCustom(element) ? _mapObject(element, mapper, options, isSeen) : element), "mapArray");
      if (Array.isArray(object)) {
        return mapArray(object);
      }
      for (const [key, value] of Object.entries(object)) {
        const mapResult = mapper(key, value, object);
        if (mapResult === mapObjectSkip) {
          continue;
        }
        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
        if (newKey === "__proto__") {
          continue;
        }
        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
          newValue = Array.isArray(newValue) ? mapArray(newValue) : _mapObject(newValue, mapper, options, isSeen);
        }
        target[newKey] = newValue;
      }
      return target;
    }, "_mapObject");
    __name2(mapObject, "mapObject");
    SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
    SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
    SPLIT_SEPARATE_NUMBER_RE = /(\d)\p{Ll}|(\p{L})\d/u;
    DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
    SPLIT_REPLACE_VALUE = "$1\0$2";
    DEFAULT_PREFIX_SUFFIX_CHARACTERS = "";
    __name2(split, "split");
    __name2(splitSeparateNumbers, "splitSeparateNumbers");
    __name2(noCase, "noCase");
    __name2(snakeCase, "snakeCase");
    __name2(lowerFactory, "lowerFactory");
    __name2(splitPrefixSuffix, "splitPrefixSuffix");
    PlainObjectConstructor = {}.constructor;
    __name2(snakecaseKeys, "snakecaseKeys");
    __name2(matches, "matches");
    __name2(mapperOptions, "mapperOptions");
    snakecase_keys_default = snakecaseKeys;
    AccountlessApplication = class _AccountlessApplication {
      static {
        __name(this, "_AccountlessApplication");
      }
      static {
        __name2(this, "_AccountlessApplication");
      }
      constructor(publishableKey, secretKey, claimUrl, apiKeysUrl) {
        this.publishableKey = publishableKey;
        this.secretKey = secretKey;
        this.claimUrl = claimUrl;
        this.apiKeysUrl = apiKeysUrl;
      }
      static fromJSON(data) {
        return new _AccountlessApplication(data.publishable_key, data.secret_key, data.claim_url, data.api_keys_url);
      }
    };
    AgentTask = class _AgentTask {
      static {
        __name(this, "_AgentTask");
      }
      static {
        __name2(this, "_AgentTask");
      }
      constructor(agentId, taskId, url) {
        this.agentId = agentId;
        this.taskId = taskId;
        this.url = url;
      }
      /**
       * Creates a AgentTask instance from a JSON object.
       *
       * @param data - The JSON object containing agent task data
       * @returns A new AgentTask instance
       */
      static fromJSON(data) {
        return new _AgentTask(data.agent_id, data.task_id, data.url);
      }
    };
    ActorToken = class _ActorToken {
      static {
        __name(this, "_ActorToken");
      }
      static {
        __name2(this, "_ActorToken");
      }
      constructor(id, status, userId, actor, token, url, createdAt, updatedAt) {
        this.id = id;
        this.status = status;
        this.userId = userId;
        this.actor = actor;
        this.token = token;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      }
      static fromJSON(data) {
        return new _ActorToken(
          data.id,
          data.status,
          data.user_id,
          data.actor,
          data.token,
          data.url,
          data.created_at,
          data.updated_at
        );
      }
    };
    AllowlistIdentifier = class _AllowlistIdentifier {
      static {
        __name(this, "_AllowlistIdentifier");
      }
      static {
        __name2(this, "_AllowlistIdentifier");
      }
      constructor(id, identifier, identifierType, createdAt, updatedAt, instanceId, invitationId) {
        this.id = id;
        this.identifier = identifier;
        this.identifierType = identifierType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.instanceId = instanceId;
        this.invitationId = invitationId;
      }
      static fromJSON(data) {
        return new _AllowlistIdentifier(
          data.id,
          data.identifier,
          data.identifier_type,
          data.created_at,
          data.updated_at,
          data.instance_id,
          data.invitation_id
        );
      }
    };
    APIKey = class _APIKey {
      static {
        __name(this, "_APIKey");
      }
      static {
        __name2(this, "_APIKey");
      }
      constructor(id, type, name, subject, scopes, claims, revoked, revocationReason, expired, expiration, createdBy, description, lastUsedAt, createdAt, updatedAt, secret) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.subject = subject;
        this.scopes = scopes;
        this.claims = claims;
        this.revoked = revoked;
        this.revocationReason = revocationReason;
        this.expired = expired;
        this.expiration = expiration;
        this.createdBy = createdBy;
        this.description = description;
        this.lastUsedAt = lastUsedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.secret = secret;
      }
      static fromJSON(data) {
        return new _APIKey(
          data.id,
          data.type,
          data.name,
          data.subject,
          data.scopes,
          data.claims,
          data.revoked,
          data.revocation_reason,
          data.expired,
          data.expiration,
          data.created_by,
          data.description,
          data.last_used_at,
          data.created_at,
          data.updated_at,
          data.secret
        );
      }
    };
    BlocklistIdentifier = class _BlocklistIdentifier {
      static {
        __name(this, "_BlocklistIdentifier");
      }
      static {
        __name2(this, "_BlocklistIdentifier");
      }
      constructor(id, identifier, identifierType, createdAt, updatedAt, instanceId) {
        this.id = id;
        this.identifier = identifier;
        this.identifierType = identifierType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.instanceId = instanceId;
      }
      static fromJSON(data) {
        return new _BlocklistIdentifier(
          data.id,
          data.identifier,
          data.identifier_type,
          data.created_at,
          data.updated_at,
          data.instance_id
        );
      }
    };
    SessionActivity = class _SessionActivity {
      static {
        __name(this, "_SessionActivity");
      }
      static {
        __name2(this, "_SessionActivity");
      }
      constructor(id, isMobile, ipAddress, city, country, browserVersion, browserName, deviceType) {
        this.id = id;
        this.isMobile = isMobile;
        this.ipAddress = ipAddress;
        this.city = city;
        this.country = country;
        this.browserVersion = browserVersion;
        this.browserName = browserName;
        this.deviceType = deviceType;
      }
      static fromJSON(data) {
        return new _SessionActivity(
          data.id,
          data.is_mobile,
          data.ip_address,
          data.city,
          data.country,
          data.browser_version,
          data.browser_name,
          data.device_type
        );
      }
    };
    Session = class _Session {
      static {
        __name(this, "_Session");
      }
      static {
        __name2(this, "_Session");
      }
      constructor(id, clientId, userId, status, lastActiveAt, expireAt, abandonAt, createdAt, updatedAt, lastActiveOrganizationId, latestActivity, actor = null) {
        this.id = id;
        this.clientId = clientId;
        this.userId = userId;
        this.status = status;
        this.lastActiveAt = lastActiveAt;
        this.expireAt = expireAt;
        this.abandonAt = abandonAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.lastActiveOrganizationId = lastActiveOrganizationId;
        this.latestActivity = latestActivity;
        this.actor = actor;
      }
      static fromJSON(data) {
        return new _Session(
          data.id,
          data.client_id,
          data.user_id,
          data.status,
          data.last_active_at,
          data.expire_at,
          data.abandon_at,
          data.created_at,
          data.updated_at,
          data.last_active_organization_id,
          data.latest_activity && SessionActivity.fromJSON(data.latest_activity),
          data.actor
        );
      }
    };
    Client = class _Client {
      static {
        __name(this, "_Client");
      }
      static {
        __name2(this, "_Client");
      }
      constructor(id, sessionIds, sessions, signInId, signUpId, lastActiveSessionId, lastAuthenticationStrategy, createdAt, updatedAt) {
        this.id = id;
        this.sessionIds = sessionIds;
        this.sessions = sessions;
        this.signInId = signInId;
        this.signUpId = signUpId;
        this.lastActiveSessionId = lastActiveSessionId;
        this.lastAuthenticationStrategy = lastAuthenticationStrategy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      }
      static fromJSON(data) {
        return new _Client(
          data.id,
          data.session_ids,
          data.sessions.map((x) => Session.fromJSON(x)),
          data.sign_in_id,
          data.sign_up_id,
          data.last_active_session_id,
          data.last_authentication_strategy,
          data.created_at,
          data.updated_at
        );
      }
    };
    CnameTarget = class _CnameTarget {
      static {
        __name(this, "_CnameTarget");
      }
      static {
        __name2(this, "_CnameTarget");
      }
      constructor(host, value, required) {
        this.host = host;
        this.value = value;
        this.required = required;
      }
      static fromJSON(data) {
        return new _CnameTarget(data.host, data.value, data.required);
      }
    };
    Cookies2 = class _Cookies {
      static {
        __name(this, "_Cookies");
      }
      static {
        __name2(this, "_Cookies");
      }
      constructor(cookies) {
        this.cookies = cookies;
      }
      static fromJSON(data) {
        return new _Cookies(data.cookies);
      }
    };
    DeletedObject = class _DeletedObject {
      static {
        __name(this, "_DeletedObject");
      }
      static {
        __name2(this, "_DeletedObject");
      }
      constructor(object, id, slug, deleted) {
        this.object = object;
        this.id = id;
        this.slug = slug;
        this.deleted = deleted;
      }
      static fromJSON(data) {
        return new _DeletedObject(data.object, data.id || null, data.slug || null, data.deleted);
      }
    };
    Domain = class _Domain {
      static {
        __name(this, "_Domain");
      }
      static {
        __name2(this, "_Domain");
      }
      constructor(id, name, isSatellite, frontendApiUrl, developmentOrigin, cnameTargets, accountsPortalUrl, proxyUrl) {
        this.id = id;
        this.name = name;
        this.isSatellite = isSatellite;
        this.frontendApiUrl = frontendApiUrl;
        this.developmentOrigin = developmentOrigin;
        this.cnameTargets = cnameTargets;
        this.accountsPortalUrl = accountsPortalUrl;
        this.proxyUrl = proxyUrl;
      }
      static fromJSON(data) {
        return new _Domain(
          data.id,
          data.name,
          data.is_satellite,
          data.frontend_api_url,
          data.development_origin,
          data.cname_targets && data.cname_targets.map((x) => CnameTarget.fromJSON(x)),
          data.accounts_portal_url,
          data.proxy_url
        );
      }
    };
    Email = class _Email {
      static {
        __name(this, "_Email");
      }
      static {
        __name2(this, "_Email");
      }
      constructor(id, fromEmailName, emailAddressId, toEmailAddress, subject, body, bodyPlain, status, slug, data, deliveredByClerk) {
        this.id = id;
        this.fromEmailName = fromEmailName;
        this.emailAddressId = emailAddressId;
        this.toEmailAddress = toEmailAddress;
        this.subject = subject;
        this.body = body;
        this.bodyPlain = bodyPlain;
        this.status = status;
        this.slug = slug;
        this.data = data;
        this.deliveredByClerk = deliveredByClerk;
      }
      static fromJSON(data) {
        return new _Email(
          data.id,
          data.from_email_name,
          data.email_address_id,
          data.to_email_address,
          data.subject,
          data.body,
          data.body_plain,
          data.status,
          data.slug,
          data.data,
          data.delivered_by_clerk
        );
      }
    };
    IdentificationLink = class _IdentificationLink {
      static {
        __name(this, "_IdentificationLink");
      }
      static {
        __name2(this, "_IdentificationLink");
      }
      constructor(id, type) {
        this.id = id;
        this.type = type;
      }
      static fromJSON(data) {
        return new _IdentificationLink(data.id, data.type);
      }
    };
    Verification = class _Verification {
      static {
        __name(this, "_Verification");
      }
      static {
        __name2(this, "_Verification");
      }
      constructor(status, strategy, externalVerificationRedirectURL = null, attempts = null, expireAt = null, nonce = null, message = null) {
        this.status = status;
        this.strategy = strategy;
        this.externalVerificationRedirectURL = externalVerificationRedirectURL;
        this.attempts = attempts;
        this.expireAt = expireAt;
        this.nonce = nonce;
        this.message = message;
      }
      static fromJSON(data) {
        return new _Verification(
          data.status,
          data.strategy,
          data.external_verification_redirect_url ? new URL(data.external_verification_redirect_url) : null,
          data.attempts,
          data.expire_at,
          data.nonce
        );
      }
    };
    EmailAddress = class _EmailAddress {
      static {
        __name(this, "_EmailAddress");
      }
      static {
        __name2(this, "_EmailAddress");
      }
      constructor(id, emailAddress, verification, linkedTo) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.verification = verification;
        this.linkedTo = linkedTo;
      }
      static fromJSON(data) {
        return new _EmailAddress(
          data.id,
          data.email_address,
          data.verification && Verification.fromJSON(data.verification),
          data.linked_to.map((link) => IdentificationLink.fromJSON(link))
        );
      }
    };
    ExternalAccount = class _ExternalAccount {
      static {
        __name(this, "_ExternalAccount");
      }
      static {
        __name2(this, "_ExternalAccount");
      }
      constructor(id, provider, providerUserId, identificationId, externalId, approvedScopes, emailAddress, firstName, lastName, imageUrl, username, phoneNumber, publicMetadata = {}, label, verification) {
        this.id = id;
        this.provider = provider;
        this.providerUserId = providerUserId;
        this.identificationId = identificationId;
        this.externalId = externalId;
        this.approvedScopes = approvedScopes;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.publicMetadata = publicMetadata;
        this.label = label;
        this.verification = verification;
      }
      static fromJSON(data) {
        return new _ExternalAccount(
          data.id,
          data.provider,
          data.provider_user_id,
          data.identification_id,
          data.provider_user_id,
          data.approved_scopes,
          data.email_address,
          data.first_name,
          data.last_name,
          data.image_url || "",
          data.username,
          data.phone_number,
          data.public_metadata,
          data.label,
          data.verification && Verification.fromJSON(data.verification)
        );
      }
    };
    Instance = class _Instance {
      static {
        __name(this, "_Instance");
      }
      static {
        __name2(this, "_Instance");
      }
      constructor(id, environmentType, allowedOrigins) {
        this.id = id;
        this.environmentType = environmentType;
        this.allowedOrigins = allowedOrigins;
      }
      static fromJSON(data) {
        return new _Instance(data.id, data.environment_type, data.allowed_origins);
      }
    };
    InstanceRestrictions = class _InstanceRestrictions {
      static {
        __name(this, "_InstanceRestrictions");
      }
      static {
        __name2(this, "_InstanceRestrictions");
      }
      constructor(allowlist, blocklist, blockEmailSubaddresses, blockDisposableEmailDomains, ignoreDotsForGmailAddresses) {
        this.allowlist = allowlist;
        this.blocklist = blocklist;
        this.blockEmailSubaddresses = blockEmailSubaddresses;
        this.blockDisposableEmailDomains = blockDisposableEmailDomains;
        this.ignoreDotsForGmailAddresses = ignoreDotsForGmailAddresses;
      }
      static fromJSON(data) {
        return new _InstanceRestrictions(
          data.allowlist,
          data.blocklist,
          data.block_email_subaddresses,
          data.block_disposable_email_domains,
          data.ignore_dots_for_gmail_addresses
        );
      }
    };
    InstanceSettings = class _InstanceSettings {
      static {
        __name(this, "_InstanceSettings");
      }
      static {
        __name2(this, "_InstanceSettings");
      }
      constructor(id, restrictedToAllowlist, fromEmailAddress, progressiveSignUp, enhancedEmailDeliverability) {
        this.id = id;
        this.restrictedToAllowlist = restrictedToAllowlist;
        this.fromEmailAddress = fromEmailAddress;
        this.progressiveSignUp = progressiveSignUp;
        this.enhancedEmailDeliverability = enhancedEmailDeliverability;
      }
      static fromJSON(data) {
        return new _InstanceSettings(
          data.id,
          data.restricted_to_allowlist,
          data.from_email_address,
          data.progressive_sign_up,
          data.enhanced_email_deliverability
        );
      }
    };
    Invitation = class _Invitation {
      static {
        __name(this, "_Invitation");
      }
      static {
        __name2(this, "_Invitation");
      }
      constructor(id, emailAddress, publicMetadata, createdAt, updatedAt, status, url, revoked) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.publicMetadata = publicMetadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.url = url;
        this.revoked = revoked;
        this._raw = null;
      }
      get raw() {
        return this._raw;
      }
      static fromJSON(data) {
        const res = new _Invitation(
          data.id,
          data.email_address,
          data.public_metadata,
          data.created_at,
          data.updated_at,
          data.status,
          data.url,
          data.revoked
        );
        res._raw = data;
        return res;
      }
    };
    ObjectType = {
      AccountlessApplication: "accountless_application",
      ActorToken: "actor_token",
      AgentTask: "agent_task",
      AllowlistIdentifier: "allowlist_identifier",
      ApiKey: "api_key",
      BlocklistIdentifier: "blocklist_identifier",
      Client: "client",
      Cookies: "cookies",
      Domain: "domain",
      Email: "email",
      EmailAddress: "email_address",
      ExternalAccount: "external_account",
      FacebookAccount: "facebook_account",
      GoogleAccount: "google_account",
      Instance: "instance",
      InstanceRestrictions: "instance_restrictions",
      InstanceSettings: "instance_settings",
      Invitation: "invitation",
      Machine: "machine",
      MachineScope: "machine_scope",
      MachineSecretKey: "machine_secret_key",
      M2MToken: "machine_to_machine_token",
      JwtTemplate: "jwt_template",
      OauthAccessToken: "oauth_access_token",
      IdpOAuthAccessToken: "clerk_idp_oauth_access_token",
      OAuthApplication: "oauth_application",
      Organization: "organization",
      OrganizationDomain: "organization_domain",
      OrganizationInvitation: "organization_invitation",
      OrganizationMembership: "organization_membership",
      OrganizationSettings: "organization_settings",
      PhoneNumber: "phone_number",
      ProxyCheck: "proxy_check",
      RedirectUrl: "redirect_url",
      SamlAccount: "saml_account",
      SamlConnection: "saml_connection",
      Session: "session",
      SignInAttempt: "sign_in_attempt",
      SignInToken: "sign_in_token",
      SignUpAttempt: "sign_up_attempt",
      SmsMessage: "sms_message",
      User: "user",
      WaitlistEntry: "waitlist_entry",
      Web3Wallet: "web3_wallet",
      Token: "token",
      TotalCount: "total_count",
      TestingToken: "testing_token",
      Role: "role",
      Permission: "permission",
      BillingPayer: "commerce_payer",
      BillingPaymentAttempt: "commerce_payment_attempt",
      BillingSubscription: "commerce_subscription",
      BillingSubscriptionItem: "commerce_subscription_item",
      BillingPlan: "commerce_plan",
      Feature: "feature"
    };
    Machine = class _Machine {
      static {
        __name(this, "_Machine");
      }
      static {
        __name2(this, "_Machine");
      }
      constructor(id, name, instanceId, createdAt, updatedAt, scopedMachines, defaultTokenTtl, secretKey) {
        this.id = id;
        this.name = name;
        this.instanceId = instanceId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.scopedMachines = scopedMachines;
        this.defaultTokenTtl = defaultTokenTtl;
        this.secretKey = secretKey;
      }
      static fromJSON(data) {
        return new _Machine(
          data.id,
          data.name,
          data.instance_id,
          data.created_at,
          data.updated_at,
          data.scoped_machines.map(
            (m) => new _Machine(
              m.id,
              m.name,
              m.instance_id,
              m.created_at,
              m.updated_at,
              [],
              // Nested machines don't have scoped_machines
              m.default_token_ttl
            )
          ),
          data.default_token_ttl,
          data.secret_key
        );
      }
    };
    MachineScope = class _MachineScope {
      static {
        __name(this, "_MachineScope");
      }
      static {
        __name2(this, "_MachineScope");
      }
      constructor(fromMachineId, toMachineId, createdAt, deleted) {
        this.fromMachineId = fromMachineId;
        this.toMachineId = toMachineId;
        this.createdAt = createdAt;
        this.deleted = deleted;
      }
      static fromJSON(data) {
        return new _MachineScope(data.from_machine_id, data.to_machine_id, data.created_at, data.deleted);
      }
    };
    MachineSecretKey = class _MachineSecretKey {
      static {
        __name(this, "_MachineSecretKey");
      }
      static {
        __name2(this, "_MachineSecretKey");
      }
      constructor(secret) {
        this.secret = secret;
      }
      static fromJSON(data) {
        return new _MachineSecretKey(data.secret);
      }
    };
    JwtTemplate = class _JwtTemplate {
      static {
        __name(this, "_JwtTemplate");
      }
      static {
        __name2(this, "_JwtTemplate");
      }
      constructor(id, name, claims, lifetime, allowedClockSkew, customSigningKey, signingAlgorithm, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.claims = claims;
        this.lifetime = lifetime;
        this.allowedClockSkew = allowedClockSkew;
        this.customSigningKey = customSigningKey;
        this.signingAlgorithm = signingAlgorithm;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      }
      static fromJSON(data) {
        return new _JwtTemplate(
          data.id,
          data.name,
          data.claims,
          data.lifetime,
          data.allowed_clock_skew,
          data.custom_signing_key,
          data.signing_algorithm,
          data.created_at,
          data.updated_at
        );
      }
    };
    OauthAccessToken = class _OauthAccessToken {
      static {
        __name(this, "_OauthAccessToken");
      }
      static {
        __name2(this, "_OauthAccessToken");
      }
      constructor(externalAccountId, provider, token, publicMetadata = {}, label, scopes, tokenSecret, expiresAt, idToken) {
        this.externalAccountId = externalAccountId;
        this.provider = provider;
        this.token = token;
        this.publicMetadata = publicMetadata;
        this.label = label;
        this.scopes = scopes;
        this.tokenSecret = tokenSecret;
        this.expiresAt = expiresAt;
        this.idToken = idToken;
      }
      static fromJSON(data) {
        return new _OauthAccessToken(
          data.external_account_id,
          data.provider,
          data.token,
          data.public_metadata,
          data.label || "",
          data.scopes,
          data.token_secret,
          data.expires_at,
          data.id_token
        );
      }
    };
    OAuthApplication = class _OAuthApplication {
      static {
        __name(this, "_OAuthApplication");
      }
      static {
        __name2(this, "_OAuthApplication");
      }
      constructor(id, instanceId, name, clientId, clientUri, clientImageUrl, dynamicallyRegistered, consentScreenEnabled, pkceRequired, isPublic, scopes, redirectUris, authorizeUrl, tokenFetchUrl, userInfoUrl, discoveryUrl, tokenIntrospectionUrl, createdAt, updatedAt, clientSecret) {
        this.id = id;
        this.instanceId = instanceId;
        this.name = name;
        this.clientId = clientId;
        this.clientUri = clientUri;
        this.clientImageUrl = clientImageUrl;
        this.dynamicallyRegistered = dynamicallyRegistered;
        this.consentScreenEnabled = consentScreenEnabled;
        this.pkceRequired = pkceRequired;
        this.isPublic = isPublic;
        this.scopes = scopes;
        this.redirectUris = redirectUris;
        this.authorizeUrl = authorizeUrl;
        this.tokenFetchUrl = tokenFetchUrl;
        this.userInfoUrl = userInfoUrl;
        this.discoveryUrl = discoveryUrl;
        this.tokenIntrospectionUrl = tokenIntrospectionUrl;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.clientSecret = clientSecret;
      }
      static fromJSON(data) {
        return new _OAuthApplication(
          data.id,
          data.instance_id,
          data.name,
          data.client_id,
          data.client_uri,
          data.client_image_url,
          data.dynamically_registered,
          data.consent_screen_enabled,
          data.pkce_required,
          data.public,
          data.scopes,
          data.redirect_uris,
          data.authorize_url,
          data.token_fetch_url,
          data.user_info_url,
          data.discovery_url,
          data.token_introspection_url,
          data.created_at,
          data.updated_at,
          data.client_secret
        );
      }
    };
    Organization = class _Organization {
      static {
        __name(this, "_Organization");
      }
      static {
        __name2(this, "_Organization");
      }
      constructor(id, name, slug, imageUrl, hasImage, createdAt, updatedAt, publicMetadata = {}, privateMetadata = {}, maxAllowedMemberships, adminDeleteEnabled, membersCount, createdBy) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.maxAllowedMemberships = maxAllowedMemberships;
        this.adminDeleteEnabled = adminDeleteEnabled;
        this.membersCount = membersCount;
        this.createdBy = createdBy;
        this._raw = null;
      }
      get raw() {
        return this._raw;
      }
      static fromJSON(data) {
        const res = new _Organization(
          data.id,
          data.name,
          data.slug,
          data.image_url || "",
          data.has_image,
          data.created_at,
          data.updated_at,
          data.public_metadata,
          data.private_metadata,
          data.max_allowed_memberships,
          data.admin_delete_enabled,
          data.members_count,
          data.created_by
        );
        res._raw = data;
        return res;
      }
    };
    OrganizationInvitation = class _OrganizationInvitation {
      static {
        __name(this, "_OrganizationInvitation");
      }
      static {
        __name2(this, "_OrganizationInvitation");
      }
      constructor(id, emailAddress, role, roleName, organizationId, createdAt, updatedAt, expiresAt, url, status, publicMetadata = {}, privateMetadata = {}, publicOrganizationData) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.role = role;
        this.roleName = roleName;
        this.organizationId = organizationId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.expiresAt = expiresAt;
        this.url = url;
        this.status = status;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.publicOrganizationData = publicOrganizationData;
        this._raw = null;
      }
      get raw() {
        return this._raw;
      }
      static fromJSON(data) {
        const res = new _OrganizationInvitation(
          data.id,
          data.email_address,
          data.role,
          data.role_name,
          data.organization_id,
          data.created_at,
          data.updated_at,
          data.expires_at,
          data.url,
          data.status,
          data.public_metadata,
          data.private_metadata,
          data.public_organization_data
        );
        res._raw = data;
        return res;
      }
    };
    OrganizationMembership = class _OrganizationMembership {
      static {
        __name(this, "_OrganizationMembership");
      }
      static {
        __name2(this, "_OrganizationMembership");
      }
      constructor(id, role, permissions, publicMetadata = {}, privateMetadata = {}, createdAt, updatedAt, organization, publicUserData) {
        this.id = id;
        this.role = role;
        this.permissions = permissions;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.organization = organization;
        this.publicUserData = publicUserData;
        this._raw = null;
      }
      get raw() {
        return this._raw;
      }
      static fromJSON(data) {
        const res = new _OrganizationMembership(
          data.id,
          data.role,
          data.permissions,
          data.public_metadata,
          data.private_metadata,
          data.created_at,
          data.updated_at,
          Organization.fromJSON(data.organization),
          OrganizationMembershipPublicUserData.fromJSON(data.public_user_data)
        );
        res._raw = data;
        return res;
      }
    };
    OrganizationMembershipPublicUserData = class _OrganizationMembershipPublicUserData {
      static {
        __name(this, "_OrganizationMembershipPublicUserData");
      }
      static {
        __name2(this, "_OrganizationMembershipPublicUserData");
      }
      constructor(identifier, firstName, lastName, imageUrl, hasImage, userId) {
        this.identifier = identifier;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.userId = userId;
      }
      static fromJSON(data) {
        return new _OrganizationMembershipPublicUserData(
          data.identifier,
          data.first_name,
          data.last_name,
          data.image_url,
          data.has_image,
          data.user_id
        );
      }
    };
    OrganizationSettings = class _OrganizationSettings {
      static {
        __name(this, "_OrganizationSettings");
      }
      static {
        __name2(this, "_OrganizationSettings");
      }
      constructor(enabled, maxAllowedMemberships, maxAllowedRoles, maxAllowedPermissions, creatorRole, adminDeleteEnabled, domainsEnabled, slugDisabled, domainsEnrollmentModes, domainsDefaultRole) {
        this.enabled = enabled;
        this.maxAllowedMemberships = maxAllowedMemberships;
        this.maxAllowedRoles = maxAllowedRoles;
        this.maxAllowedPermissions = maxAllowedPermissions;
        this.creatorRole = creatorRole;
        this.adminDeleteEnabled = adminDeleteEnabled;
        this.domainsEnabled = domainsEnabled;
        this.slugDisabled = slugDisabled;
        this.domainsEnrollmentModes = domainsEnrollmentModes;
        this.domainsDefaultRole = domainsDefaultRole;
      }
      static fromJSON(data) {
        return new _OrganizationSettings(
          data.enabled,
          data.max_allowed_memberships,
          data.max_allowed_roles,
          data.max_allowed_permissions,
          data.creator_role,
          data.admin_delete_enabled,
          data.domains_enabled,
          data.slug_disabled,
          data.domains_enrollment_modes,
          data.domains_default_role
        );
      }
    };
    PhoneNumber = class _PhoneNumber {
      static {
        __name(this, "_PhoneNumber");
      }
      static {
        __name2(this, "_PhoneNumber");
      }
      constructor(id, phoneNumber, reservedForSecondFactor, defaultSecondFactor, verification, linkedTo) {
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.reservedForSecondFactor = reservedForSecondFactor;
        this.defaultSecondFactor = defaultSecondFactor;
        this.verification = verification;
        this.linkedTo = linkedTo;
      }
      static fromJSON(data) {
        return new _PhoneNumber(
          data.id,
          data.phone_number,
          data.reserved_for_second_factor,
          data.default_second_factor,
          data.verification && Verification.fromJSON(data.verification),
          data.linked_to.map((link) => IdentificationLink.fromJSON(link))
        );
      }
    };
    ProxyCheck = class _ProxyCheck {
      static {
        __name(this, "_ProxyCheck");
      }
      static {
        __name2(this, "_ProxyCheck");
      }
      constructor(id, domainId, lastRunAt, proxyUrl, successful, createdAt, updatedAt) {
        this.id = id;
        this.domainId = domainId;
        this.lastRunAt = lastRunAt;
        this.proxyUrl = proxyUrl;
        this.successful = successful;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      }
      static fromJSON(data) {
        return new _ProxyCheck(
          data.id,
          data.domain_id,
          data.last_run_at,
          data.proxy_url,
          data.successful,
          data.created_at,
          data.updated_at
        );
      }
    };
    RedirectUrl = class _RedirectUrl {
      static {
        __name(this, "_RedirectUrl");
      }
      static {
        __name2(this, "_RedirectUrl");
      }
      constructor(id, url, createdAt, updatedAt) {
        this.id = id;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      }
      static fromJSON(data) {
        return new _RedirectUrl(data.id, data.url, data.created_at, data.updated_at);
      }
    };
    SamlConnection = class _SamlConnection {
      static {
        __name(this, "_SamlConnection");
      }
      static {
        __name2(this, "_SamlConnection");
      }
      constructor(id, name, domain22, organizationId, idpEntityId, idpSsoUrl, idpCertificate, idpMetadataUrl, idpMetadata, acsUrl, spEntityId, spMetadataUrl, active, provider, userCount, syncUserAttributes, allowSubdomains, allowIdpInitiated, createdAt, updatedAt, attributeMapping) {
        this.id = id;
        this.name = name;
        this.domain = domain22;
        this.organizationId = organizationId;
        this.idpEntityId = idpEntityId;
        this.idpSsoUrl = idpSsoUrl;
        this.idpCertificate = idpCertificate;
        this.idpMetadataUrl = idpMetadataUrl;
        this.idpMetadata = idpMetadata;
        this.acsUrl = acsUrl;
        this.spEntityId = spEntityId;
        this.spMetadataUrl = spMetadataUrl;
        this.active = active;
        this.provider = provider;
        this.userCount = userCount;
        this.syncUserAttributes = syncUserAttributes;
        this.allowSubdomains = allowSubdomains;
        this.allowIdpInitiated = allowIdpInitiated;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.attributeMapping = attributeMapping;
      }
      static fromJSON(data) {
        return new _SamlConnection(
          data.id,
          data.name,
          data.domain,
          data.organization_id,
          data.idp_entity_id,
          data.idp_sso_url,
          data.idp_certificate,
          data.idp_metadata_url,
          data.idp_metadata,
          data.acs_url,
          data.sp_entity_id,
          data.sp_metadata_url,
          data.active,
          data.provider,
          data.user_count,
          data.sync_user_attributes,
          data.allow_subdomains,
          data.allow_idp_initiated,
          data.created_at,
          data.updated_at,
          data.attribute_mapping && AttributeMapping.fromJSON(data.attribute_mapping)
        );
      }
    };
    SamlAccountConnection = class _SamlAccountConnection {
      static {
        __name(this, "_SamlAccountConnection");
      }
      static {
        __name2(this, "_SamlAccountConnection");
      }
      constructor(id, name, domain22, active, provider, syncUserAttributes, allowSubdomains, allowIdpInitiated, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.domain = domain22;
        this.active = active;
        this.provider = provider;
        this.syncUserAttributes = syncUserAttributes;
        this.allowSubdomains = allowSubdomains;
        this.allowIdpInitiated = allowIdpInitiated;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      }
      static fromJSON(data) {
        return new _SamlAccountConnection(
          data.id,
          data.name,
          data.domain,
          data.active,
          data.provider,
          data.sync_user_attributes,
          data.allow_subdomains,
          data.allow_idp_initiated,
          data.created_at,
          data.updated_at
        );
      }
    };
    AttributeMapping = class _AttributeMapping {
      static {
        __name(this, "_AttributeMapping");
      }
      static {
        __name2(this, "_AttributeMapping");
      }
      constructor(userId, emailAddress, firstName, lastName) {
        this.userId = userId;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
      }
      static fromJSON(data) {
        return new _AttributeMapping(data.user_id, data.email_address, data.first_name, data.last_name);
      }
    };
    SamlAccount = class _SamlAccount {
      static {
        __name(this, "_SamlAccount");
      }
      static {
        __name2(this, "_SamlAccount");
      }
      constructor(id, provider, providerUserId, active, emailAddress, firstName, lastName, verification, samlConnection, lastAuthenticatedAt, enterpriseConnectionId) {
        this.id = id;
        this.provider = provider;
        this.providerUserId = providerUserId;
        this.active = active;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.verification = verification;
        this.samlConnection = samlConnection;
        this.lastAuthenticatedAt = lastAuthenticatedAt;
        this.enterpriseConnectionId = enterpriseConnectionId;
      }
      static fromJSON(data) {
        return new _SamlAccount(
          data.id,
          data.provider,
          data.provider_user_id,
          data.active,
          data.email_address,
          data.first_name,
          data.last_name,
          data.verification && Verification.fromJSON(data.verification),
          data.saml_connection && SamlAccountConnection.fromJSON(data.saml_connection),
          data.last_authenticated_at ?? null,
          data.enterprise_connection_id
        );
      }
    };
    SignInToken = class _SignInToken {
      static {
        __name(this, "_SignInToken");
      }
      static {
        __name2(this, "_SignInToken");
      }
      constructor(id, userId, token, status, url, createdAt, updatedAt) {
        this.id = id;
        this.userId = userId;
        this.token = token;
        this.status = status;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      }
      static fromJSON(data) {
        return new _SignInToken(data.id, data.user_id, data.token, data.status, data.url, data.created_at, data.updated_at);
      }
    };
    SignUpAttemptVerification = class _SignUpAttemptVerification {
      static {
        __name(this, "_SignUpAttemptVerification");
      }
      static {
        __name2(this, "_SignUpAttemptVerification");
      }
      constructor(nextAction, supportedStrategies) {
        this.nextAction = nextAction;
        this.supportedStrategies = supportedStrategies;
      }
      static fromJSON(data) {
        return new _SignUpAttemptVerification(data.next_action, data.supported_strategies);
      }
    };
    SignUpAttemptVerifications = class _SignUpAttemptVerifications {
      static {
        __name(this, "_SignUpAttemptVerifications");
      }
      static {
        __name2(this, "_SignUpAttemptVerifications");
      }
      constructor(emailAddress, phoneNumber, web3Wallet, externalAccount) {
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.web3Wallet = web3Wallet;
        this.externalAccount = externalAccount;
      }
      static fromJSON(data) {
        return new _SignUpAttemptVerifications(
          data.email_address && SignUpAttemptVerification.fromJSON(data.email_address),
          data.phone_number && SignUpAttemptVerification.fromJSON(data.phone_number),
          data.web3_wallet && SignUpAttemptVerification.fromJSON(data.web3_wallet),
          data.external_account
        );
      }
    };
    SignUpAttempt = class _SignUpAttempt {
      static {
        __name(this, "_SignUpAttempt");
      }
      static {
        __name2(this, "_SignUpAttempt");
      }
      constructor(id, status, requiredFields, optionalFields, missingFields, unverifiedFields, verifications, username, emailAddress, phoneNumber, web3Wallet, passwordEnabled, firstName, lastName, customAction, externalId, createdSessionId, createdUserId, abandonAt, legalAcceptedAt, publicMetadata, unsafeMetadata) {
        this.id = id;
        this.status = status;
        this.requiredFields = requiredFields;
        this.optionalFields = optionalFields;
        this.missingFields = missingFields;
        this.unverifiedFields = unverifiedFields;
        this.verifications = verifications;
        this.username = username;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.web3Wallet = web3Wallet;
        this.passwordEnabled = passwordEnabled;
        this.firstName = firstName;
        this.lastName = lastName;
        this.customAction = customAction;
        this.externalId = externalId;
        this.createdSessionId = createdSessionId;
        this.createdUserId = createdUserId;
        this.abandonAt = abandonAt;
        this.legalAcceptedAt = legalAcceptedAt;
        this.publicMetadata = publicMetadata;
        this.unsafeMetadata = unsafeMetadata;
      }
      static fromJSON(data) {
        return new _SignUpAttempt(
          data.id,
          data.status,
          data.required_fields,
          data.optional_fields,
          data.missing_fields,
          data.unverified_fields,
          data.verifications ? SignUpAttemptVerifications.fromJSON(data.verifications) : null,
          data.username,
          data.email_address,
          data.phone_number,
          data.web3_wallet,
          data.password_enabled,
          data.first_name,
          data.last_name,
          data.custom_action,
          data.external_id,
          data.created_session_id,
          data.created_user_id,
          data.abandon_at,
          data.legal_accepted_at,
          data.public_metadata,
          data.unsafe_metadata
        );
      }
    };
    SMSMessage = class _SMSMessage {
      static {
        __name(this, "_SMSMessage");
      }
      static {
        __name2(this, "_SMSMessage");
      }
      constructor(id, fromPhoneNumber, toPhoneNumber, message, status, phoneNumberId, data) {
        this.id = id;
        this.fromPhoneNumber = fromPhoneNumber;
        this.toPhoneNumber = toPhoneNumber;
        this.message = message;
        this.status = status;
        this.phoneNumberId = phoneNumberId;
        this.data = data;
      }
      static fromJSON(data) {
        return new _SMSMessage(
          data.id,
          data.from_phone_number,
          data.to_phone_number,
          data.message,
          data.status,
          data.phone_number_id,
          data.data
        );
      }
    };
    Token = class _Token {
      static {
        __name(this, "_Token");
      }
      static {
        __name2(this, "_Token");
      }
      constructor(jwt) {
        this.jwt = jwt;
      }
      static fromJSON(data) {
        return new _Token(data.jwt);
      }
    };
    Web3Wallet = class _Web3Wallet {
      static {
        __name(this, "_Web3Wallet");
      }
      static {
        __name2(this, "_Web3Wallet");
      }
      constructor(id, web3Wallet, verification) {
        this.id = id;
        this.web3Wallet = web3Wallet;
        this.verification = verification;
      }
      static fromJSON(data) {
        return new _Web3Wallet(data.id, data.web3_wallet, data.verification && Verification.fromJSON(data.verification));
      }
    };
    User = class _User {
      static {
        __name(this, "_User");
      }
      static {
        __name2(this, "_User");
      }
      constructor(id, passwordEnabled, totpEnabled, backupCodeEnabled, twoFactorEnabled, banned, locked, createdAt, updatedAt, imageUrl, hasImage, primaryEmailAddressId, primaryPhoneNumberId, primaryWeb3WalletId, lastSignInAt, externalId, username, firstName, lastName, publicMetadata = {}, privateMetadata = {}, unsafeMetadata = {}, emailAddresses = [], phoneNumbers = [], web3Wallets = [], externalAccounts = [], samlAccounts = [], lastActiveAt, createOrganizationEnabled, createOrganizationsLimit = null, deleteSelfEnabled, legalAcceptedAt, locale) {
        this.id = id;
        this.passwordEnabled = passwordEnabled;
        this.totpEnabled = totpEnabled;
        this.backupCodeEnabled = backupCodeEnabled;
        this.twoFactorEnabled = twoFactorEnabled;
        this.banned = banned;
        this.locked = locked;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.imageUrl = imageUrl;
        this.hasImage = hasImage;
        this.primaryEmailAddressId = primaryEmailAddressId;
        this.primaryPhoneNumberId = primaryPhoneNumberId;
        this.primaryWeb3WalletId = primaryWeb3WalletId;
        this.lastSignInAt = lastSignInAt;
        this.externalId = externalId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.publicMetadata = publicMetadata;
        this.privateMetadata = privateMetadata;
        this.unsafeMetadata = unsafeMetadata;
        this.emailAddresses = emailAddresses;
        this.phoneNumbers = phoneNumbers;
        this.web3Wallets = web3Wallets;
        this.externalAccounts = externalAccounts;
        this.samlAccounts = samlAccounts;
        this.lastActiveAt = lastActiveAt;
        this.createOrganizationEnabled = createOrganizationEnabled;
        this.createOrganizationsLimit = createOrganizationsLimit;
        this.deleteSelfEnabled = deleteSelfEnabled;
        this.legalAcceptedAt = legalAcceptedAt;
        this.locale = locale;
        this._raw = null;
      }
      get raw() {
        return this._raw;
      }
      static fromJSON(data) {
        const res = new _User(
          data.id,
          data.password_enabled,
          data.totp_enabled,
          data.backup_code_enabled,
          data.two_factor_enabled,
          data.banned,
          data.locked,
          data.created_at,
          data.updated_at,
          data.image_url,
          data.has_image,
          data.primary_email_address_id,
          data.primary_phone_number_id,
          data.primary_web3_wallet_id,
          data.last_sign_in_at,
          data.external_id,
          data.username,
          data.first_name,
          data.last_name,
          data.public_metadata,
          data.private_metadata,
          data.unsafe_metadata,
          (data.email_addresses || []).map((x) => EmailAddress.fromJSON(x)),
          (data.phone_numbers || []).map((x) => PhoneNumber.fromJSON(x)),
          (data.web3_wallets || []).map((x) => Web3Wallet.fromJSON(x)),
          (data.external_accounts || []).map((x) => ExternalAccount.fromJSON(x)),
          (data.saml_accounts || []).map((x) => SamlAccount.fromJSON(x)),
          data.last_active_at,
          data.create_organization_enabled,
          data.create_organizations_limit,
          data.delete_self_enabled,
          data.legal_accepted_at,
          data.locale
        );
        res._raw = data;
        return res;
      }
      /**
       * The primary email address of the user.
       */
      get primaryEmailAddress() {
        return this.emailAddresses.find(({ id }) => id === this.primaryEmailAddressId) ?? null;
      }
      /**
       * The primary phone number of the user.
       */
      get primaryPhoneNumber() {
        return this.phoneNumbers.find(({ id }) => id === this.primaryPhoneNumberId) ?? null;
      }
      /**
       * The primary web3 wallet of the user.
       */
      get primaryWeb3Wallet() {
        return this.web3Wallets.find(({ id }) => id === this.primaryWeb3WalletId) ?? null;
      }
      /**
       * The full name of the user.
       */
      get fullName() {
        return [this.firstName, this.lastName].join(" ").trim() || null;
      }
    };
    WaitlistEntry = class _WaitlistEntry {
      static {
        __name(this, "_WaitlistEntry");
      }
      static {
        __name2(this, "_WaitlistEntry");
      }
      constructor(id, emailAddress, status, invitation, createdAt, updatedAt, isLocked) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.status = status;
        this.invitation = invitation;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isLocked = isLocked;
      }
      static fromJSON(data) {
        return new _WaitlistEntry(
          data.id,
          data.email_address,
          data.status,
          data.invitation && Invitation.fromJSON(data.invitation),
          data.created_at,
          data.updated_at,
          data.is_locked
        );
      }
    };
    Feature = class _Feature {
      static {
        __name(this, "_Feature");
      }
      static {
        __name2(this, "_Feature");
      }
      constructor(id, name, description, slug, avatarUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.slug = slug;
        this.avatarUrl = avatarUrl;
      }
      static fromJSON(data) {
        return new _Feature(data.id, data.name, data.description ?? null, data.slug, data.avatar_url ?? null);
      }
    };
    BillingPlan = class _BillingPlan {
      static {
        __name(this, "_BillingPlan");
      }
      static {
        __name2(this, "_BillingPlan");
      }
      constructor(id, name, slug, description, isDefault, isRecurring, hasBaseFee, publiclyVisible, fee, annualFee, annualMonthlyFee, forPayerType, features22) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.isDefault = isDefault;
        this.isRecurring = isRecurring;
        this.hasBaseFee = hasBaseFee;
        this.publiclyVisible = publiclyVisible;
        this.fee = fee;
        this.annualFee = annualFee;
        this.annualMonthlyFee = annualMonthlyFee;
        this.forPayerType = forPayerType;
        this.features = features22;
      }
      static fromJSON(data) {
        const formatAmountJSON = /* @__PURE__ */ __name2((fee) => {
          return fee ? {
            amount: fee.amount,
            amountFormatted: fee.amount_formatted,
            currency: fee.currency,
            currencySymbol: fee.currency_symbol
          } : null;
        }, "formatAmountJSON");
        return new _BillingPlan(
          data.id,
          data.name,
          data.slug,
          data.description ?? null,
          data.is_default,
          data.is_recurring,
          data.has_base_fee,
          data.publicly_visible,
          formatAmountJSON(data.fee),
          formatAmountJSON(data.annual_fee),
          formatAmountJSON(data.annual_monthly_fee),
          data.for_payer_type,
          (data.features ?? []).map((feature) => Feature.fromJSON(feature))
        );
      }
    };
    BillingSubscriptionItem = class _BillingSubscriptionItem {
      static {
        __name(this, "_BillingSubscriptionItem");
      }
      static {
        __name2(this, "_BillingSubscriptionItem");
      }
      constructor(id, status, planPeriod, periodStart, nextPayment, amount, plan, planId, createdAt, updatedAt, periodEnd, canceledAt, pastDueAt, endedAt, payerId, isFreeTrial, lifetimePaid) {
        this.id = id;
        this.status = status;
        this.planPeriod = planPeriod;
        this.periodStart = periodStart;
        this.nextPayment = nextPayment;
        this.amount = amount;
        this.plan = plan;
        this.planId = planId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.periodEnd = periodEnd;
        this.canceledAt = canceledAt;
        this.pastDueAt = pastDueAt;
        this.endedAt = endedAt;
        this.payerId = payerId;
        this.isFreeTrial = isFreeTrial;
        this.lifetimePaid = lifetimePaid;
      }
      static fromJSON(data) {
        function formatAmountJSON(amount) {
          if (!amount) {
            return amount;
          }
          return {
            amount: amount.amount,
            amountFormatted: amount.amount_formatted,
            currency: amount.currency,
            currencySymbol: amount.currency_symbol
          };
        }
        __name(formatAmountJSON, "formatAmountJSON");
        __name2(formatAmountJSON, "formatAmountJSON");
        return new _BillingSubscriptionItem(
          data.id,
          data.status,
          data.plan_period,
          data.period_start,
          data.next_payment,
          formatAmountJSON(data.amount) ?? void 0,
          data.plan ? BillingPlan.fromJSON(data.plan) : null,
          data.plan_id ?? null,
          data.created_at,
          data.updated_at,
          data.period_end,
          data.canceled_at,
          data.past_due_at,
          data.ended_at,
          data.payer_id,
          data.is_free_trial,
          formatAmountJSON(data.lifetime_paid) ?? void 0
        );
      }
    };
    BillingSubscription = class _BillingSubscription {
      static {
        __name(this, "_BillingSubscription");
      }
      static {
        __name2(this, "_BillingSubscription");
      }
      constructor(id, status, payerId, createdAt, updatedAt, activeAt, pastDueAt, subscriptionItems, nextPayment, eligibleForFreeTrial) {
        this.id = id;
        this.status = status;
        this.payerId = payerId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.activeAt = activeAt;
        this.pastDueAt = pastDueAt;
        this.subscriptionItems = subscriptionItems;
        this.nextPayment = nextPayment;
        this.eligibleForFreeTrial = eligibleForFreeTrial;
      }
      static fromJSON(data) {
        const nextPayment = data.next_payment ? {
          date: data.next_payment.date,
          amount: {
            amount: data.next_payment.amount.amount,
            amountFormatted: data.next_payment.amount.amount_formatted,
            currency: data.next_payment.amount.currency,
            currencySymbol: data.next_payment.amount.currency_symbol
          }
        } : null;
        return new _BillingSubscription(
          data.id,
          data.status,
          data.payer_id,
          data.created_at,
          data.updated_at,
          data.active_at ?? null,
          data.past_due_at ?? null,
          (data.subscription_items ?? []).map((item) => BillingSubscriptionItem.fromJSON(item)),
          nextPayment,
          data.eligible_for_free_trial ?? false
        );
      }
    };
    __name2(deserialize, "deserialize");
    __name2(isPaginated, "isPaginated");
    __name2(isM2MTokenResponse, "isM2MTokenResponse");
    __name2(getCount, "getCount");
    __name2(jsonToObject, "jsonToObject");
    __name2(buildRequest, "buildRequest");
    __name2(getTraceId, "getTraceId");
    __name2(getRetryAfter, "getRetryAfter");
    __name2(parseErrors2, "parseErrors");
    __name2(withLegacyRequestReturn, "withLegacyRequestReturn");
    __name2(createBackendApiClient, "createBackendApiClient");
    createDebug = /* @__PURE__ */ __name2((data) => {
      return () => {
        const res = { ...data };
        res.secretKey = (res.secretKey || "").substring(0, 7);
        res.jwtKey = (res.jwtKey || "").substring(0, 7);
        return { ...res };
      };
    }, "createDebug");
    __name2(signedInAuthObject, "signedInAuthObject");
    __name2(signedOutAuthObject, "signedOutAuthObject");
    __name2(authenticatedMachineObject, "authenticatedMachineObject");
    __name2(unauthenticatedMachineObject, "unauthenticatedMachineObject");
    __name2(invalidTokenAuthObject, "invalidTokenAuthObject");
    createGetToken = /* @__PURE__ */ __name2((params) => {
      const { fetcher, sessionToken, sessionId } = params || {};
      return async (options = {}) => {
        if (!sessionId) {
          return null;
        }
        if (options.template || options.expiresInSeconds !== void 0) {
          return fetcher(sessionId, options.template, options.expiresInSeconds);
        }
        return sessionToken;
      };
    }, "createGetToken");
    getAuthObjectForAcceptedToken = /* @__PURE__ */ __name2(({
      authObject,
      acceptsToken = TokenType.SessionToken
    }) => {
      if (acceptsToken === "any") {
        return authObject;
      }
      if (Array.isArray(acceptsToken)) {
        if (!isTokenTypeAccepted(authObject.tokenType, acceptsToken)) {
          return invalidTokenAuthObject();
        }
        return authObject;
      }
      if (!isTokenTypeAccepted(authObject.tokenType, acceptsToken)) {
        if (isMachineTokenType(acceptsToken)) {
          return unauthenticatedMachineObject(acceptsToken, authObject.debug);
        }
        return signedOutAuthObject(authObject.debug);
      }
      return authObject;
    }, "getAuthObjectForAcceptedToken");
    AuthStatus = {
      SignedIn: "signed-in",
      SignedOut: "signed-out",
      Handshake: "handshake"
    };
    AuthErrorReason = {
      ClientUATWithoutSessionToken: "client-uat-but-no-session-token",
      DevBrowserMissing: "dev-browser-missing",
      DevBrowserSync: "dev-browser-sync",
      PrimaryRespondsToSyncing: "primary-responds-to-syncing",
      PrimaryDomainCrossOriginSync: "primary-domain-cross-origin-sync",
      SatelliteCookieNeedsSyncing: "satellite-needs-syncing",
      SessionTokenAndUATMissing: "session-token-and-uat-missing",
      SessionTokenMissing: "session-token-missing",
      SessionTokenExpired: "session-token-expired",
      SessionTokenIATBeforeClientUAT: "session-token-iat-before-client-uat",
      SessionTokenNBF: "session-token-nbf",
      SessionTokenIatInTheFuture: "session-token-iat-in-the-future",
      SessionTokenWithoutClientUAT: "session-token-but-no-client-uat",
      ActiveOrganizationMismatch: "active-organization-mismatch",
      TokenTypeMismatch: "token-type-mismatch",
      UnexpectedError: "unexpected-error"
    };
    __name2(signedIn, "signedIn");
    __name2(signedOut, "signedOut");
    __name2(handshake, "handshake");
    __name2(signedOutInvalidToken, "signedOutInvalidToken");
    withDebugHeaders = /* @__PURE__ */ __name2((requestState) => {
      const headers = new Headers(requestState.headers || {});
      if (requestState.message) {
        try {
          headers.set(constants.Headers.AuthMessage, requestState.message);
        } catch {
        }
      }
      if (requestState.reason) {
        try {
          headers.set(constants.Headers.AuthReason, requestState.reason);
        } catch {
        }
      }
      if (requestState.status) {
        try {
          headers.set(constants.Headers.AuthStatus, requestState.status);
        } catch {
        }
      }
      requestState.headers = headers;
      return requestState;
    }, "withDebugHeaders");
    import_cookie = __toESM(require_dist());
    ClerkUrl = class extends URL {
      static {
        __name(this, "ClerkUrl");
      }
      static {
        __name2(this, "ClerkUrl");
      }
      isCrossOrigin(other) {
        return this.origin !== new URL(other.toString()).origin;
      }
    };
    createClerkUrl = /* @__PURE__ */ __name2((...args) => {
      return new ClerkUrl(...args);
    }, "createClerkUrl");
    ClerkRequest = class extends Request {
      static {
        __name(this, "ClerkRequest");
      }
      static {
        __name2(this, "ClerkRequest");
      }
      constructor(input, init) {
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        super(url, init || typeof input === "string" ? void 0 : input);
        this.clerkUrl = this.deriveUrlFromHeaders(this);
        this.cookies = this.parseCookies(this);
      }
      toJSON() {
        return {
          url: this.clerkUrl.href,
          method: this.method,
          headers: JSON.stringify(Object.fromEntries(this.headers)),
          clerkUrl: this.clerkUrl.toString(),
          cookies: JSON.stringify(Object.fromEntries(this.cookies))
        };
      }
      /**
       * Used to fix request.url using the x-forwarded-* headers
       * TODO add detailed description of the issues this solves
       */
      deriveUrlFromHeaders(req) {
        const initialUrl = new URL(req.url);
        const forwardedProto = req.headers.get(constants.Headers.ForwardedProto);
        const forwardedHost = req.headers.get(constants.Headers.ForwardedHost);
        const host = req.headers.get(constants.Headers.Host);
        const protocol = initialUrl.protocol;
        const resolvedHost = this.getFirstValueFromHeader(forwardedHost) ?? host;
        const resolvedProtocol = this.getFirstValueFromHeader(forwardedProto) ?? protocol?.replace(/[:/]/, "");
        const origin = resolvedHost && resolvedProtocol ? `${resolvedProtocol}://${resolvedHost}` : initialUrl.origin;
        if (origin === initialUrl.origin) {
          return createClerkUrl(initialUrl);
        }
        return createClerkUrl(initialUrl.pathname + initialUrl.search, origin);
      }
      getFirstValueFromHeader(value) {
        return value?.split(",")[0];
      }
      parseCookies(req) {
        const cookiesRecord = (0, import_cookie.parse)(this.decodeCookieValue(req.headers.get("cookie") || ""));
        return new Map(Object.entries(cookiesRecord));
      }
      decodeCookieValue(str) {
        return str ? str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : str;
      }
    };
    createClerkRequest = /* @__PURE__ */ __name2((...args) => {
      const isClerkRequest = args[0] && typeof args[0] === "object" && "clerkUrl" in args[0] && "cookies" in args[0];
      return isClerkRequest ? args[0] : new ClerkRequest(...args);
    }, "createClerkRequest");
    getCookieName = /* @__PURE__ */ __name2((cookieDirective) => {
      return cookieDirective.split(";")[0]?.split("=")[0];
    }, "getCookieName");
    getCookieValue = /* @__PURE__ */ __name2((cookieDirective) => {
      return cookieDirective.split(";")[0]?.split("=")[1];
    }, "getCookieValue");
    __name2(verifyToken, "verifyToken");
    __name2(handleClerkAPIError, "handleClerkAPIError");
    __name2(verifyM2MToken, "verifyM2MToken");
    __name2(verifyOAuthToken, "verifyOAuthToken");
    __name2(verifyAPIKey, "verifyAPIKey");
    __name2(verifyMachineAuthToken, "verifyMachineAuthToken");
    __name2(verifyHandshakeJwt, "verifyHandshakeJwt");
    __name2(verifyHandshakeToken, "verifyHandshakeToken");
    HandshakeService = class {
      static {
        __name(this, "HandshakeService");
      }
      static {
        __name2(this, "HandshakeService");
      }
      constructor(authenticateContext, options, organizationMatcher) {
        this.authenticateContext = authenticateContext;
        this.options = options;
        this.organizationMatcher = organizationMatcher;
      }
      /**
       * Determines if a request is eligible for handshake based on its headers
       *
       * Currently, a request is only eligible for a handshake if we can say it's *probably* a request for a document, not a fetch or some other exotic request.
       * This heuristic should give us a reliable enough signal for browsers that support `Sec-Fetch-Dest` and for those that don't.
       *
       * @returns boolean indicating if the request is eligible for handshake
       */
      isRequestEligibleForHandshake() {
        const { accept, secFetchDest } = this.authenticateContext;
        if (secFetchDest === "document" || secFetchDest === "iframe") {
          return true;
        }
        if (!secFetchDest && accept?.startsWith("text/html")) {
          return true;
        }
        return false;
      }
      /**
       * Builds the redirect headers for a handshake request
       * @param reason - The reason for the handshake (e.g. 'session-token-expired')
       * @returns Headers object containing the Location header for redirect
       * @throws Error if clerkUrl is missing in authenticateContext
       */
      buildRedirectToHandshake(reason) {
        if (!this.authenticateContext?.clerkUrl) {
          throw new Error("Missing clerkUrl in authenticateContext");
        }
        const redirectUrl = this.removeDevBrowserFromURL(this.authenticateContext.clerkUrl);
        let baseUrl = this.authenticateContext.frontendApi.startsWith("http") ? this.authenticateContext.frontendApi : `https://${this.authenticateContext.frontendApi}`;
        baseUrl = baseUrl.replace(/\/+$/, "") + "/";
        const url = new URL("v1/client/handshake", baseUrl);
        url.searchParams.append("redirect_url", redirectUrl?.href || "");
        url.searchParams.append("__clerk_api_version", SUPPORTED_BAPI_VERSION);
        url.searchParams.append(
          constants.QueryParameters.SuffixedCookies,
          this.authenticateContext.usesSuffixedCookies().toString()
        );
        url.searchParams.append(constants.QueryParameters.HandshakeReason, reason);
        url.searchParams.append(constants.QueryParameters.HandshakeFormat, "nonce");
        if (this.authenticateContext.sessionToken) {
          url.searchParams.append(constants.QueryParameters.Session, this.authenticateContext.sessionToken);
        }
        if (this.authenticateContext.instanceType === "development" && this.authenticateContext.devBrowserToken) {
          url.searchParams.append(constants.QueryParameters.DevBrowser, this.authenticateContext.devBrowserToken);
        }
        const toActivate = this.getOrganizationSyncTarget(this.authenticateContext.clerkUrl, this.organizationMatcher);
        if (toActivate) {
          const params = this.getOrganizationSyncQueryParams(toActivate);
          params.forEach((value, key) => {
            url.searchParams.append(key, value);
          });
        }
        return new Headers({ [constants.Headers.Location]: url.href });
      }
      /**
       * Gets cookies from either a handshake nonce or a handshake token
       * @returns Promise resolving to string array of cookie directives
       */
      async getCookiesFromHandshake() {
        const cookiesToSet = [];
        if (this.authenticateContext.handshakeNonce) {
          try {
            const handshakePayload = await this.authenticateContext.apiClient?.clients.getHandshakePayload({
              nonce: this.authenticateContext.handshakeNonce
            });
            if (handshakePayload) {
              cookiesToSet.push(...handshakePayload.directives);
            }
          } catch (error32) {
            console.error("Clerk: HandshakeService: error getting handshake payload:", error32);
          }
        } else if (this.authenticateContext.handshakeToken) {
          const handshakePayload = await verifyHandshakeToken(
            this.authenticateContext.handshakeToken,
            this.authenticateContext
          );
          if (handshakePayload && Array.isArray(handshakePayload.handshake)) {
            cookiesToSet.push(...handshakePayload.handshake);
          }
        }
        return cookiesToSet;
      }
      /**
       * Resolves a handshake request by verifying the handshake token and setting appropriate cookies
       * @returns Promise resolving to either a SignedInState or SignedOutState
       * @throws Error if handshake verification fails or if there are issues with the session token
       */
      async resolveHandshake() {
        const headers = new Headers({
          "Access-Control-Allow-Origin": "null",
          "Access-Control-Allow-Credentials": "true"
        });
        const cookiesToSet = await this.getCookiesFromHandshake();
        let sessionToken = "";
        cookiesToSet.forEach((x) => {
          headers.append("Set-Cookie", x);
          if (getCookieName(x).startsWith(constants.Cookies.Session)) {
            sessionToken = getCookieValue(x);
          }
        });
        if (this.authenticateContext.instanceType === "development") {
          const newUrl = new URL(this.authenticateContext.clerkUrl);
          newUrl.searchParams.delete(constants.QueryParameters.Handshake);
          newUrl.searchParams.delete(constants.QueryParameters.HandshakeHelp);
          newUrl.searchParams.delete(constants.QueryParameters.DevBrowser);
          newUrl.searchParams.delete(constants.QueryParameters.HandshakeNonce);
          headers.append(constants.Headers.Location, newUrl.toString());
          headers.set(constants.Headers.CacheControl, "no-store");
        }
        if (sessionToken === "") {
          return signedOut({
            tokenType: TokenType.SessionToken,
            authenticateContext: this.authenticateContext,
            reason: AuthErrorReason.SessionTokenMissing,
            message: "",
            headers
          });
        }
        const { data, errors: [error32] = [] } = await verifyToken(sessionToken, this.authenticateContext);
        if (data) {
          return signedIn({
            tokenType: TokenType.SessionToken,
            authenticateContext: this.authenticateContext,
            sessionClaims: data,
            headers,
            token: sessionToken
          });
        }
        if (this.authenticateContext.instanceType === "development" && (error32?.reason === TokenVerificationErrorReason.TokenExpired || error32?.reason === TokenVerificationErrorReason.TokenNotActiveYet || error32?.reason === TokenVerificationErrorReason.TokenIatInTheFuture)) {
          const developmentError = new TokenVerificationError({
            action: error32.action,
            message: error32.message,
            reason: error32.reason
          });
          developmentError.tokenCarrier = "cookie";
          console.error(
            `Clerk: Clock skew detected. This usually means that your system clock is inaccurate. Clerk will attempt to account for the clock skew in development.

To resolve this issue, make sure your system's clock is set to the correct time (e.g. turn off and on automatic time synchronization).

---

${developmentError.getFullMessage()}`
          );
          const { data: retryResult, errors: [retryError] = [] } = await verifyToken(sessionToken, {
            ...this.authenticateContext,
            clockSkewInMs: 864e5
          });
          if (retryResult) {
            return signedIn({
              tokenType: TokenType.SessionToken,
              authenticateContext: this.authenticateContext,
              sessionClaims: retryResult,
              headers,
              token: sessionToken
            });
          }
          throw new Error(retryError?.message || "Clerk: Handshake retry failed.");
        }
        throw new Error(error32?.message || "Clerk: Handshake failed.");
      }
      /**
       * Handles handshake token verification errors in development mode
       * @param error - The TokenVerificationError that occurred
       * @throws Error with a descriptive message about the verification failure
       */
      handleTokenVerificationErrorInDevelopment(error32) {
        if (error32.reason === TokenVerificationErrorReason.TokenInvalidSignature) {
          const msg = `Clerk: Handshake token verification failed due to an invalid signature. If you have switched Clerk keys locally, clear your cookies and try again.`;
          throw new Error(msg);
        }
        throw new Error(`Clerk: Handshake token verification failed: ${error32.getFullMessage()}.`);
      }
      /**
       * Checks if a redirect loop is detected and sets headers to track redirect count
       * @param headers - The Headers object to modify
       * @returns boolean indicating if a redirect loop was detected (true) or if the request can proceed (false)
       */
      checkAndTrackRedirectLoop(headers) {
        if (this.authenticateContext.handshakeRedirectLoopCounter === 3) {
          return true;
        }
        const newCounterValue = this.authenticateContext.handshakeRedirectLoopCounter + 1;
        const cookieName = constants.Cookies.RedirectCount;
        headers.append("Set-Cookie", `${cookieName}=${newCounterValue}; SameSite=Lax; HttpOnly; Max-Age=2`);
        return false;
      }
      removeDevBrowserFromURL(url) {
        const updatedURL = new URL(url);
        updatedURL.searchParams.delete(constants.QueryParameters.DevBrowser);
        updatedURL.searchParams.delete(constants.QueryParameters.LegacyDevBrowser);
        return updatedURL;
      }
      getOrganizationSyncTarget(url, matchers) {
        return matchers.findTarget(url);
      }
      getOrganizationSyncQueryParams(toActivate) {
        const ret = /* @__PURE__ */ new Map();
        if (toActivate.type === "personalAccount") {
          ret.set("organization_id", "");
        }
        if (toActivate.type === "organization") {
          if (toActivate.organizationId) {
            ret.set("organization_id", toActivate.organizationId);
          }
          if (toActivate.organizationSlug) {
            ret.set("organization_id", toActivate.organizationSlug);
          }
        }
        return ret;
      }
    };
    OrganizationMatcher = class {
      static {
        __name(this, "OrganizationMatcher");
      }
      static {
        __name2(this, "OrganizationMatcher");
      }
      constructor(options) {
        this.organizationPattern = this.createMatcher(options?.organizationPatterns);
        this.personalAccountPattern = this.createMatcher(options?.personalAccountPatterns);
      }
      createMatcher(pattern) {
        if (!pattern) {
          return null;
        }
        try {
          return match2(pattern);
        } catch (e) {
          throw new Error(`Invalid pattern "${pattern}": ${e}`);
        }
      }
      findTarget(url) {
        const orgTarget = this.findOrganizationTarget(url);
        if (orgTarget) {
          return orgTarget;
        }
        return this.findPersonalAccountTarget(url);
      }
      findOrganizationTarget(url) {
        if (!this.organizationPattern) {
          return null;
        }
        try {
          const result = this.organizationPattern(url.pathname);
          if (!result || !("params" in result)) {
            return null;
          }
          const params = result.params;
          if (params.id) {
            return { type: "organization", organizationId: params.id };
          }
          if (params.slug) {
            return { type: "organization", organizationSlug: params.slug };
          }
          return null;
        } catch (e) {
          console.error("Failed to match organization pattern:", e);
          return null;
        }
      }
      findPersonalAccountTarget(url) {
        if (!this.personalAccountPattern) {
          return null;
        }
        try {
          const result = this.personalAccountPattern(url.pathname);
          return result ? { type: "personalAccount" } : null;
        } catch (e) {
          console.error("Failed to match personal account pattern:", e);
          return null;
        }
      }
    };
    RefreshTokenErrorReason = {
      NonEligibleNoCookie: "non-eligible-no-refresh-cookie",
      NonEligibleNonGet: "non-eligible-non-get",
      InvalidSessionToken: "invalid-session-token",
      MissingApiClient: "missing-api-client",
      MissingSessionToken: "missing-session-token",
      MissingRefreshToken: "missing-refresh-token",
      ExpiredSessionTokenDecodeFailed: "expired-session-token-decode-failed",
      ExpiredSessionTokenMissingSidClaim: "expired-session-token-missing-sid-claim",
      FetchError: "fetch-error",
      UnexpectedSDKError: "unexpected-sdk-error",
      UnexpectedBAPIError: "unexpected-bapi-error"
    };
    __name2(assertSignInUrlExists, "assertSignInUrlExists");
    __name2(assertProxyUrlOrDomain, "assertProxyUrlOrDomain");
    __name2(assertSignInUrlFormatAndOrigin, "assertSignInUrlFormatAndOrigin");
    __name2(assertMachineSecretOrSecretKey, "assertMachineSecretOrSecretKey");
    __name2(isRequestEligibleForRefresh, "isRequestEligibleForRefresh");
    __name2(checkTokenTypeMismatch, "checkTokenTypeMismatch");
    __name2(isTokenTypeInAcceptedArray, "isTokenTypeInAcceptedArray");
    authenticateRequest = /* @__PURE__ */ __name2((async (request, options) => {
      const authenticateContext = await createAuthenticateContext(createClerkRequest(request), options);
      const acceptsToken = options.acceptsToken ?? TokenType.SessionToken;
      if (acceptsToken !== TokenType.M2MToken) {
        assertValidSecretKey(authenticateContext.secretKey);
        if (authenticateContext.isSatellite) {
          assertSignInUrlExists(authenticateContext.signInUrl, authenticateContext.secretKey);
          if (authenticateContext.signInUrl && authenticateContext.origin) {
            assertSignInUrlFormatAndOrigin(authenticateContext.signInUrl, authenticateContext.origin);
          }
          assertProxyUrlOrDomain(authenticateContext.proxyUrl || authenticateContext.domain);
        }
      }
      if (acceptsToken === TokenType.M2MToken) {
        assertMachineSecretOrSecretKey(authenticateContext);
      }
      const organizationMatcher = new OrganizationMatcher(options.organizationSyncOptions);
      const handshakeService = new HandshakeService(
        authenticateContext,
        { organizationSyncOptions: options.organizationSyncOptions },
        organizationMatcher
      );
      async function refreshToken(authenticateContext2) {
        if (!options.apiClient) {
          return {
            data: null,
            error: {
              message: "An apiClient is needed to perform token refresh.",
              cause: { reason: RefreshTokenErrorReason.MissingApiClient }
            }
          };
        }
        const { sessionToken: expiredSessionToken, refreshTokenInCookie: refreshToken2 } = authenticateContext2;
        if (!expiredSessionToken) {
          return {
            data: null,
            error: {
              message: "Session token must be provided.",
              cause: { reason: RefreshTokenErrorReason.MissingSessionToken }
            }
          };
        }
        if (!refreshToken2) {
          return {
            data: null,
            error: {
              message: "Refresh token must be provided.",
              cause: { reason: RefreshTokenErrorReason.MissingRefreshToken }
            }
          };
        }
        const { data: decodeResult, errors: decodedErrors } = decodeJwt(expiredSessionToken);
        if (!decodeResult || decodedErrors) {
          return {
            data: null,
            error: {
              message: "Unable to decode the expired session token.",
              cause: { reason: RefreshTokenErrorReason.ExpiredSessionTokenDecodeFailed, errors: decodedErrors }
            }
          };
        }
        if (!decodeResult?.payload?.sid) {
          return {
            data: null,
            error: {
              message: "Expired session token is missing the `sid` claim.",
              cause: { reason: RefreshTokenErrorReason.ExpiredSessionTokenMissingSidClaim }
            }
          };
        }
        try {
          const response = await options.apiClient.sessions.refreshSession(decodeResult.payload.sid, {
            format: "cookie",
            suffixed_cookies: authenticateContext2.usesSuffixedCookies(),
            expired_token: expiredSessionToken || "",
            refresh_token: refreshToken2 || "",
            request_origin: authenticateContext2.clerkUrl.origin,
            // The refresh endpoint expects headers as Record<string, string[]>, so we need to transform it.
            request_headers: Object.fromEntries(Array.from(request.headers.entries()).map(([k, v]) => [k, [v]]))
          });
          return { data: response.cookies, error: null };
        } catch (err) {
          if (err?.errors?.length) {
            if (err.errors[0].code === "unexpected_error") {
              return {
                data: null,
                error: {
                  message: `Fetch unexpected error`,
                  cause: { reason: RefreshTokenErrorReason.FetchError, errors: err.errors }
                }
              };
            }
            return {
              data: null,
              error: {
                message: err.errors[0].code,
                cause: { reason: err.errors[0].code, errors: err.errors }
              }
            };
          } else {
            return {
              data: null,
              error: {
                message: `Unexpected Server/BAPI error`,
                cause: { reason: RefreshTokenErrorReason.UnexpectedBAPIError, errors: [err] }
              }
            };
          }
        }
      }
      __name(refreshToken, "refreshToken");
      __name2(refreshToken, "refreshToken");
      async function attemptRefresh(authenticateContext2) {
        const { data: cookiesToSet, error: error32 } = await refreshToken(authenticateContext2);
        if (!cookiesToSet || cookiesToSet.length === 0) {
          return { data: null, error: error32 };
        }
        const headers = new Headers();
        let sessionToken = "";
        cookiesToSet.forEach((x) => {
          headers.append("Set-Cookie", x);
          if (getCookieName(x).startsWith(constants.Cookies.Session)) {
            sessionToken = getCookieValue(x);
          }
        });
        const { data: jwtPayload, errors } = await verifyToken(sessionToken, authenticateContext2);
        if (errors) {
          return {
            data: null,
            error: {
              message: `Clerk: unable to verify refreshed session token.`,
              cause: { reason: RefreshTokenErrorReason.InvalidSessionToken, errors }
            }
          };
        }
        return { data: { jwtPayload, sessionToken, headers }, error: null };
      }
      __name(attemptRefresh, "attemptRefresh");
      __name2(attemptRefresh, "attemptRefresh");
      function handleMaybeHandshakeStatus(authenticateContext2, reason, message, headers) {
        if (!handshakeService.isRequestEligibleForHandshake()) {
          return signedOut({
            tokenType: TokenType.SessionToken,
            authenticateContext: authenticateContext2,
            reason,
            message
          });
        }
        const handshakeHeaders = headers ?? handshakeService.buildRedirectToHandshake(reason);
        if (handshakeHeaders.get(constants.Headers.Location)) {
          handshakeHeaders.set(constants.Headers.CacheControl, "no-store");
        }
        const isRedirectLoop = handshakeService.checkAndTrackRedirectLoop(handshakeHeaders);
        if (isRedirectLoop) {
          const msg = `Clerk: Refreshing the session token resulted in an infinite redirect loop. This usually means that your Clerk instance keys do not match - make sure to copy the correct publishable and secret keys from the Clerk dashboard.`;
          console.log(msg);
          return signedOut({
            tokenType: TokenType.SessionToken,
            authenticateContext: authenticateContext2,
            reason,
            message
          });
        }
        return handshake(authenticateContext2, reason, message, handshakeHeaders);
      }
      __name(handleMaybeHandshakeStatus, "handleMaybeHandshakeStatus");
      __name2(handleMaybeHandshakeStatus, "handleMaybeHandshakeStatus");
      function handleMaybeOrganizationSyncHandshake(authenticateContext2, auth) {
        const organizationSyncTarget = organizationMatcher.findTarget(authenticateContext2.clerkUrl);
        if (!organizationSyncTarget) {
          return null;
        }
        let mustActivate = false;
        if (organizationSyncTarget.type === "organization") {
          if (organizationSyncTarget.organizationSlug && organizationSyncTarget.organizationSlug !== auth.orgSlug) {
            mustActivate = true;
          }
          if (organizationSyncTarget.organizationId && organizationSyncTarget.organizationId !== auth.orgId) {
            mustActivate = true;
          }
        }
        if (organizationSyncTarget.type === "personalAccount" && auth.orgId) {
          mustActivate = true;
        }
        if (!mustActivate) {
          return null;
        }
        if (authenticateContext2.handshakeRedirectLoopCounter >= 3) {
          console.warn(
            "Clerk: Organization activation handshake loop detected. This is likely due to an invalid organization ID or slug. Skipping organization activation."
          );
          return null;
        }
        const handshakeState = handleMaybeHandshakeStatus(
          authenticateContext2,
          AuthErrorReason.ActiveOrganizationMismatch,
          ""
        );
        if (handshakeState.status !== "handshake") {
          return null;
        }
        return handshakeState;
      }
      __name(handleMaybeOrganizationSyncHandshake, "handleMaybeOrganizationSyncHandshake");
      __name2(handleMaybeOrganizationSyncHandshake, "handleMaybeOrganizationSyncHandshake");
      async function authenticateRequestWithTokenInHeader() {
        const { tokenInHeader } = authenticateContext;
        if (isMachineJwt(tokenInHeader)) {
          return signedOut({
            tokenType: TokenType.SessionToken,
            authenticateContext,
            reason: AuthErrorReason.TokenTypeMismatch,
            message: ""
          });
        }
        try {
          const { data, errors } = await verifyToken(tokenInHeader, authenticateContext);
          if (errors) {
            throw errors[0];
          }
          return signedIn({
            tokenType: TokenType.SessionToken,
            authenticateContext,
            sessionClaims: data,
            headers: new Headers(),
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            token: tokenInHeader
          });
        } catch (err) {
          return handleSessionTokenError(err, "header");
        }
      }
      __name(authenticateRequestWithTokenInHeader, "authenticateRequestWithTokenInHeader");
      __name2(authenticateRequestWithTokenInHeader, "authenticateRequestWithTokenInHeader");
      async function authenticateRequestWithTokenInCookie() {
        const hasActiveClient = authenticateContext.clientUat;
        const hasSessionToken = !!authenticateContext.sessionTokenInCookie;
        const hasDevBrowserToken = !!authenticateContext.devBrowserToken;
        if (authenticateContext.handshakeNonce || authenticateContext.handshakeToken) {
          try {
            return await handshakeService.resolveHandshake();
          } catch (error32) {
            if (error32 instanceof TokenVerificationError && authenticateContext.instanceType === "development") {
              handshakeService.handleTokenVerificationErrorInDevelopment(error32);
            } else {
              console.error("Clerk: unable to resolve handshake:", error32);
            }
          }
        }
        const isRequestEligibleForMultiDomainSync = authenticateContext.isSatellite && authenticateContext.secFetchDest === "document";
        if (authenticateContext.instanceType === "production" && isRequestEligibleForMultiDomainSync) {
          return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "");
        }
        if (authenticateContext.instanceType === "development" && isRequestEligibleForMultiDomainSync && !authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.ClerkSynced)) {
          const redirectURL = new URL(authenticateContext.signInUrl);
          redirectURL.searchParams.append(
            constants.QueryParameters.ClerkRedirectUrl,
            authenticateContext.clerkUrl.toString()
          );
          const headers = new Headers({ [constants.Headers.Location]: redirectURL.toString() });
          return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "", headers);
        }
        const redirectUrl = new URL(authenticateContext.clerkUrl).searchParams.get(
          constants.QueryParameters.ClerkRedirectUrl
        );
        if (authenticateContext.instanceType === "development" && !authenticateContext.isSatellite && redirectUrl) {
          const redirectBackToSatelliteUrl = new URL(redirectUrl);
          if (authenticateContext.devBrowserToken) {
            redirectBackToSatelliteUrl.searchParams.append(
              constants.QueryParameters.DevBrowser,
              authenticateContext.devBrowserToken
            );
          }
          redirectBackToSatelliteUrl.searchParams.append(constants.QueryParameters.ClerkSynced, "true");
          const headers = new Headers({ [constants.Headers.Location]: redirectBackToSatelliteUrl.toString() });
          return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.PrimaryRespondsToSyncing, "", headers);
        }
        if (authenticateContext.instanceType === "development" && authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.DevBrowser)) {
          return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserSync, "");
        }
        if (authenticateContext.instanceType === "development" && !hasDevBrowserToken) {
          return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserMissing, "");
        }
        if (!hasActiveClient && !hasSessionToken) {
          return signedOut({
            tokenType: TokenType.SessionToken,
            authenticateContext,
            reason: AuthErrorReason.SessionTokenAndUATMissing
          });
        }
        if (!hasActiveClient && hasSessionToken) {
          return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenWithoutClientUAT, "");
        }
        if (hasActiveClient && !hasSessionToken) {
          return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.ClientUATWithoutSessionToken, "");
        }
        const { data: decodeResult, errors: decodedErrors } = decodeJwt(authenticateContext.sessionTokenInCookie);
        if (decodedErrors) {
          return handleSessionTokenError(decodedErrors[0], "cookie");
        }
        if (decodeResult.payload.iat < authenticateContext.clientUat) {
          return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenIATBeforeClientUAT, "");
        }
        try {
          const { data, errors } = await verifyToken(authenticateContext.sessionTokenInCookie, authenticateContext);
          if (errors) {
            throw errors[0];
          }
          const signedInRequestState = signedIn({
            tokenType: TokenType.SessionToken,
            authenticateContext,
            sessionClaims: data,
            headers: new Headers(),
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            token: authenticateContext.sessionTokenInCookie
          });
          const shouldForceHandshakeForCrossDomain = !authenticateContext.isSatellite && // We're on primary
          authenticateContext.secFetchDest === "document" && // Document navigation
          authenticateContext.isCrossOriginReferrer() && // Came from different domain
          !authenticateContext.isKnownClerkReferrer() && // Not from Clerk accounts portal or FAPI
          authenticateContext.handshakeRedirectLoopCounter === 0;
          if (shouldForceHandshakeForCrossDomain) {
            return handleMaybeHandshakeStatus(
              authenticateContext,
              AuthErrorReason.PrimaryDomainCrossOriginSync,
              "Cross-origin request from satellite domain requires handshake"
            );
          }
          const authObject = signedInRequestState.toAuth();
          if (authObject.userId) {
            const handshakeRequestState = handleMaybeOrganizationSyncHandshake(authenticateContext, authObject);
            if (handshakeRequestState) {
              return handshakeRequestState;
            }
          }
          return signedInRequestState;
        } catch (err) {
          return handleSessionTokenError(err, "cookie");
        }
        return signedOut({
          tokenType: TokenType.SessionToken,
          authenticateContext,
          reason: AuthErrorReason.UnexpectedError
        });
      }
      __name(authenticateRequestWithTokenInCookie, "authenticateRequestWithTokenInCookie");
      __name2(authenticateRequestWithTokenInCookie, "authenticateRequestWithTokenInCookie");
      async function handleSessionTokenError(err, tokenCarrier) {
        if (!(err instanceof TokenVerificationError)) {
          return signedOut({
            tokenType: TokenType.SessionToken,
            authenticateContext,
            reason: AuthErrorReason.UnexpectedError
          });
        }
        let refreshError;
        if (isRequestEligibleForRefresh(err, authenticateContext, request)) {
          const { data, error: error32 } = await attemptRefresh(authenticateContext);
          if (data) {
            return signedIn({
              tokenType: TokenType.SessionToken,
              authenticateContext,
              sessionClaims: data.jwtPayload,
              headers: data.headers,
              token: data.sessionToken
            });
          }
          if (error32?.cause?.reason) {
            refreshError = error32.cause.reason;
          } else {
            refreshError = RefreshTokenErrorReason.UnexpectedSDKError;
          }
        } else {
          if (request.method !== "GET") {
            refreshError = RefreshTokenErrorReason.NonEligibleNonGet;
          } else if (!authenticateContext.refreshTokenInCookie) {
            refreshError = RefreshTokenErrorReason.NonEligibleNoCookie;
          } else {
            refreshError = null;
          }
        }
        err.tokenCarrier = tokenCarrier;
        const reasonToHandshake = [
          TokenVerificationErrorReason.TokenExpired,
          TokenVerificationErrorReason.TokenNotActiveYet,
          TokenVerificationErrorReason.TokenIatInTheFuture
        ].includes(err.reason);
        if (reasonToHandshake) {
          return handleMaybeHandshakeStatus(
            authenticateContext,
            convertTokenVerificationErrorReasonToAuthErrorReason({ tokenError: err.reason, refreshError }),
            err.getFullMessage()
          );
        }
        return signedOut({
          tokenType: TokenType.SessionToken,
          authenticateContext,
          reason: err.reason,
          message: err.getFullMessage()
        });
      }
      __name(handleSessionTokenError, "handleSessionTokenError");
      __name2(handleSessionTokenError, "handleSessionTokenError");
      function handleMachineError(tokenType, err) {
        if (!(err instanceof MachineTokenVerificationError)) {
          return signedOut({
            tokenType,
            authenticateContext,
            reason: AuthErrorReason.UnexpectedError
          });
        }
        return signedOut({
          tokenType,
          authenticateContext,
          reason: err.code,
          message: err.getFullMessage()
        });
      }
      __name(handleMachineError, "handleMachineError");
      __name2(handleMachineError, "handleMachineError");
      async function authenticateMachineRequestWithTokenInHeader() {
        const { tokenInHeader } = authenticateContext;
        if (!tokenInHeader) {
          return handleSessionTokenError(new Error("Missing token in header"), "header");
        }
        if (!isMachineToken(tokenInHeader)) {
          return signedOut({
            tokenType: acceptsToken,
            authenticateContext,
            reason: AuthErrorReason.TokenTypeMismatch,
            message: ""
          });
        }
        const parsedTokenType = getMachineTokenType(tokenInHeader);
        const mismatchState = checkTokenTypeMismatch(parsedTokenType, acceptsToken, authenticateContext);
        if (mismatchState) {
          return mismatchState;
        }
        const { data, tokenType, errors } = await verifyMachineAuthToken(tokenInHeader, authenticateContext);
        if (errors) {
          return handleMachineError(tokenType, errors[0]);
        }
        return signedIn({
          tokenType,
          authenticateContext,
          machineData: data,
          token: tokenInHeader
        });
      }
      __name(authenticateMachineRequestWithTokenInHeader, "authenticateMachineRequestWithTokenInHeader");
      __name2(authenticateMachineRequestWithTokenInHeader, "authenticateMachineRequestWithTokenInHeader");
      async function authenticateAnyRequestWithTokenInHeader() {
        const { tokenInHeader } = authenticateContext;
        if (!tokenInHeader) {
          return handleSessionTokenError(new Error("Missing token in header"), "header");
        }
        if (isMachineToken(tokenInHeader)) {
          const parsedTokenType = getMachineTokenType(tokenInHeader);
          const mismatchState = checkTokenTypeMismatch(parsedTokenType, acceptsToken, authenticateContext);
          if (mismatchState) {
            return mismatchState;
          }
          const { data: data2, tokenType, errors: errors2 } = await verifyMachineAuthToken(tokenInHeader, authenticateContext);
          if (errors2) {
            return handleMachineError(tokenType, errors2[0]);
          }
          return signedIn({
            tokenType,
            authenticateContext,
            machineData: data2,
            token: tokenInHeader
          });
        }
        const { data, errors } = await verifyToken(tokenInHeader, authenticateContext);
        if (errors) {
          return handleSessionTokenError(errors[0], "header");
        }
        return signedIn({
          tokenType: TokenType.SessionToken,
          authenticateContext,
          sessionClaims: data,
          token: tokenInHeader
        });
      }
      __name(authenticateAnyRequestWithTokenInHeader, "authenticateAnyRequestWithTokenInHeader");
      __name2(authenticateAnyRequestWithTokenInHeader, "authenticateAnyRequestWithTokenInHeader");
      if (Array.isArray(acceptsToken)) {
        if (!isTokenTypeInAcceptedArray(acceptsToken, authenticateContext)) {
          return signedOutInvalidToken();
        }
      }
      if (authenticateContext.tokenInHeader) {
        if (acceptsToken === "any" || Array.isArray(acceptsToken)) {
          return authenticateAnyRequestWithTokenInHeader();
        }
        if (acceptsToken === TokenType.SessionToken) {
          return authenticateRequestWithTokenInHeader();
        }
        return authenticateMachineRequestWithTokenInHeader();
      }
      if (acceptsToken === TokenType.OAuthToken || acceptsToken === TokenType.ApiKey || acceptsToken === TokenType.M2MToken) {
        return signedOut({
          tokenType: acceptsToken,
          authenticateContext,
          reason: "No token in header"
        });
      }
      return authenticateRequestWithTokenInCookie();
    }), "authenticateRequest");
    debugRequestState = /* @__PURE__ */ __name2((params) => {
      const { isSignedIn, isAuthenticated, proxyUrl, reason, message, publishableKey, isSatellite, domain: domain22 } = params;
      return { isSignedIn, isAuthenticated, proxyUrl, reason, message, publishableKey, isSatellite, domain: domain22 };
    }, "debugRequestState");
    convertTokenVerificationErrorReasonToAuthErrorReason = /* @__PURE__ */ __name2(({
      tokenError,
      refreshError
    }) => {
      switch (tokenError) {
        case TokenVerificationErrorReason.TokenExpired:
          return `${AuthErrorReason.SessionTokenExpired}-refresh-${refreshError}`;
        case TokenVerificationErrorReason.TokenNotActiveYet:
          return AuthErrorReason.SessionTokenNBF;
        case TokenVerificationErrorReason.TokenIatInTheFuture:
          return AuthErrorReason.SessionTokenIatInTheFuture;
        default:
          return AuthErrorReason.UnexpectedError;
      }
    }, "convertTokenVerificationErrorReasonToAuthErrorReason");
    defaultOptions2 = {
      secretKey: "",
      machineSecretKey: "",
      jwtKey: "",
      apiUrl: void 0,
      apiVersion: void 0,
      proxyUrl: "",
      publishableKey: "",
      isSatellite: false,
      domain: "",
      audience: ""
    };
    __name2(createAuthenticateRequest, "createAuthenticateRequest");
  }
});
function withLegacyReturn(cb) {
  return async (...args) => {
    const { data, errors } = await cb(...args);
    if (errors) {
      throw errors[0];
    }
    return data;
  };
}
__name(withLegacyReturn, "withLegacyReturn");
var init_chunk_P263NW7Z = __esm({
  "node_modules/@clerk/backend/dist/chunk-P263NW7Z.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name2(withLegacyReturn, "withLegacyReturn");
  }
});
function snakeToCamel(str) {
  return str ? str.replace(/([-_][a-z])/g, (match3) => match3.toUpperCase().replace(/-|_/, "")) : "";
}
__name(snakeToCamel, "snakeToCamel");
function camelToSnake(str) {
  return str ? str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`) : "";
}
__name(camelToSnake, "camelToSnake");
function isTruthy(value) {
  if (typeof value === `boolean`) return value;
  if (value === void 0 || value === null) return false;
  if (typeof value === `string`) {
    if (value.toLowerCase() === `true`) return true;
    if (value.toLowerCase() === `false`) return false;
  }
  const number = parseInt(value, 10);
  if (isNaN(number)) return false;
  if (number > 0) return true;
  return false;
}
__name(isTruthy, "isTruthy");
var createDeepObjectTransformer;
var deepCamelToSnake;
var deepSnakeToCamel;
var init_underscore_DjQrhefX = __esm({
  "node_modules/@clerk/shared/dist/runtime/underscore-DjQrhefX.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name2(snakeToCamel, "snakeToCamel");
    __name2(camelToSnake, "camelToSnake");
    createDeepObjectTransformer = /* @__PURE__ */ __name2((transform) => {
      const deepTransform = /* @__PURE__ */ __name2((obj) => {
        if (!obj) return obj;
        if (Array.isArray(obj)) return obj.map((el) => {
          if (typeof el === "object" || Array.isArray(el)) return deepTransform(el);
          return el;
        });
        const copy = { ...obj };
        const keys = Object.keys(copy);
        for (const oldName of keys) {
          const newName = transform(oldName.toString());
          if (newName !== oldName) {
            copy[newName] = copy[oldName];
            delete copy[oldName];
          }
          if (typeof copy[newName] === "object") copy[newName] = deepTransform(copy[newName]);
        }
        return copy;
      }, "deepTransform");
      return deepTransform;
    }, "createDeepObjectTransformer");
    deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
    deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
    __name2(isTruthy, "isTruthy");
  }
});
function isWindowClerkWithMetadata(clerk) {
  return typeof clerk === "object" && clerk !== null && "constructor" in clerk && typeof clerk.constructor === "function";
}
__name(isWindowClerkWithMetadata, "isWindowClerkWithMetadata");
var DEFAULT_CACHE_TTL_MS;
var TelemetryEventThrottler;
var LocalStorageThrottlerCache;
var InMemoryThrottlerCache;
var VALID_LOG_LEVELS;
var DEFAULT_CONFIG;
var TelemetryCollector;
var init_telemetry_wqMDWlvR = __esm({
  "node_modules/@clerk/shared/dist/runtime/telemetry-wqMDWlvR.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_keys_YNv6yjKk();
    init_underscore_DjQrhefX();
    DEFAULT_CACHE_TTL_MS = 864e5;
    TelemetryEventThrottler = class {
      static {
        __name(this, "TelemetryEventThrottler");
      }
      static {
        __name2(this, "TelemetryEventThrottler");
      }
      #cache;
      #cacheTtl = DEFAULT_CACHE_TTL_MS;
      constructor(cache2) {
        this.#cache = cache2;
      }
      isEventThrottled(payload) {
        const now = Date.now();
        const key = this.#generateKey(payload);
        const entry = this.#cache.getItem(key);
        if (!entry) {
          this.#cache.setItem(key, now);
          return false;
        }
        if (now - entry > this.#cacheTtl) {
          this.#cache.setItem(key, now);
          return false;
        }
        return true;
      }
      /**
      * Generates a consistent unique key for telemetry events by sorting payload properties.
      * This ensures that payloads with identical content in different orders produce the same key.
      */
      #generateKey(event) {
        const { sk: _sk, pk: _pk, payload, ...rest } = event;
        const sanitizedEvent = {
          ...payload,
          ...rest
        };
        return JSON.stringify(Object.keys({
          ...payload,
          ...rest
        }).sort().map((key) => sanitizedEvent[key]));
      }
    };
    LocalStorageThrottlerCache = class {
      static {
        __name(this, "LocalStorageThrottlerCache");
      }
      static {
        __name2(this, "LocalStorageThrottlerCache");
      }
      #storageKey = "clerk_telemetry_throttler";
      getItem(key) {
        return this.#getCache()[key];
      }
      setItem(key, value) {
        try {
          const cache2 = this.#getCache();
          cache2[key] = value;
          localStorage.setItem(this.#storageKey, JSON.stringify(cache2));
        } catch (err) {
          if (err instanceof DOMException && (err.name === "QuotaExceededError" || err.name === "NS_ERROR_DOM_QUOTA_REACHED") && localStorage.length > 0) localStorage.removeItem(this.#storageKey);
        }
      }
      removeItem(key) {
        try {
          const cache2 = this.#getCache();
          delete cache2[key];
          localStorage.setItem(this.#storageKey, JSON.stringify(cache2));
        } catch {
        }
      }
      #getCache() {
        try {
          const cacheString = localStorage.getItem(this.#storageKey);
          if (!cacheString) return {};
          return JSON.parse(cacheString);
        } catch {
          return {};
        }
      }
      static isSupported() {
        return typeof window !== "undefined" && !!window.localStorage;
      }
    };
    InMemoryThrottlerCache = class {
      static {
        __name(this, "InMemoryThrottlerCache");
      }
      static {
        __name2(this, "InMemoryThrottlerCache");
      }
      #cache = /* @__PURE__ */ new Map();
      #maxSize = 1e4;
      getItem(key) {
        if (this.#cache.size > this.#maxSize) {
          this.#cache.clear();
          return;
        }
        return this.#cache.get(key);
      }
      setItem(key, value) {
        this.#cache.set(key, value);
      }
      removeItem(key) {
        this.#cache.delete(key);
      }
    };
    __name2(isWindowClerkWithMetadata, "isWindowClerkWithMetadata");
    VALID_LOG_LEVELS = /* @__PURE__ */ new Set([
      "error",
      "warn",
      "info",
      "debug",
      "trace"
    ]);
    DEFAULT_CONFIG = {
      samplingRate: 1,
      maxBufferSize: 5,
      endpoint: "https://clerk-telemetry.com"
    };
    TelemetryCollector = class {
      static {
        __name(this, "TelemetryCollector");
      }
      static {
        __name2(this, "TelemetryCollector");
      }
      #config;
      #eventThrottler;
      #metadata = {};
      #buffer = [];
      #pendingFlush = null;
      constructor(options) {
        this.#config = {
          maxBufferSize: options.maxBufferSize ?? DEFAULT_CONFIG.maxBufferSize,
          samplingRate: options.samplingRate ?? DEFAULT_CONFIG.samplingRate,
          perEventSampling: options.perEventSampling ?? true,
          disabled: options.disabled ?? false,
          debug: options.debug ?? false,
          endpoint: DEFAULT_CONFIG.endpoint
        };
        if (!options.clerkVersion && typeof window === "undefined") this.#metadata.clerkVersion = "";
        else this.#metadata.clerkVersion = options.clerkVersion ?? "";
        this.#metadata.sdk = options.sdk;
        this.#metadata.sdkVersion = options.sdkVersion;
        this.#metadata.publishableKey = options.publishableKey ?? "";
        const parsedKey = parsePublishableKey(options.publishableKey);
        if (parsedKey) this.#metadata.instanceType = parsedKey.instanceType;
        if (options.secretKey) this.#metadata.secretKey = options.secretKey.substring(0, 16);
        this.#eventThrottler = new TelemetryEventThrottler(LocalStorageThrottlerCache.isSupported() ? new LocalStorageThrottlerCache() : new InMemoryThrottlerCache());
      }
      get isEnabled() {
        if (this.#metadata.instanceType !== "development") return false;
        if (this.#config.disabled || typeof process !== "undefined" && process.env && isTruthy(process.env.CLERK_TELEMETRY_DISABLED)) return false;
        if (typeof window !== "undefined" && !!window?.navigator?.webdriver) return false;
        return true;
      }
      get isDebug() {
        return this.#config.debug || typeof process !== "undefined" && process.env && isTruthy(process.env.CLERK_TELEMETRY_DEBUG);
      }
      record(event) {
        try {
          const preparedPayload = this.#preparePayload(event.event, event.payload);
          this.#logEvent(preparedPayload.event, preparedPayload);
          if (!this.#shouldRecord(preparedPayload, event.eventSamplingRate)) return;
          this.#buffer.push({
            kind: "event",
            value: preparedPayload
          });
          this.#scheduleFlush();
        } catch (error32) {
          console.error("[clerk/telemetry] Error recording telemetry event", error32);
        }
      }
      /**
      * Records a telemetry log entry if logging is enabled and not in debug mode.
      *
      * @param entry - The telemetry log entry to record.
      */
      recordLog(entry) {
        try {
          if (!this.#shouldRecordLog(entry)) return;
          const levelIsValid = typeof entry?.level === "string" && VALID_LOG_LEVELS.has(entry.level);
          const messageIsValid = typeof entry?.message === "string" && entry.message.trim().length > 0;
          let normalizedTimestamp = null;
          const timestampInput = entry?.timestamp;
          if (typeof timestampInput === "number" || typeof timestampInput === "string") {
            const candidate = new Date(timestampInput);
            if (!Number.isNaN(candidate.getTime())) normalizedTimestamp = candidate;
          }
          if (!levelIsValid || !messageIsValid || normalizedTimestamp === null) {
            if (this.isDebug && typeof console !== "undefined") console.warn("[clerk/telemetry] Dropping invalid telemetry log entry", {
              levelIsValid,
              messageIsValid,
              timestampIsValid: normalizedTimestamp !== null
            });
            return;
          }
          const sdkMetadata = this.#getSDKMetadata();
          const logData = {
            sdk: sdkMetadata.name,
            sdkv: sdkMetadata.version,
            cv: this.#metadata.clerkVersion ?? "",
            lvl: entry.level,
            msg: entry.message,
            ts: normalizedTimestamp.toISOString(),
            pk: this.#metadata.publishableKey || null,
            payload: this.#sanitizeContext(entry.context)
          };
          this.#buffer.push({
            kind: "log",
            value: logData
          });
          this.#scheduleFlush();
        } catch (error32) {
          console.error("[clerk/telemetry] Error recording telemetry log entry", error32);
        }
      }
      #shouldRecord(preparedPayload, eventSamplingRate) {
        return this.isEnabled && !this.isDebug && this.#shouldBeSampled(preparedPayload, eventSamplingRate);
      }
      #shouldRecordLog(_entry) {
        return true;
      }
      #shouldBeSampled(preparedPayload, eventSamplingRate) {
        const randomSeed = Math.random();
        if (!(randomSeed <= this.#config.samplingRate && (this.#config.perEventSampling === false || typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate))) return false;
        return !this.#eventThrottler.isEventThrottled(preparedPayload);
      }
      #scheduleFlush() {
        if (typeof window === "undefined") {
          this.#flush();
          return;
        }
        if (this.#buffer.length >= this.#config.maxBufferSize) {
          if (this.#pendingFlush) if (typeof cancelIdleCallback !== "undefined") cancelIdleCallback(Number(this.#pendingFlush));
          else clearTimeout(Number(this.#pendingFlush));
          this.#flush();
          return;
        }
        if (this.#pendingFlush) return;
        if ("requestIdleCallback" in window) this.#pendingFlush = requestIdleCallback(() => {
          this.#flush();
          this.#pendingFlush = null;
        });
        else this.#pendingFlush = setTimeout(() => {
          this.#flush();
          this.#pendingFlush = null;
        }, 0);
      }
      #flush() {
        const itemsToSend = [...this.#buffer];
        this.#buffer = [];
        this.#pendingFlush = null;
        if (itemsToSend.length === 0) return;
        const eventsToSend = itemsToSend.filter((item) => item.kind === "event").map((item) => item.value);
        const logsToSend = itemsToSend.filter((item) => item.kind === "log").map((item) => item.value);
        if (eventsToSend.length > 0) {
          const eventsUrl = new URL("/v1/event", this.#config.endpoint);
          fetch(eventsUrl, {
            headers: { "Content-Type": "application/json" },
            keepalive: true,
            method: "POST",
            body: JSON.stringify({ events: eventsToSend })
          }).catch(() => void 0);
        }
        if (logsToSend.length > 0) {
          const logsUrl = new URL("/v1/logs", this.#config.endpoint);
          fetch(logsUrl, {
            headers: { "Content-Type": "application/json" },
            keepalive: true,
            method: "POST",
            body: JSON.stringify({ logs: logsToSend })
          }).catch(() => void 0);
        }
      }
      /**
      * If running in debug mode, log the event and its payload to the console.
      */
      #logEvent(event, payload) {
        if (!this.isDebug) return;
        if (typeof console.groupCollapsed !== "undefined") {
          console.groupCollapsed("[clerk/telemetry]", event);
          console.log(payload);
          console.groupEnd();
        } else console.log("[clerk/telemetry]", event, payload);
      }
      /**
      * If in browser, attempt to lazily grab the SDK metadata from the Clerk singleton, otherwise fallback to the initially passed in values.
      *
      * This is necessary because the sdkMetadata can be set by the host SDK after the TelemetryCollector is instantiated.
      */
      #getSDKMetadata() {
        const sdkMetadata = {
          name: this.#metadata.sdk,
          version: this.#metadata.sdkVersion
        };
        if (typeof window !== "undefined") {
          const windowWithClerk = window;
          if (windowWithClerk.Clerk) {
            const windowClerk = windowWithClerk.Clerk;
            if (isWindowClerkWithMetadata(windowClerk) && windowClerk.constructor.sdkMetadata) {
              const { name, version: version22 } = windowClerk.constructor.sdkMetadata;
              if (name !== void 0) sdkMetadata.name = name;
              if (version22 !== void 0) sdkMetadata.version = version22;
            }
          }
        }
        return sdkMetadata;
      }
      /**
      * Append relevant metadata from the Clerk singleton to the event payload.
      */
      #preparePayload(event, payload) {
        const sdkMetadata = this.#getSDKMetadata();
        return {
          event,
          cv: this.#metadata.clerkVersion ?? "",
          it: this.#metadata.instanceType ?? "",
          sdk: sdkMetadata.name,
          sdkv: sdkMetadata.version,
          ...this.#metadata.publishableKey ? { pk: this.#metadata.publishableKey } : {},
          ...this.#metadata.secretKey ? { sk: this.#metadata.secretKey } : {},
          payload
        };
      }
      /**
      * Best-effort sanitization of the context payload. Returns a plain object with JSON-serializable
      * values or null when the input is missing or not serializable. Arrays are not accepted.
      */
      #sanitizeContext(context22) {
        if (context22 === null || typeof context22 === "undefined") return null;
        if (typeof context22 !== "object") return null;
        try {
          const cleaned = JSON.parse(JSON.stringify(context22));
          if (cleaned && typeof cleaned === "object" && !Array.isArray(cleaned)) return cleaned;
          return null;
        } catch {
          return null;
        }
      }
    };
  }
});
var init_telemetry = __esm({
  "node_modules/@clerk/shared/dist/runtime/telemetry.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_constants_ByUssRbE();
    init_isomorphicAtob_DybBXGFR();
    init_isomorphicBtoa_Dr7WubZv();
    init_keys_YNv6yjKk();
    init_underscore_DjQrhefX();
    init_telemetry_wqMDWlvR();
  }
});
function createClerkClient(options) {
  const opts = { ...options };
  const apiClient = createBackendApiClient(opts);
  const requestState = createAuthenticateRequest({ options: opts, apiClient });
  const telemetry = new TelemetryCollector({
    publishableKey: opts.publishableKey,
    secretKey: opts.secretKey,
    samplingRate: 0.1,
    ...opts.sdkMetadata ? { sdk: opts.sdkMetadata.name, sdkVersion: opts.sdkMetadata.version } : {},
    ...opts.telemetry || {}
  });
  return {
    ...apiClient,
    ...requestState,
    telemetry
  };
}
__name(createClerkClient, "createClerkClient");
var verifyToken2;
var init_dist = __esm({
  "node_modules/@clerk/backend/dist/index.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_chunk_UOT6YP2O();
    init_chunk_YBVFDYDR();
    init_chunk_P263NW7Z();
    init_chunk_KDNHJOF3();
    init_chunk_I4B6KCGC();
    init_chunk_TOROEX6P();
    init_telemetry();
    verifyToken2 = withLegacyReturn(verifyToken);
    __name2(createClerkClient, "createClerkClient");
  }
});
var init_internal = __esm({
  "node_modules/@clerk/backend/dist/internal.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_chunk_UOT6YP2O();
    init_chunk_YBVFDYDR();
    init_chunk_KDNHJOF3();
    init_chunk_I4B6KCGC();
    init_chunk_TOROEX6P();
  }
});
var env22;
var knownUserAgents;
var getRuntimeKey;
var checkUserAgentEquals;
var init_adapter = __esm({
  "node_modules/hono/dist/helper/adapter/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    env22 = /* @__PURE__ */ __name2((c, runtime2) => {
      const global2 = globalThis;
      const globalEnv = global2?.process?.env;
      runtime2 ??= getRuntimeKey();
      const runtimeEnvHandlers = {
        bun: /* @__PURE__ */ __name2(() => globalEnv, "bun"),
        node: /* @__PURE__ */ __name2(() => globalEnv, "node"),
        "edge-light": /* @__PURE__ */ __name2(() => globalEnv, "edge-light"),
        deno: /* @__PURE__ */ __name2(() => {
          return Deno.env.toObject();
        }, "deno"),
        workerd: /* @__PURE__ */ __name2(() => c.env, "workerd"),
        // On Fastly Compute, you can use the ConfigStore to manage user-defined data.
        fastly: /* @__PURE__ */ __name2(() => ({}), "fastly"),
        other: /* @__PURE__ */ __name2(() => ({}), "other")
      };
      return runtimeEnvHandlers[runtime2]();
    }, "env");
    knownUserAgents = {
      deno: "Deno",
      bun: "Bun",
      workerd: "Cloudflare-Workers",
      node: "Node.js"
    };
    getRuntimeKey = /* @__PURE__ */ __name2(() => {
      const global2 = globalThis;
      const userAgentSupported = typeof navigator !== "undefined" && true;
      if (userAgentSupported) {
        for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
          if (checkUserAgentEquals(userAgent)) {
            return runtimeKey;
          }
        }
      }
      if (typeof global2?.EdgeRuntime === "string") {
        return "edge-light";
      }
      if (global2?.fastly !== void 0) {
        return "fastly";
      }
      if (global2?.process?.release?.name === "node") {
        return "node";
      }
      return "other";
    }, "getRuntimeKey");
    checkUserAgentEquals = /* @__PURE__ */ __name2((platform22) => {
      const userAgent = "Cloudflare-Workers";
      return userAgent.startsWith(platform22);
    }, "checkUserAgentEquals");
  }
});
var dist_exports = {};
__export(dist_exports, {
  clerkMiddleware: /* @__PURE__ */ __name(() => clerkMiddleware, "clerkMiddleware"),
  getAuth: /* @__PURE__ */ __name(() => getAuth, "getAuth")
});
var getAuth;
var clerkMiddleware;
var init_dist2 = __esm({
  "node_modules/@hono/clerk-auth/dist/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_dist();
    init_internal();
    init_deprecated();
    init_adapter();
    getAuth = /* @__PURE__ */ __name2(((c, options) => {
      deprecated("@hono/clerk-auth", 'Use `@clerk/hono` instead.\n\n- import { clerkMiddleware, getAuth } from "@hono/clerk-auth"\n+ import { clerkMiddleware, getAuth } from "@clerk/hono"');
      return c.get("clerkAuth")(options);
    }), "getAuth");
    clerkMiddleware = /* @__PURE__ */ __name2((options) => {
      deprecated("@hono/clerk-auth", 'Use `@clerk/hono` instead.\n\n- import { clerkMiddleware, getAuth } from "@hono/clerk-auth"\n+ import { clerkMiddleware, getAuth } from "@clerk/hono"');
      return async (c, next) => {
        const clerkEnv = env22(c);
        const { secretKey, publishableKey, apiUrl, apiVersion, ...rest } = options || {
          secretKey: clerkEnv.CLERK_SECRET_KEY || "",
          publishableKey: clerkEnv.CLERK_PUBLISHABLE_KEY || "",
          apiUrl: clerkEnv.CLERK_API_URL,
          apiVersion: clerkEnv.CLERK_API_VERSION
        };
        if (!secretKey) throw new Error("Missing Clerk Secret key");
        if (!publishableKey) throw new Error("Missing Clerk Publishable key");
        const clerkClient = createClerkClient({
          ...rest,
          apiUrl,
          apiVersion,
          secretKey,
          publishableKey
        });
        const requestState = await clerkClient.authenticateRequest(c.req.raw, {
          ...rest,
          secretKey,
          publishableKey,
          acceptsToken: "any"
        });
        if (requestState.headers) {
          requestState.headers.forEach((value, key) => {
            c.res.headers.append(key, value);
          });
          const locationHeader = requestState.headers.get("location");
          if (locationHeader) return c.redirect(locationHeader, 307);
          else if (requestState.status === "handshake") throw new Error("Clerk: unexpected handshake without redirect");
        }
        const authObjectFn = /* @__PURE__ */ __name2(((options$1) => getAuthObjectForAcceptedToken({
          authObject: requestState.toAuth(options$1),
          acceptsToken: "any"
        })), "authObjectFn");
        c.set("clerkAuth", authObjectFn);
        c.set("clerk", clerkClient);
        await next();
      };
    }, "clerkMiddleware");
  }
});
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var compose = /* @__PURE__ */ __name2((middleware, onError, onNotFound) => {
  return (context22, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context22.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context22, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context22.error = err;
            res = await onError(err, context22);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context22.finalized === false && onNotFound) {
          res = await onNotFound(context22);
        }
      }
      if (res && (context22.finalized === false || isError)) {
        context22.res = res;
      }
      return context22;
    }
    __name(dispatch, "dispatch");
    __name2(dispatch, "dispatch");
  };
}, "compose");
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var parseBody = /* @__PURE__ */ __name2(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
__name2(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
__name2(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name2((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name2((form, key, value) => {
  if (/(?:^|\.)__proto__\./.test(key)) {
    return;
  }
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var splitPath = /* @__PURE__ */ __name2((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name2((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name2((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match3, index) => {
    const mark = `@${index}`;
    groups.push([mark, match3]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name2((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name2((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match3 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match3) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match3[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match3[1], new RegExp(`^${match3[2]}(?=/${next})`)] : [label, match3[1], new RegExp(`^${match3[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match3[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name2((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match3) => {
      try {
        return decoder(match3);
      } catch {
        return match3;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name2((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name2((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name2((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name2((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name2((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath32 = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath32 += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath32 === "") {
          results.push("/");
        } else {
          results.push(basePath32);
        }
        const optionalSegment = segment.replace("?", "");
        basePath32 += "/" + optionalSegment;
        results.push(basePath32);
      } else {
        basePath32 += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name2((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name2((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name2((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;
var tryDecodeURIComponent = /* @__PURE__ */ __name2((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  static {
    __name2(this, "HonoRequest");
  }
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name2((key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  }, "#cachedBody");
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * `.bytes()` parses the request body as a `Uint8Array`.
   *
   * @see {@link https://hono.dev/docs/api/request#bytes}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.bytes()
   * })
   * ```
   */
  bytes() {
    return this.#cachedBody("arrayBuffer").then((buffer) => new Uint8Array(buffer));
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name2((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name2(async (str, phase, preserveCallbacks, context22, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context: context22 }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context22, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name2((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var createResponseInstance = /* @__PURE__ */ __name2((body, init) => new Response(body, init), "createResponseInstance");
var Context = class {
  static {
    __name(this, "Context");
  }
  static {
    __name2(this, "Context");
  }
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = /* @__PURE__ */ __name2((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = /* @__PURE__ */ __name2((layout2) => this.#layout = layout2, "setLayout");
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = /* @__PURE__ */ __name2(() => this.#layout, "getLayout");
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = /* @__PURE__ */ __name2((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = /* @__PURE__ */ __name2((name, value, options) => {
    if (this.finalized) {
      this.#res = createResponseInstance(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  }, "header");
  status = /* @__PURE__ */ __name2((status) => {
    this.#status = status;
  }, "status");
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = /* @__PURE__ */ __name2((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = /* @__PURE__ */ __name2((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k, v);
        } else {
          responseHeaders.delete(k);
          for (const v2 of v) {
            responseHeaders.append(k, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = /* @__PURE__ */ __name2((...args) => this.#newResponse(...args), "newResponse");
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = /* @__PURE__ */ __name2((data, arg, headers) => this.#newResponse(data, arg, headers), "body");
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = /* @__PURE__ */ __name2((text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  }, "text");
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = /* @__PURE__ */ __name2((object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  }, "json");
  html = /* @__PURE__ */ __name2((html, arg, headers) => {
    const res = /* @__PURE__ */ __name2((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  }, "html");
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = /* @__PURE__ */ __name2((location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = /* @__PURE__ */ __name2(() => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  }, "notFound");
};
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
  static {
    __name2(this, "UnsupportedPathError");
  }
};
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";
var notFoundHandler = /* @__PURE__ */ __name2((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name2((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class _Hono {
  static {
    __name(this, "_Hono");
  }
  static {
    __name2(this, "_Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app11) {
    const subApp = this.basePath(path);
    app11.routes.map((r) => {
      let handler;
      if (app11.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name2(async (c, next) => (await compose([], app11.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler, r.basePath);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = /* @__PURE__ */ __name2((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = /* @__PURE__ */ __name2((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name2((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = this.getPath(request).slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name2(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler, baseRoutePath) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = {
      basePath: baseRoutePath !== void 0 ? mergePath(this._basePath, baseRoutePath) : this._basePath,
      path,
      method,
      handler
    };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env3, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env3, "GET")))();
    }
    const path = this.getPath(request, { env: env3 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env3,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context22 = await composed(c);
        if (!context22.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context22.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = /* @__PURE__ */ __name2((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = /* @__PURE__ */ __name2((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = /* @__PURE__ */ __name2(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match22 = /* @__PURE__ */ __name2(((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }), "match2");
  this.match = match22;
  return match22(method, path);
}
__name(match, "match");
__name2(match, "match");
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
__name2(compareKey, "compareKey");
var Node = class _Node {
  static {
    __name(this, "_Node");
  }
  static {
    __name2(this, "_Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context22, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new _Node();
        if (name !== "") {
          node.#varIndex = context22.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new _Node();
      }
    }
    node.insert(restTokens, index, paramMap, context22, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  static {
    __name2(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_2, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_2, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
__name2(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
__name2(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
__name2(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
__name2(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  static {
    __name2(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  static {
    __name2(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParams = /* @__PURE__ */ Object.create(null);
var hasChildren = /* @__PURE__ */ __name2((children) => {
  for (const _2 in children) {
    return true;
  }
  return false;
}, "hasChildren");
var Node2 = class _Node2 {
  static {
    __name(this, "_Node2");
  }
  static {
    __name2(this, "_Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new _Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            }
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              this.#pushHandlerSets(handlerSets, astNode, method, node.#params);
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          if (matcher instanceof RegExp) {
            if (partOffsets === null) {
              partOffsets = new Array(len);
              let offset = path[0] === "/" ? 1 : 0;
              for (let p = 0; p < len; p++) {
                partOffsets[p] = offset;
                offset += parts[p].length + 1;
              }
            }
            const restPathString = path.substring(partOffsets[i]);
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (hasChildren(child.#children)) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  params,
                  node.#params
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  static {
    __name2(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono2");
  }
  static {
    __name2(this, "Hono");
  }
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var cors = /* @__PURE__ */ __name2((options) => {
  const opts = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: [],
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return optsAllowMethods;
    } else if (Array.isArray(optsAllowMethods)) {
      return () => optsAllowMethods;
    } else {
      return () => [];
    }
  })(opts.allowMethods);
  return /* @__PURE__ */ __name2(/* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    __name2(set, "set");
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*") {
        set("Vary", "Origin");
      }
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods.length) {
        set("Access-Control-Allow-Methods", allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*") {
      c.header("Vary", "Origin", { append: true });
    }
  }, "cors2"), "cors2");
}, "cors");
init_dist2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var toNumber = /* @__PURE__ */ __name2((value) => {
  if (value === null || value === void 0) return 0;
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : 0;
}, "toNumber");
var toMoneyString = /* @__PURE__ */ __name2((value) => value.toFixed(2), "toMoneyString");
var generateAccountNumber = /* @__PURE__ */ __name2(() => {
  let digits = "";
  for (let i = 0; i < 19; i++) {
    digits += Math.floor(Math.random() * 10).toString();
  }
  return `CH${digits}`;
}, "generateAccountNumber");
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function send22(options, fromEmail, fromPassword) {
  try {
    const credentials = btoa(`${fromEmail}:${fromPassword}`);
    const body = new URLSearchParams({
      from: `GT Swiss Bank <${fromEmail}>`,
      to: options.to,
      subject: options.subject,
      htmlbody: options.html
    });
    const res = await fetch("https://mail.zoho.com/api/accounts/me/messages", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body.toString()
    });
    if (!res.ok) console.error("Email failed:", res.status, await res.text());
  } catch (err) {
    console.error("Email error:", err);
  }
}
__name(send22, "send2");
__name2(send22, "send");
async function sendRoutineEmail(options, env3) {
  await send22(options, env3.ZOHO_SUPPORT_EMAIL, env3.ZOHO_SUPPORT_PASSWORD);
}
__name(sendRoutineEmail, "sendRoutineEmail");
__name2(sendRoutineEmail, "sendRoutineEmail");
async function sendPriorityEmail(options, env3) {
  await send22(options, env3.ZOHO_EMAIL, env3.ZOHO_PASSWORD);
}
__name(sendPriorityEmail, "sendPriorityEmail");
__name2(sendPriorityEmail, "sendPriorityEmail");
var year = /* @__PURE__ */ __name2(() => (/* @__PURE__ */ new Date()).getFullYear(), "year");
var layout = /* @__PURE__ */ __name2((content) => `
<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
  <div style="background:#D52B1E;padding:24px;text-align:center">
    <h1 style="color:white;margin:0;font-family:Georgia,serif;letter-spacing:1px">GT Swiss Bank</h1>
  </div>
  <div style="padding:32px;background:#FAF6F0">${content}</div>
  <div style="padding:16px;text-align:center;color:#5b6370;font-size:12px;background:#f0ebe4">
    \xA9 ${year()} GT Swiss Bank \xB7 <a href="mailto:infosupport@gtswissbank.com" style="color:#D52B1E">infosupport@gtswissbank.com</a>
  </div>
</div>`, "layout");
var emailTemplates = {
  // ROUTINE — sent via Infosupport
  customerCreated: /* @__PURE__ */ __name2((name) => ({
    subject: "Welcome to GT Swiss Bank",
    html: layout(`
      <h2 style="color:#1d1f24">Welcome, ${name}</h2>
      <p style="color:#5b6370">Your customer profile has been successfully created. Our team will be in touch to complete your onboarding process.</p>
      <p style="color:#5b6370">For any questions, reply to this email or contact <a href="mailto:infosupport@gtswissbank.com" style="color:#D52B1E">infosupport@gtswissbank.com</a>.</p>
    `)
  }), "customerCreated"),
  accountOpened: /* @__PURE__ */ __name2((name, accountNumber, accountType, currency) => ({
    subject: "Your New Account Has Been Opened",
    html: layout(`
      <h2 style="color:#1d1f24">Account Opened Successfully</h2>
      <p style="color:#5b6370">Dear ${name}, your new <strong>${accountType}</strong> account (${currency}) has been opened.</p>
      <div style="background:white;border:1px solid #e8e3dd;padding:16px;margin:16px 0;border-left:4px solid #D52B1E">
        <p style="margin:0;color:#1d1f24;font-size:18px;letter-spacing:2px"><strong>${accountNumber}</strong></p>
        <p style="margin:4px 0 0;color:#5b6370;font-size:12px">Account Number</p>
      </div>
      <p style="color:#5b6370">Please keep your account number safe and do not share it with anyone.</p>
    `)
  }), "accountOpened"),
  // PRIORITY — sent via AccountManager
  loanApproved: /* @__PURE__ */ __name2((name, amount, currency) => ({
    subject: "\u2713 Your Loan Application Has Been Approved",
    html: layout(`
      <h2 style="color:#1d1f24">Loan Approved</h2>
      <p style="color:#5b6370">Dear ${name}, we are pleased to inform you that your loan application has been <strong style="color:#16a34a">approved</strong>.</p>
      <div style="background:white;border:1px solid #e8e3dd;padding:16px;margin:16px 0;border-left:4px solid #16a34a">
        <p style="margin:0;color:#1d1f24;font-size:22px"><strong>${currency} ${amount.toLocaleString()}</strong></p>
        <p style="margin:4px 0 0;color:#5b6370;font-size:12px">Disbursed to your account</p>
      </div>
      <p style="color:#5b6370">The funds have been credited to your linked account. Please log in to verify the transaction.</p>
      <p style="color:#5b6370">For assistance, contact <a href="mailto:AccountManager@gtswissbank.com" style="color:#D52B1E">AccountManager@gtswissbank.com</a>.</p>
    `)
  }), "loanApproved"),
  loanRejected: /* @__PURE__ */ __name2((name, notes) => ({
    subject: "Update on Your Loan Application",
    html: layout(`
      <h2 style="color:#1d1f24">Loan Application Update</h2>
      <p style="color:#5b6370">Dear ${name}, after careful review, we are unable to approve your loan application at this time.</p>
      ${notes ? `<div style="background:white;border:1px solid #e8e3dd;padding:16px;margin:16px 0"><p style="margin:0;color:#5b6370"><strong>Notes from your Account Manager:</strong><br>${notes}</p></div>` : ""}
      <p style="color:#5b6370">To discuss your application or explore alternatives, please contact <a href="mailto:AccountManager@gtswissbank.com" style="color:#D52B1E">AccountManager@gtswissbank.com</a>.</p>
    `)
  }), "loanRejected"),
  accountRestricted: /* @__PURE__ */ __name2((name, accountNumber, reason) => ({
    subject: "Important: Account Restriction Notice",
    html: layout(`
      <h2 style="color:#1d1f24">Account Restriction Notice</h2>
      <p style="color:#5b6370">Dear ${name}, your account ending in <strong>${accountNumber.slice(-6)}</strong> has been temporarily restricted.</p>
      ${reason ? `<p style="color:#5b6370"><strong>Reason:</strong> ${reason}</p>` : ""}
      <p style="color:#5b6370">Please contact your Account Manager immediately at <a href="mailto:AccountManager@gtswissbank.com" style="color:#D52B1E">AccountManager@gtswissbank.com</a>.</p>
    `)
  }), "accountRestricted")
};
var app = new Hono2();
var serialize = /* @__PURE__ */ __name2((c) => ({
  id: c.id,
  fullName: c.full_name,
  email: c.email,
  phone: c.phone,
  dateOfBirth: c.date_of_birth,
  address: c.address,
  status: c.status,
  kycStatus: c.kyc_status ?? "not_started",
  createdAt: c.created_at
}), "serialize");
app.get("/", async (c) => {
  const { search, status } = c.req.query();
  let sql = "SELECT * FROM customers WHERE 1=1";
  const params = [];
  if (search) {
    sql += " AND (full_name LIKE ? OR email LIKE ? OR phone LIKE ?)";
    const term = `%${search}%`;
    params.push(term, term, term);
  }
  if (status) {
    sql += " AND status = ?";
    params.push(status);
  }
  sql += " ORDER BY created_at DESC";
  const { results } = await c.env.DB.prepare(sql).bind(...params).all();
  return c.json(results.map(serialize));
});
app.post("/", async (c) => {
  const body = await c.req.json();
  const { fullName, email, phone, dateOfBirth, address } = body;
  if (!fullName || !email || !phone || !dateOfBirth || !address) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  const result = await c.env.DB.prepare(
    "INSERT INTO customers (full_name, email, phone, date_of_birth, address, status) VALUES (?, ?, ?, ?, ?, 'active') RETURNING *"
  ).bind(fullName, email, phone, dateOfBirth, address).first();
  if (result?.email) {
    const welcomeHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
            <h2 style="color:#1a1a2e;">Welcome to GT Swiss Bank</h2>
            <p>Dear ${result.full_name},</p>
            <p>Your customer profile has been created successfully.</p>
            <p>Our team will review your application and activate your account shortly.</p>
            <hr/><small style="color:#999;">Do not reply to this email.</small>
        </div>`;
    await sendEmail(c.env, {
      to: result.email,
      subject: "Welcome to GT Swiss Bank",
      html: welcomeHtml
    }).catch(console.error);
  }
  const tmpl = emailTemplates.customerCreated(fullName);
  await sendRoutineEmail({ to: email, ...tmpl }, c.env);
  return c.json(serialize(result), 201);
});
app.get("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const customer = await c.env.DB.prepare("SELECT * FROM customers WHERE id = ?").bind(id).first();
  if (!customer) return c.json({ error: "Customer not found" }, 404);
  const { results: accounts } = await c.env.DB.prepare(
    "SELECT a.*, c.full_name as customer_name FROM accounts a JOIN customers c ON a.customer_id = c.id WHERE a.customer_id = ? ORDER BY a.opened_at DESC"
  ).bind(id).all();
  const { results: loans } = await c.env.DB.prepare(
    "SELECT l.*, c.full_name as customer_name, a.account_number FROM loans l JOIN customers c ON l.customer_id = c.id JOIN accounts a ON l.account_id = a.id WHERE l.customer_id = ? ORDER BY l.applied_at DESC"
  ).bind(id).all();
  const c2 = customer;
  return c.json({
    customer: serialize(c2),
    accounts: accounts.map((a) => serializeAccount(a))
  });
});
app.delete("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const existing = await c.env.DB.prepare("SELECT id FROM customers WHERE id = ?").bind(id).first();
  if (!existing) return c.json({ error: "Customer not found" }, 404);
  await c.env.DB.prepare("DELETE FROM customers WHERE id = ?").bind(id).run();
  return c.json({ success: true });
});
app.patch("/:id/password", async (c) => {
  const id = Number(c.req.param("id"));
  const { password } = await c.req.json();
  if (!password || password.length < 6) return c.json({ error: "Password must be at least 6 characters" }, 400);
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(password));
  const passwordHash = Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  const updated = await c.env.DB.prepare(
    "UPDATE customers SET password_hash = ? WHERE id = ? RETURNING id"
  ).bind(passwordHash, id).first();
  if (!updated) return c.json({ error: "Customer not found" }, 404);
  return c.json({ success: true });
});
app.patch("/:id/status", async (c) => {
  const id = Number(c.req.param("id"));
  const { status } = await c.req.json();
  if (!["active", "restricted", "closed", "pending"].includes(status)) {
    return c.json({ error: "Invalid status" }, 400);
  }
  const updated = await c.env.DB.prepare(
    "UPDATE customers SET status = ? WHERE id = ? RETURNING *"
  ).bind(status, id).first();
  if (!updated) return c.json({ error: "Customer not found" }, 404);
  return c.json(serialize(updated));
});
var serializeAccount = /* @__PURE__ */ __name2((a) => ({
  id: a.id,
  customerId: a.customer_id,
  customerName: a.customer_name,
  accountNumber: a.account_number,
  accountType: a.account_type,
  currency: a.currency,
  balance: toNumber(a.balance),
  status: a.status,
  openedAt: a.opened_at
}), "serializeAccount");
var customers_default = app;
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var app2 = new Hono2();
var serializeAccount2 = /* @__PURE__ */ __name2((a) => ({
  id: a.id,
  customerId: a.customer_id,
  customerName: a.customer_name,
  accountNumber: a.account_number,
  accountType: a.account_type,
  currency: a.currency,
  balance: toNumber(a.balance),
  status: a.status,
  openedAt: a.opened_at
}), "serializeAccount");
var serializeTx = /* @__PURE__ */ __name2((t, accountNumber) => ({
  id: t.id,
  accountId: t.account_id,
  accountNumber: accountNumber ?? t.account_number,
  type: t.type,
  amount: toNumber(t.amount),
  description: t.description,
  createdAt: t.created_at,
  balanceAfter: toNumber(t.balance_after)
}), "serializeTx");
app2.get("/", async (c) => {
  const { customerId, status } = c.req.query();
  let sql = "SELECT a.*, c.full_name as customer_name FROM accounts a JOIN customers c ON a.customer_id = c.id WHERE 1=1";
  const params = [];
  if (customerId) {
    sql += " AND a.customer_id = ?";
    params.push(Number(customerId));
  }
  if (status) {
    sql += " AND a.status = ?";
    params.push(status);
  }
  sql += " ORDER BY a.opened_at DESC";
  const { results } = await c.env.DB.prepare(sql).bind(...params).all();
  return c.json(results.map((r) => serializeAccount2(r)));
});
app2.post("/", async (c) => {
  const { customerId, accountType, currency, initialDeposit } = await c.req.json();
  if (!customerId || !accountType || !currency) return c.json({ error: "Missing required fields" }, 400);
  const customer = await c.env.DB.prepare("SELECT * FROM customers WHERE id = ?").bind(customerId).first();
  if (!customer) return c.json({ error: "Customer not found" }, 404);
  if (customer.status === "closed") return c.json({ error: "Customer account is closed" }, 400);
  const deposit = initialDeposit ?? 0;
  const accountNumber = generateAccountNumber();
  const account = await c.env.DB.prepare(
    "INSERT INTO accounts (customer_id, account_number, account_type, currency, balance, status) VALUES (?, ?, ?, ?, ?, 'active') RETURNING *"
  ).bind(customerId, accountNumber, accountType, currency.toUpperCase(), toMoneyString(deposit)).first();
  if (deposit > 0) {
    await c.env.DB.prepare(
      "INSERT INTO transactions (account_id, type, amount, description, balance_after) VALUES (?, 'deposit', ?, 'Opening deposit', ?)"
    ).bind(account.id, toMoneyString(deposit), toMoneyString(deposit)).run();
  }
  const custEmail = customer.email;
  if (custEmail) {
    const tmpl = emailTemplates.accountOpened(
      customer.full_name,
      accountNumber,
      accountType,
      currency.toUpperCase()
    );
    await sendRoutineEmail({ to: custEmail, ...tmpl }, c.env);
  }
  return c.json({ ...serializeAccount2(account), customerName: customer.full_name }, 201);
});
app2.get("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const row = await c.env.DB.prepare(
    "SELECT a.*, c.full_name as customer_name FROM accounts a JOIN customers c ON a.customer_id = c.id WHERE a.id = ?"
  ).bind(id).first();
  if (!row) return c.json({ error: "Account not found" }, 404);
  const { results: txs } = await c.env.DB.prepare(
    "SELECT * FROM transactions WHERE account_id = ? ORDER BY created_at DESC"
  ).bind(id).all();
  return c.json({
    account: serializeAccount2(row),
    transactions: txs.map((t) => serializeTx(t, row.account_number))
  });
});
app2.patch("/:id/status", async (c) => {
  const id = Number(c.req.param("id"));
  const { status } = await c.req.json();
  if (!["active", "restricted", "closed"].includes(status)) return c.json({ error: "Invalid status" }, 400);
  const row = await c.env.DB.prepare(
    "SELECT a.*, c.full_name as customer_name FROM accounts a JOIN customers c ON a.customer_id = c.id WHERE a.id = ?"
  ).bind(id).first();
  if (!row) return c.json({ error: "Account not found" }, 404);
  await c.env.DB.prepare("UPDATE accounts SET status = ? WHERE id = ?").bind(status, id).run();
  if (status === "active") {
    const customer = await c.env.DB.prepare("SELECT email FROM customers WHERE id = ?").bind(row.customer_id).first();
    if (customer?.email) {
      const { subject, html } = templates.accountApproved(row.customer_name, row.account_number);
      await sendEmail(c.env, { to: customer.email, subject, html }).catch(console.error);
    }
  }
  return c.json({ ...serializeAccount2(row), status });
});
app2.post("/:id/credit", async (c) => {
  const id = Number(c.req.param("id"));
  const { amount, description } = await c.req.json();
  return postMovement(c.env.DB, id, amount, description, "credit", c);
});
app2.post("/:id/debit", async (c) => {
  const id = Number(c.req.param("id"));
  const { amount, description } = await c.req.json();
  return postMovement(c.env.DB, id, amount, description, "debit", c);
});
app2.get("/:id/transactions", async (c) => {
  const id = Number(c.req.param("id"));
  const account = await c.env.DB.prepare("SELECT * FROM accounts WHERE id = ?").bind(id).first();
  if (!account) return c.json({ error: "Account not found" }, 404);
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM transactions WHERE account_id = ? ORDER BY created_at DESC"
  ).bind(id).all();
  return c.json(results.map((t) => serializeTx(t, account.account_number)));
});
async function postMovement(db, accountId, amount, description, type, c) {
  if (!amount || amount <= 0) return c.json({ error: "Amount must be positive" }, 400);
  if (!description) return c.json({ error: "Description is required" }, 400);
  const account = await db.prepare("SELECT * FROM accounts WHERE id = ?").bind(accountId).first();
  if (!account) return c.json({ error: "Account not found" }, 404);
  if (account.status !== "active") return c.json({ error: "Account is not active" }, 400);
  const current = toNumber(account.balance);
  const delta = type === "credit" ? amount : -amount;
  const newBalance = current + delta;
  if (type === "debit" && newBalance < 0) return c.json({ error: "Insufficient funds" }, 400);
  await db.prepare("UPDATE accounts SET balance = ? WHERE id = ?").bind(toMoneyString(newBalance), accountId).run();
  const tx = await db.prepare(
    "INSERT INTO transactions (account_id, type, amount, description, balance_after) VALUES (?, ?, ?, ?, ?) RETURNING *"
  ).bind(accountId, type, toMoneyString(amount), description, toMoneyString(newBalance)).first();
  return c.json(serializeTx(tx, account.account_number), 201);
}
__name(postMovement, "postMovement");
__name2(postMovement, "postMovement");
var accounts_default = app2;
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var app3 = new Hono2();
var serializeLoan = /* @__PURE__ */ __name2((l) => ({
  id: l.id,
  customerId: l.customer_id,
  customerName: l.customer_name,
  accountId: l.account_id,
  accountNumber: l.account_number,
  currency: l.currency ?? "CHF",
  principalAmount: toNumber(l.principal_amount),
  interestRate: toNumber(l.interest_rate),
  termMonths: l.term_months,
  purpose: l.purpose,
  status: l.status,
  appliedAt: l.applied_at,
  decidedAt: l.decided_at ?? null,
  decisionNotes: l.decision_notes ?? null
}), "serializeLoan");
var loanWithJoins = /* @__PURE__ */ __name2((id, db) => db.prepare(
  "SELECT l.*, c.full_name as customer_name, a.account_number, a.currency FROM loans l JOIN customers c ON l.customer_id = c.id JOIN accounts a ON l.account_id = a.id WHERE l.id = ?"
).bind(id).first(), "loanWithJoins");
app3.get("/", async (c) => {
  const { status } = c.req.query();
  let sql = "SELECT l.*, c.full_name as customer_name, a.account_number, a.currency FROM loans l JOIN customers c ON l.customer_id = c.id JOIN accounts a ON l.account_id = a.id WHERE 1=1";
  const params = [];
  if (status) {
    sql += " AND l.status = ?";
    params.push(status);
  }
  sql += " ORDER BY l.applied_at DESC";
  const { results } = await c.env.DB.prepare(sql).bind(...params).all();
  return c.json(results.map((l) => serializeLoan(l)));
});
app3.post("/", async (c) => {
  const { customerId, accountId, principalAmount, interestRate, termMonths, purpose } = await c.req.json();
  if (!customerId || !accountId || !principalAmount || interestRate === void 0 || !termMonths || !purpose) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  const customer = await c.env.DB.prepare("SELECT * FROM customers WHERE id = ?").bind(customerId).first();
  if (!customer) return c.json({ error: "Customer not found" }, 404);
  const account = await c.env.DB.prepare("SELECT * FROM accounts WHERE id = ?").bind(accountId).first();
  if (!account) return c.json({ error: "Account not found" }, 404);
  if (account.customer_id !== customerId) return c.json({ error: "Account does not belong to customer" }, 400);
  const loan = await c.env.DB.prepare(
    "INSERT INTO loans (customer_id, account_id, principal_amount, interest_rate, term_months, purpose, status) VALUES (?, ?, ?, ?, ?, ?, 'pending') RETURNING *"
  ).bind(customerId, accountId, toMoneyString(principalAmount), Number(interestRate).toFixed(4), termMonths, purpose).first();
  const row = await loanWithJoins(loan.id, c.env.DB);
  return c.json(serializeLoan(row), 201);
});
app3.get("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const row = await loanWithJoins(id, c.env.DB);
  if (!row) return c.json({ error: "Loan not found" }, 404);
  return c.json(serializeLoan(row));
});
app3.post("/:id/approve", async (c) => {
  const id = Number(c.req.param("id"));
  const { notes } = await c.req.json();
  const row = await loanWithJoins(id, c.env.DB);
  if (!row) return c.json({ error: "Loan not found" }, 404);
  if (row.status !== "pending") return c.json({ error: "Only pending loans can be approved" }, 400);
  const account = await c.env.DB.prepare("SELECT * FROM accounts WHERE id = ?").bind(row.account_id).first();
  if (!account) return c.json({ error: "Account not found" }, 404);
  if (account.status !== "active") return c.json({ error: "Account is not active" }, 400);
  const principal = toNumber(row.principal_amount);
  const newBalance = toNumber(account.balance) + principal;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  await c.env.DB.batch([
    c.env.DB.prepare("UPDATE accounts SET balance = ? WHERE id = ?").bind(toMoneyString(newBalance), account.id),
    c.env.DB.prepare("INSERT INTO transactions (account_id, type, amount, description, balance_after) VALUES (?, 'loan_disbursement', ?, ?, ?)").bind(
      account.id,
      toMoneyString(principal),
      `Loan #${id} disbursement \xE2\u20AC\u201D ${row.purpose}`,
      toMoneyString(newBalance)
    ),
    c.env.DB.prepare("UPDATE loans SET status = 'disbursed', decided_at = ?, decision_notes = ? WHERE id = ?").bind(now, notes ?? "", id)
  ]);
  const updated = await loanWithJoins(id, c.env.DB);
  const custRow = await c.env.DB.prepare("SELECT email FROM customers WHERE id = ?").bind(row.customer_id).first();
  if (custRow?.email) {
    const tmpl = emailTemplates.loanApproved(row.customer_name, principal, row.currency ?? "CHF");
    await sendPriorityEmail({ to: custRow.email, ...tmpl }, c.env);
  }
  return c.json(serializeLoan(updated));
});
app3.post("/:id/reject", async (c) => {
  const id = Number(c.req.param("id"));
  const { notes } = await c.req.json();
  const row = await loanWithJoins(id, c.env.DB);
  if (!row) return c.json({ error: "Loan not found" }, 404);
  if (row.status !== "pending") return c.json({ error: "Only pending loans can be rejected" }, 400);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  await c.env.DB.prepare("UPDATE loans SET status = 'rejected', decided_at = ?, decision_notes = ? WHERE id = ?").bind(now, notes ?? "", id).run();
  const updated = await loanWithJoins(id, c.env.DB);
  const custRow2 = await c.env.DB.prepare("SELECT email FROM customers WHERE id = ?").bind(row.customer_id).first();
  if (custRow2?.email) {
    const tmpl = emailTemplates.loanRejected(row.customer_name, notes ?? "");
    await sendPriorityEmail({ to: custRow2.email, ...tmpl }, c.env);
  }
  return c.json(serializeLoan(updated));
});
var loans_default = app3;
app3.patch("/:id/decision", async (c) => {
  const { getAuth: getAuth2 } = await Promise.resolve().then(() => (init_dist2(), dist_exports));
  const auth = getAuth2(c);
  const id = Number(c.req.param("id"));
  const { status, decisionNotes } = await c.req.json();
  if (!["approved", "rejected"].includes(status)) return c.json({ error: "Invalid status" }, 400);
  const updated = await c.env.DB.prepare(
    "UPDATE loans SET status = ?, decided_at = datetime('now'), decision_notes = ? WHERE id = ? RETURNING *"
  ).bind(status, decisionNotes ?? null, id).first();
  if (!updated) return c.json({ error: "Loan not found" }, 404);
  await c.env.DB.prepare(
    "INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)"
  ).bind(`loan_${status}`, "loan", id, JSON.stringify({ decisionNotes }), auth?.userId ?? "admin").run();
  await c.env.DB.prepare(
    "INSERT INTO notifications (type, title, message, entity_type, entity_id) VALUES (?, ?, ?, ?, ?)"
  ).bind("loan_decision", `Loan ${status}`, `Loan #${id} has been ${status}`, "loan", id).run();
  return c.json(updated);
});
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var app4 = new Hono2();
app4.get("/summary", async (c) => {
  const customers = await c.env.DB.prepare(
    "SELECT COUNT(*) as total, SUM(CASE WHEN status='active' THEN 1 ELSE 0 END) as active, SUM(CASE WHEN status='restricted' THEN 1 ELSE 0 END) as restricted FROM customers"
  ).first();
  const accounts = await c.env.DB.prepare(
    "SELECT COUNT(*) as total, COALESCE(SUM(CAST(balance AS REAL)), 0) as deposits FROM accounts"
  ).first();
  const monthStart = /* @__PURE__ */ new Date();
  monthStart.setUTCDate(1);
  monthStart.setUTCHours(0, 0, 0, 0);
  const loans = await c.env.DB.prepare(
    "SELECT SUM(CASE WHEN status='pending' THEN 1 ELSE 0 END) as pending, SUM(CASE WHEN status IN ('approved','disbursed') AND decided_at >= ? THEN 1 ELSE 0 END) as approved_this_month FROM loans"
  ).bind(monthStart.toISOString()).first();
  return c.json({
    totalCustomers: customers.total ?? 0,
    activeCustomers: customers.active ?? 0,
    restrictedCustomers: customers.restricted ?? 0,
    totalAccounts: accounts.total ?? 0,
    totalDeposits: toNumber(accounts.deposits),
    pendingLoans: loans.pending ?? 0,
    approvedLoansThisMonth: loans.approved_this_month ?? 0,
    currency: "CHF"
  });
});
app4.get("/recent-activity", async (c) => {
  const { results: txs } = await c.env.DB.prepare(
    "SELECT t.*, a.account_number, a.currency, c.full_name as customer_name FROM transactions t JOIN accounts a ON t.account_id = a.id JOIN customers c ON a.customer_id = c.id ORDER BY t.created_at DESC LIMIT 15"
  ).all();
  const { results: decidedLoans } = await c.env.DB.prepare(
    "SELECT l.*, c.full_name as customer_name FROM loans l JOIN customers c ON l.customer_id = c.id WHERE l.decided_at IS NOT NULL ORDER BY l.decided_at DESC LIMIT 10"
  ).all();
  const typeLabel = {
    credit: "Credit posted",
    debit: "Debit posted",
    deposit: "Deposit",
    withdrawal: "Withdrawal",
    loan_disbursement: "Loan disbursed"
  };
  const events = [
    ...txs.map((t) => ({
      id: `tx-${t.id}`,
      kind: "transaction",
      title: `${typeLabel[t.type] ?? t.type} \u2014 ${t.customer_name}`,
      description: `${t.description} \xB7 ${t.account_number}`,
      occurredAt: t.created_at,
      amount: toNumber(t.amount),
      currency: t.currency
    })),
    ...decidedLoans.map((l) => ({
      id: `loan-${l.id}`,
      kind: "loan_decision",
      title: `Loan ${l.status} \u2014 ${l.customer_name}`,
      description: l.purpose,
      occurredAt: l.decided_at,
      amount: toNumber(l.principal_amount),
      currency: "CHF"
    }))
  ].sort((a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime()).slice(0, 20);
  return c.json(events);
});
var dashboard_default = app4;
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var app5 = new Hono2();
var serialize2 = /* @__PURE__ */ __name2((t) => ({
  id: t.id,
  accountId: t.account_id,
  type: t.type,
  amount: toNumber(t.amount),
  currency: t.currency,
  description: t.description,
  reference: t.reference,
  status: t.status,
  createdAt: t.created_at,
  createdBy: t.created_by
}), "serialize");
app5.get("/", async (c) => {
  const { account_id, type, limit = "50" } = c.req.query();
  let sql = "SELECT t.*, a.account_number FROM transactions t JOIN accounts a ON t.account_id = a.id WHERE 1=1";
  const params = [];
  if (account_id) {
    sql += " AND t.account_id = ?";
    params.push(Number(account_id));
  }
  if (type) {
    sql += " AND t.type = ?";
    params.push(type);
  }
  sql += " ORDER BY t.created_at DESC LIMIT ?";
  params.push(Number(limit));
  const { results } = await c.env.DB.prepare(sql).bind(...params).all();
  return c.json(results.map((t) => ({ ...serialize2(t), accountNumber: t.account_number })));
});
app5.post("/", async (c) => {
  const { getAuth: getAuth2 } = await Promise.resolve().then(() => (init_dist2(), dist_exports));
  const auth = getAuth2(c);
  const body = await c.req.json();
  const { accountId, type, amount, description, currency = "CHF" } = body;
  if (!accountId || !type || !amount) return c.json({ error: "Missing required fields" }, 400);
  if (!["deposit", "withdrawal", "transfer"].includes(type)) return c.json({ error: "Invalid type" }, 400);
  const account = await c.env.DB.prepare("SELECT * FROM accounts WHERE id = ?").bind(accountId).first();
  if (!account) return c.json({ error: "Account not found" }, 404);
  const currentBalance = toNumber(account.balance);
  let newBalance = currentBalance;
  if (type === "deposit") newBalance = currentBalance + amount;
  else if (type === "withdrawal") {
    if (currentBalance < amount) return c.json({ error: "Insufficient funds" }, 400);
    newBalance = currentBalance - amount;
  }
  const reference = `TXN${Date.now()}`;
  const result = await c.env.DB.prepare(
    "INSERT INTO transactions (account_id, type, amount, currency, description, reference, created_by) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *"
  ).bind(accountId, type, amount, currency, description ?? null, reference, auth?.userId ?? "admin").first();
  await c.env.DB.prepare("UPDATE accounts SET balance = ? WHERE id = ?").bind(newBalance, accountId).run();
  await c.env.DB.prepare(
    "INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)"
  ).bind(`${type}_transaction`, "account", accountId, JSON.stringify({ amount, reference }), auth?.userId ?? "admin").run();
  const customerRow = await c.env.DB.prepare(
    "SELECT c.email, c.full_name FROM customers c JOIN accounts a ON a.customer_id = c.id WHERE a.id = ?"
  ).bind(accountId).first();
  if (customerRow?.email) {
    const txType = type === "deposit" ? "credit" : "debit";
    const { subject, html } = templates.transactionAlert(
      customerRow.full_name,
      `${currency} ${amount}`,
      txType,
      `${currency} ${newBalance}`
    );
    await sendEmail(c.env, { to: customerRow.email, subject, html }).catch(console.error);
  }
  return c.json(serialize2(result), 201);
});
var transactions_default = app5;
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var app6 = new Hono2();
app6.get("/", async (c) => {
  const { entity_type, limit = "100" } = c.req.query();
  let sql = "SELECT * FROM audit_log WHERE 1=1";
  const params = [];
  if (entity_type) {
    sql += " AND entity_type = ?";
    params.push(entity_type);
  }
  sql += " ORDER BY created_at DESC LIMIT ?";
  params.push(Number(limit));
  const { results } = await c.env.DB.prepare(sql).bind(...params).all();
  return c.json(results);
});
var audit_default = app6;
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var app7 = new Hono2();
app7.get("/", async (c) => {
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM notifications ORDER BY created_at DESC LIMIT 50"
  ).all();
  return c.json(results);
});
app7.patch("/:id/read", async (c) => {
  const id = Number(c.req.param("id"));
  await c.env.DB.prepare("UPDATE notifications SET is_read = 1 WHERE id = ?").bind(id).run();
  return c.json({ success: true });
});
app7.patch("/read-all", async (c) => {
  await c.env.DB.prepare("UPDATE notifications SET is_read = 1").run();
  return c.json({ success: true });
});
var notifications_default = app7;
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var app8 = new Hono2();
app8.post("/login", async (c) => {
  const { email, password } = await c.req.json();
  if (!email || !password) return c.json({ error: "Email and password required" }, 400);
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(password));
  const passwordHash = Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  const customer = await c.env.DB.prepare(
    "SELECT * FROM customers WHERE email = ? AND password_hash = ?"
  ).bind(email, passwordHash).first();
  if (!customer) return c.json({ error: "Invalid email or password" }, 401);
  if (customer.status === "pending") return c.json({ error: "Your account is pending approval. Our team will activate it shortly." }, 403);
  if (customer.status === "closed") return c.json({ error: "Account is closed" }, 403);
  if (customer.status === "restricted") return c.json({ error: "Account is restricted. Please contact support." }, 403);
  const { results: accounts } = await c.env.DB.prepare(
    "SELECT * FROM accounts WHERE customer_id = ? ORDER BY opened_at DESC"
  ).bind(customer.id).all();
  return c.json({
    customer: {
      id: customer.id,
      fullName: customer.full_name,
      email: customer.email,
      phone: customer.phone,
      status: customer.status,
      country: customer.country,
      zipCode: customer.zip_code
    },
    accounts: accounts.map((a) => ({
      id: a.id,
      accountNumber: a.account_number,
      accountType: a.account_type,
      currency: a.currency,
      balance: toNumber(a.balance),
      status: a.status,
      openedAt: a.opened_at
    }))
  });
});
app8.post("/register", async (c) => {
  const { fullName, email, phone, dateOfBirth, address, password } = await c.req.json();
  if (!fullName || !email || !phone || !dateOfBirth || !address || !password) {
    return c.json({ error: "All fields are required" }, 400);
  }
  if (password.length < 6) return c.json({ error: "Password must be at least 6 characters" }, 400);
  const existing = await c.env.DB.prepare("SELECT id FROM customers WHERE email = ?").bind(email).first();
  if (existing) return c.json({ error: "An account with this email already exists" }, 409);
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(password));
  const passwordHash = Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  const result = await c.env.DB.prepare(
    "INSERT INTO customers (full_name, email, phone, date_of_birth, address, status, password_hash) VALUES (?, ?, ?, ?, ?, 'pending', ?) RETURNING *"
  ).bind(fullName, email, phone, dateOfBirth, address, passwordHash).first();
  await c.env.DB.prepare(
    "INSERT INTO notifications (type, title, message, entity_type, entity_id) VALUES (?, ?, ?, ?, ?)"
  ).bind("new_customer", "New Customer Registration", "New customer " + fullName + " has registered and is pending approval.", "customer", result.id).run();
  await c.env.DB.prepare(
    "INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)"
  ).bind("customer_self_registration", "customer", result.id, JSON.stringify({ fullName, email }), email).run();
  return c.json({ success: true, customerId: result.id }, 201);
});
app8.get("/transactions/:accountId", async (c) => {
  const accountId = Number(c.req.param("accountId"));
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM transactions WHERE account_id = ? ORDER BY created_at DESC LIMIT 20"
  ).bind(accountId).all();
  return c.json(results.map((t) => ({
    id: t.id,
    type: t.type,
    amount: toNumber(t.amount),
    currency: t.currency,
    description: t.description,
    reference: t.reference,
    createdAt: t.created_at
  })));
});
app8.post("/change-password", async (c) => {
  const { email, currentPassword, newPassword } = await c.req.json();
  if (!email || !currentPassword || !newPassword) return c.json({ error: "All fields required" }, 400);
  if (newPassword.length < 6) return c.json({ error: "New password must be at least 6 characters" }, 400);
  const encoder = new TextEncoder();
  const currentHash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(currentPassword)))).map((b) => b.toString(16).padStart(2, "0")).join("");
  const newHash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(newPassword)))).map((b) => b.toString(16).padStart(2, "0")).join("");
  const customer = await c.env.DB.prepare("SELECT id FROM customers WHERE email = ? AND password_hash = ?").bind(email, currentHash).first();
  if (!customer) return c.json({ error: "Current password is incorrect" }, 401);
  await c.env.DB.prepare("UPDATE customers SET password_hash = ? WHERE email = ?").bind(newHash, email).run();
  await c.env.DB.prepare("INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)").bind("customer_password_change", "customer", customer.id, JSON.stringify({ note: "Customer changed their own password" }), email).run();
  await c.env.DB.prepare("INSERT INTO notifications (type, title, message, entity_type, entity_id) VALUES (?, ?, ?, ?, ?)").bind("password_change", "Password Changed", "Customer " + email + " changed their password", "customer", customer.id).run();
  return c.json({ success: true });
});
app8.post("/apply-loan", async (c) => {
  const { customerId, accountId, principalAmount, termMonths, purpose } = await c.req.json();
  if (!customerId || !accountId || !principalAmount || !termMonths) return c.json({ error: "Missing required fields" }, 400);
  const customer = await c.env.DB.prepare(
    "SELECT kyc_status FROM customers WHERE id = ?"
  ).bind(customerId).first();
  if (!customer) return c.json({ error: "Customer not found" }, 404);
  if (customer.kyc_status !== "Approved") {
    return c.json({ error: "Identity verification required before applying for a loan. Please complete KYC verification in your Profile." }, 403);
  }
  const interestRate = 0.045;
  const result = await c.env.DB.prepare(
    "INSERT INTO loans (customer_id, account_id, principal_amount, interest_rate, term_months, purpose, status) VALUES (?, ?, ?, ?, ?, ?, 'pending') RETURNING *"
  ).bind(customerId, accountId, principalAmount, interestRate, termMonths, purpose ?? null).first();
  await c.env.DB.prepare("INSERT INTO notifications (type, title, message, entity_type, entity_id) VALUES (?, ?, ?, ?, ?)").bind("loan_application", "New Loan Application", "Customer #" + customerId + " applied for a loan of CHF " + principalAmount, "loan", result.id).run();
  await c.env.DB.prepare("INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)").bind("customer_loan_application", "loan", result.id, JSON.stringify({ principalAmount, termMonths, purpose }), "customer_" + customerId).run();
  return c.json({ success: true, loanId: result.id }, 201);
});
app8.post("/withdraw", async (c) => {
  const { customerId, accountId, amount, description, recipientName, recipientAccount, recipientBank, recipientCountry, swiftCode, withdrawType } = await c.req.json();
  if (!customerId || !accountId || !amount) return c.json({ error: "Missing required fields" }, 400);
  if (!recipientName || !recipientAccount) return c.json({ error: "Recipient name and account are required" }, 400);
  if (amount <= 0) return c.json({ error: "Amount must be positive" }, 400);
  const account = await c.env.DB.prepare(
    "SELECT * FROM accounts WHERE id = ? AND customer_id = ?"
  ).bind(accountId, customerId).first();
  if (!account) return c.json({ error: "Account not found" }, 404);
  if (account.status !== "active") return c.json({ error: "Account is not active" }, 400);
  const balance = Number(account.balance);
  if (balance < amount) return c.json({ error: "Insufficient funds" }, 400);
  const newBalance = balance - amount;
  const reference = "WTH" + Date.now();
  await c.env.DB.prepare("UPDATE accounts SET balance = ? WHERE id = ?").bind(newBalance, accountId).run();
  const tx = await c.env.DB.prepare(
    "INSERT INTO transactions (account_id, type, amount, currency, description, reference, balance_after) VALUES (?, 'withdrawal', ?, ?, ?, ?, ?) RETURNING *"
  ).bind(accountId, String(amount), account.currency || "USD", `${withdrawType === "international" ? "INT" : "LOCAL"} withdrawal to ${recipientName} (${recipientBank || ""}, ${recipientCountry || ""})${description ? " - " + description : ""}`, reference, String(newBalance)).first();
  await c.env.DB.prepare(
    "INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)"
  ).bind("customer_withdrawal", "account", accountId, JSON.stringify({ amount, reference }), "customer_" + customerId).run();
  return c.json({ success: true, reference, newBalance }, 201);
});
app8.post("/transfer", async (c) => {
  const { customerId, fromAccountId, toAccountNumber, recipientName, amount, description } = await c.req.json();
  if (!customerId || !fromAccountId || !toAccountNumber || !amount) return c.json({ error: "Missing required fields" }, 400);
  if (amount <= 0) return c.json({ error: "Amount must be positive" }, 400);
  const fromAccount = await c.env.DB.prepare(
    "SELECT * FROM accounts WHERE id = ? AND customer_id = ?"
  ).bind(fromAccountId, customerId).first();
  if (!fromAccount) return c.json({ error: "Source account not found" }, 404);
  if (fromAccount.status !== "active") return c.json({ error: "Source account is not active" }, 400);
  const fromBalance = Number(fromAccount.balance);
  if (fromBalance < amount) return c.json({ error: "Insufficient funds" }, 400);
  const toAccount = await c.env.DB.prepare(
    "SELECT * FROM accounts WHERE account_number = ?"
  ).bind(toAccountNumber).first();
  const toBalance = toAccount ? Number(toAccount.balance) : 0;
  const isInternal = !!toAccount;
  const reference = "TRF" + Date.now();
  await c.env.DB.prepare("UPDATE accounts SET balance = ? WHERE id = ?").bind(fromBalance - amount, fromAccountId).run();
  await c.env.DB.prepare(
    "INSERT INTO transactions (account_id, type, amount, currency, description, reference, balance_after) VALUES (?, 'transfer', ?, ?, ?, ?, ?)"
  ).bind(fromAccountId, String(amount), fromAccount.currency || "USD", `Transfer to ${recipientName || toAccountNumber}${description ? " - " + description : ""}`, reference, String(fromBalance - amount)).run();
  if (isInternal && toAccount) {
    await c.env.DB.prepare("UPDATE accounts SET balance = ? WHERE id = ?").bind(toBalance + amount, toAccount.id).run();
    await c.env.DB.prepare(
      "INSERT INTO transactions (account_id, type, amount, currency, description, reference, balance_after) VALUES (?, 'transfer', ?, ?, ?, ?, ?)"
    ).bind(toAccount.id, String(amount), toAccount.currency || "USD", `Transfer from ${fromAccount.account_number}${description ? " - " + description : ""}`, reference, String(toBalance + amount)).run();
  }
  await c.env.DB.prepare(
    "INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)"
  ).bind("customer_transfer", "account", fromAccountId, JSON.stringify({ amount, reference, toAccountNumber }), "customer_" + customerId).run();
  return c.json({ success: true, reference, newBalance: fromBalance - amount }, 201);
});
app8.get("/loans/:customerId", async (c) => {
  const customerId = Number(c.req.param("customerId"));
  const { results } = await c.env.DB.prepare(
    "SELECT l.*, a.account_number FROM loans l JOIN accounts a ON l.account_id = a.id WHERE l.customer_id = ? ORDER BY l.applied_at DESC"
  ).bind(customerId).all();
  return c.json(results.map((l) => ({
    id: l.id,
    accountNumber: l.account_number,
    principalAmount: l.principal_amount,
    interestRate: l.interest_rate,
    termMonths: l.term_months,
    purpose: l.purpose,
    status: l.status,
    appliedAt: l.applied_at,
    decidedAt: l.decided_at ?? null,
    decisionNotes: l.decision_notes ?? null
  })));
});
app8.get("/all-transactions/:customerId", async (c) => {
  const customerId = Number(c.req.param("customerId"));
  const { results } = await c.env.DB.prepare(
    "SELECT t.*, a.account_number FROM transactions t JOIN accounts a ON t.account_id = a.id WHERE a.customer_id = ? ORDER BY t.created_at DESC LIMIT 100"
  ).bind(customerId).all();
  return c.json(results.map((t) => ({
    id: t.id,
    accountNumber: t.account_number,
    type: t.type,
    amount: t.amount,
    currency: t.currency,
    description: t.description,
    reference: t.reference,
    createdAt: t.created_at
  })));
});
var customer_portal_default = app8;
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var app9 = new Hono2();
var DIDIT_BASE = "https://verification.didit.me/v3";
app9.post("/start", async (c) => {
  const { customerId } = await c.req.json();
  if (!customerId) return c.json({ error: "customerId required" }, 400);
  const customer = await c.env.DB.prepare(
    "SELECT id, full_name, email, kyc_status FROM customers WHERE id = ?"
  ).bind(customerId).first();
  if (!customer) return c.json({ error: "Customer not found" }, 404);
  if (customer.kyc_status === "Approved") return c.json({ error: "Already verified" }, 400);
  const res = await fetch(`${DIDIT_BASE}/session/`, {
    method: "POST",
    headers: {
      "x-api-key": c.env.DIDIT_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      workflow_id: c.env.DIDIT_WORKFLOW_ID,
      vendor_data: String(customerId),
      callback: `${c.env.FRONTEND_URL}/customer/dashboard`
    })
  });
  if (!res.ok) {
    const err = await res.text();
    console.error("Didit error:", err);
    return c.json({ error: "Failed to create verification session" }, 500);
  }
  const session = await res.json();
  await c.env.DB.prepare(
    "UPDATE customers SET kyc_status = ? WHERE id = ?"
  ).bind("In Progress", customerId).run();
  return c.json({ url: session.url || session.session_url });
});
app9.get("/status/:customerId", async (c) => {
  const customerId = Number(c.req.param("customerId"));
  const customer = await c.env.DB.prepare(
    "SELECT kyc_status FROM customers WHERE id = ?"
  ).bind(customerId).first();
  if (!customer) return c.json({ error: "Not found" }, 404);
  return c.json({ kyc_status: customer.kyc_status });
});
app9.post("/webhook", async (c) => {
  const body = await c.req.json();
  const vendorData = body.vendor_data;
  const status = body.status;
  if (!vendorData || !status) return c.json({ ok: true });
  const customerId = Number(vendorData);
  await c.env.DB.prepare(
    "UPDATE customers SET kyc_status = ? WHERE id = ?"
  ).bind(status, customerId).run();
  await c.env.DB.prepare(
    "INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)"
  ).bind("kyc_status_update", "customer", customerId, JSON.stringify({ status }), "didit_webhook").run();
  return c.json({ ok: true });
});
var kyc_default = app9;
var app10 = new Hono2();
app10.use("*", cors({ origin: "*", credentials: true }));
app10.route("/api/customer", customer_portal_default);
app10.route("/api/customer/kyc", kyc_default);
app10.route("/api/kyc", kyc_default);
app10.use("*", clerkMiddleware());
app10.get("/api/healthz", (c) => c.json({ status: "ok" }));
app10.use("/api/admin/*", async (c, next) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  return next();
});
app10.route("/api/admin/dashboard", dashboard_default);
app10.route("/api/admin/customers", customers_default);
app10.route("/api/admin/accounts", accounts_default);
app10.route("/api/admin/loans", loans_default);
app10.route("/api/admin/transactions", transactions_default);
app10.route("/api/admin/audit", audit_default);
app10.route("/api/admin/notifications", notifications_default);
var VALID_CUSTOMER_STATUSES = ["active", "restricted", "closed", "pending"];
var VALID_KYC_STATUSES = ["not_started", "In Progress", "Approved", "Expired"];
function isValidIso8601(value) {
  if (typeof value !== "string" || !value) return false;
  const d = new Date(value);
  return !isNaN(d.getTime()) && value.includes("T");
}
__name(isValidIso8601, "isValidIso8601");
__name2(isValidIso8601, "isValidIso8601");
var adminEditsApp = new Hono2();
adminEditsApp.patch("/customers/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();
  const { fullName, email, phone, dateOfBirth, address, status, kycStatus } = body;
  if (status !== void 0 && !VALID_CUSTOMER_STATUSES.includes(status)) {
    return c.json({ error: `Invalid status. Must be one of: ${VALID_CUSTOMER_STATUSES.join(", ")}` }, 400);
  }
  if (kycStatus !== void 0 && !VALID_KYC_STATUSES.includes(kycStatus)) {
    return c.json({ error: `Invalid kycStatus. Must be one of: ${VALID_KYC_STATUSES.join(", ")}` }, 400);
  }
  const existing = await c.env.DB.prepare("SELECT * FROM customers WHERE id = ?").bind(id).first();
  if (!existing) return c.json({ error: "Customer not found" }, 404);
  const fields = [];
  const values = [];
  if (fullName !== void 0) {
    fields.push("full_name = ?");
    values.push(fullName);
  }
  if (email !== void 0) {
    fields.push("email = ?");
    values.push(email);
  }
  if (phone !== void 0) {
    fields.push("phone = ?");
    values.push(phone);
  }
  if (dateOfBirth !== void 0) {
    fields.push("date_of_birth = ?");
    values.push(dateOfBirth);
  }
  if (address !== void 0) {
    fields.push("address = ?");
    values.push(address);
  }
  if (status !== void 0) {
    fields.push("status = ?");
    values.push(status);
  }
  if (kycStatus !== void 0) {
    fields.push("kyc_status = ?");
    values.push(kycStatus);
  }
  if (fields.length === 0) return c.json({ error: "No fields provided to update" }, 400);
  values.push(id);
  const updated = await c.env.DB.prepare(
    `UPDATE customers SET ${fields.join(", ")} WHERE id = ? RETURNING *`
  ).bind(...values).first();
  const auth = getAuth(c);
  const changedFields = { fullName, email, phone, dateOfBirth, address, status, kycStatus };
  Object.keys(changedFields).forEach((k) => changedFields[k] === void 0 && delete changedFields[k]);
  await c.env.DB.prepare(
    "INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)"
  ).bind("admin_customer_edit", "customer", id, JSON.stringify(changedFields), auth?.userId ?? "admin").run();
  return c.json({
    id: updated.id,
    fullName: updated.full_name,
    email: updated.email,
    phone: updated.phone,
    dateOfBirth: updated.date_of_birth,
    address: updated.address,
    status: updated.status,
    kycStatus: updated.kyc_status ?? "not_started",
    createdAt: updated.created_at
  });
});
adminEditsApp.patch("/transactions/:id/backdate", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();
  const { createdAt } = body;
  if (!createdAt) return c.json({ error: "createdAt is required" }, 400);
  if (!isValidIso8601(createdAt)) return c.json({ error: "createdAt must be a valid ISO 8601 datetime string (e.g. 2026-06-20T14:30:00Z)" }, 400);
  const existing = await c.env.DB.prepare("SELECT * FROM transactions WHERE id = ?").bind(id).first();
  if (!existing) return c.json({ error: "Transaction not found" }, 404);
  const originalDate = existing.created_at;
  const updated = await c.env.DB.prepare(
    "UPDATE transactions SET created_at = ? WHERE id = ? RETURNING *"
  ).bind(createdAt, id).first();
  const auth = getAuth(c);
  await c.env.DB.prepare(
    "INSERT INTO audit_log (action, entity_type, entity_id, details, performed_by) VALUES (?, ?, ?, ?, ?)"
  ).bind(
    "admin_transaction_backdate",
    "transaction",
    id,
    JSON.stringify({ originalDate, newDate: createdAt }),
    auth?.userId ?? "admin"
  ).run();
  return c.json({
    id: updated.id,
    accountId: updated.account_id,
    type: updated.type,
    amount: toNumber(updated.amount),
    currency: updated.currency,
    description: updated.description,
    reference: updated.reference ?? null,
    balanceAfter: toNumber(updated.balance_after),
    createdAt: updated.created_at
  });
});
app10.route("/api/admin", adminEditsApp);
var index_default = app10;
export {
  index_default as default
};
//# sourceMappingURL=worker-clean.js.map

--d351900712b782093f358e4f33fc48df25edeb7cf34fca4737094f8c9d43--
