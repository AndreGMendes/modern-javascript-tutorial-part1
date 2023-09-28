const os = require('os');
// const osAddress = require('os').networkInterfaces().eth0[0].address;

// arch()
console.log(os.arch());

// platform()
console.log(os.platform());

if (os.platform() === 'darwin') {
  console.log('You are on a Mac');
} else if (os.platform() === 'win32') {
  console.log('You are on Windows');
} else {
  console.log('You are on Linux');
}

// cpus()
console.log(os.cpus());

// freemem()
console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir
console.log(os.homedir());

// uptime
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(
  `Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);

// hostname()
console.log(os.hostname());
// console.log(osAddress.networkInterfaces().eth0[0].address);





'use strict';

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

console.log(results)



var ip = require('ip');
console.dir ( ip.address() );
