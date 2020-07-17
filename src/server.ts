import * as express from "express";
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.info(`server running http://localhost:${process.env.PORT}`);
});