"use strict";

let timer = {};

function timeMeasurement(method, name) {
  if(timer[name] === undefined) {
    timer[name] = [];
  }

  const start = performance.now();
  const returnValue = method();
  const end = performance.now();
  timer[name].push(end - start);

  const target = timer[name];
  const targetLen = target.length;
  const firstTime = target[targetLen - 1];
  let min = firstTime;
  let max = firstTime;
  let avg = firstTime;
  for(let i=targetLen - 2; i>=0; i--) {
    const time = target[i];
    avg += time;
    if(min > time) {
      min = time;
    }
    if(max < time) {
      max = time;
    }
  }
  avg /= targetLen;

  console.log(name, "nowTime", target[targetLen - 1], "count", targetLen, "avgTime", avg, "maxTime", max, "minTime", min);

  return returnValue;
}
