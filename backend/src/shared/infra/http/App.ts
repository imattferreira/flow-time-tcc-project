import 'reflect-metadata';
import 'dotenv/config';
import createConnection from '../database';
import '../../containers';

import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';

import router from './routes';

createConnection();

class App {
  express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(router);
  }
}

const app = new App();

export default app.express;