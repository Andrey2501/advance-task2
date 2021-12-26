const { parentPort, workerData } = require("worker_threads");

function fact(num) {
    let res = 1n;
    for (let i = 1n; i <= num; i++) {
        res *= i;
    }

    return res;
}

parentPort.postMessage( fact(workerData.number));

