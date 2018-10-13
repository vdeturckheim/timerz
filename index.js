'use strict';
const Assert = require('assert');

const waitTime = 1 * 1000; // ms
const waitTimeMicro = waitTime * 1e6;
const deltaMicto = Math.floor(waitTime * 0.5/100) * 1e6;



const t0 = process.hrtime.bigint();
setTimeout(() => {

    const t1 = process.hrtime.bigint();
    Assert(t1 - t0 < BigInt(waitTimeMicro + deltaMicto));
    Assert(t1 - t0 > BigInt(waitTimeMicro - deltaMicto));
}, waitTime);

