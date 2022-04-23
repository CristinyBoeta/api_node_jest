import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express-serve-static-core';
import { ForecastController } from './controllers/forecast';
import './util/module-alias';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers(forecastController);
  }

  public getApp(): Application {
    return this.app;
  }
}
