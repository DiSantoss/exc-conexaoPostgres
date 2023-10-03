const express = require('express');
const app = express();
const { routes } = require('./routes/routes'); 

app.use(express.json());
app.use(routes); 

app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000.');
});