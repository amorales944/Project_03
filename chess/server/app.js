import express, { static } from 'express';
import { urlencoded, json } from 'body-parser';
import { resolve } from 'path';
require('dotenv').load();

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(static(resolve(__dirname, '..', 'build')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

export default app;
