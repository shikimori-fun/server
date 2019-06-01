import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import { createKoaServer, useContainer } from 'routing-controllers';
import { ReflectiveInjector } from 'injection-js';
import { Container } from 'typedi';

import { config } from './config';

import AuthController from './controllers/auth.controller';
import UserController from './controllers/user.controller';
import AnimeSearchController from './controllers/animeSearch.controller';

export const injector = ReflectiveInjector.resolveAndCreate([
  // TODO: add services here
]);
useContainer(Container);

const app: Koa = createKoaServer({
  routePrefix: '/api',
  cors: true,
  controllers: [AuthController, UserController, AnimeSearchController],
  middlewares: [
    // TODO: add middlewares here
  ]
});

app.listen(config.port);

console.log(`Server is running on port ${config.port}`);
