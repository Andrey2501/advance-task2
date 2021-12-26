const express = require('express');
const { Worker } = require('worker_threads');
const app = express();

function fact(num) {
   let res = 1n;
   for (let i = 1n; i <= num; i++) {
      res *= i;
   }

   return res;
}

app.get('/', function (req, res) {
   let startTime = +new Date();
   // let workers = [];
   // for (let i = 0; i < 5; i++) {
   //    workers.push(new Worker('./factorial.js', {
   //       workerData: {
   //          number: req.query['number']
   //       }}
   //    ));
   // }
   //
   // workers[0].once("message", result => {
   //    let endTime = +new Date();
   //    res.send(`Result: ${result} <br> Computation time: ${endTime - startTime} ms`);
   // });

   let result = fact(req.query['number']);

   let endTime = +new Date();
   res.send(`Result: ${result} <br> Computation time: ${endTime - startTime} ms`);
});

app.listen(3000)
