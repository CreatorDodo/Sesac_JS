import os from 'os';

const hostname = os.hostname();
console.log(hostname);

const tmpdir = os.tmpdir();
console.log(tmpdir);

const endianness = os.endianness();
console.log(endianness);

const type = os.type();
console.log(type);

const platform = os.platform();
console.log(platform);

const arch = os.arch();
console.log(arch);

const release = os.release();
console.log(release);

const uptime = os.uptime();
console.log(uptime);

const loadavg = os.loadavg();
console.log(loadavg);

const freemem = os.freemem();
console.log(freemem);

const totalmem = os.totalmem();
console.log(totalmem);

const cpus = os.cpus();
console.log(cpus);

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

const EOL = os.EOL;
console.log(EOL);
