import 'reflect-metadata';
import * as express from "express";
import * as bodyParser from 'body-parser';

import { Routes } from './Routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routerControllers = new Routes();
routerControllers.initRoutes(app);

app.listen(process.env.PORT, () => {
  console.info(`server running http://localhost:${process.env.PORT}`);
});
