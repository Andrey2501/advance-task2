const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Test docker');
});

app.listen(3000)
