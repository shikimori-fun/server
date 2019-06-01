import 'reflect-metadata';
import Koa from 'koa';
import { createKoaServer, useContainer } from 'routing-controllers';
import { ReflectiveInjector } from 'injection-js';
import { Container } from 'typedi';

import * as dotenv from 'dotenv';
dotenv.config();

import { config } from './config';

export const injector = ReflectiveInjector.resolveAndCreate([
  // TODO: add services here
]);
useContainer(Container);

const app: Koa = createKoaServer({
  routePrefix: '/api',
  cors: true,
  controllers: [
    // TODO: add controllers here
  ],
  middlewares: [
    // TODO: add middlewares here
  ]
});

app.listen(config.port);

console.log(`Server is running on port ${config.port}`);
