const express = require('express');

const HTTP_STATUS_OK = 200;
const app = express();

app.use(express.json()); 

app.get('/', (_req, res) => {
  return res.status(HTTP_STATUS_OK).json({
    status: 'aqui'
  });
})


app.listen(3000,() => console.log('Hello World status OK'));


