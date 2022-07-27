// const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', apiRouter);

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
