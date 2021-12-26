const express = require('express');
const { Worker } = require('worker_threads');
const app = express();

app.get('/', function (req, res) {
   let startTime = +new Date();
   let workers = [];
   for (let i = 0; i < 20; i++) {
      workers.push(new Worker('./factorial.js', {
         workerData: {
            number: req.query['number']
         }}
      ));
   }

   workers[0].once("message", result => {
      let endTime = +new Date();
      res.send(`Result: ${result} <br> Computation time: ${endTime - startTime} ms`);
   });
});

app.listen(3000)
