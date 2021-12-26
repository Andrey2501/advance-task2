const express = require('express');
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
   const result = fact(req.query['number']);
   let endTime = +new Date();
   res.send(`Result: ${result} <br> Computation time: ${endTime - startTime} ms`);
});

app.listen(3000)
