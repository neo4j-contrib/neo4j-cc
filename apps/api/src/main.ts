import { join } from 'path';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as exphbs from 'express-handlebars';
import { auth, ConfigParams as OidcConfigParams } from 'express-openid-connect';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['verbose']
  });

  // Handlebars views
  const viewsPath = join(__dirname, './assets/views');
  app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }));
  app.set('views', viewsPath);
  app.set('view engine', '.hbs');


  const globalPrefix = '';
  const port = process.env.NX_PORT || 4200;
  const baseURL = (process.env.NODE_ENV !== 'production') ?
    `http://localhost:${port}/${globalPrefix}`
    : process.env.NX_BASE_URL || 'NX_BASE_URL must be provided in environment!'

  // OIDC
  const oidcConfig:OidcConfigParams = {
    authRequired: false,
    auth0Logout: true,
    authorizationParams: {
      response_type: 'code id_token',
      audience: process.env.NX_AUTH0_AUDIENCE,
      scope: 'openid profile email',
    },
    baseURL,
    clientID: process.env.NX_AUTH0_CLIENTID,
    clientSecret: process.env.NX_AUTH0_CLIENT_SECRET,
    secret: process.env.NX_SECRET,
    issuerBaseURL: process.env.NX_ISSUER_BASE_URL,
  };


  app.use(auth(oidcConfig));

  if (globalPrefix) app.setGlobalPrefix(globalPrefix);
  await app.listen(port, () => {
    Logger.log(`Listening at ${oidcConfig.baseURL}`);
  });
}

bootstrap();
