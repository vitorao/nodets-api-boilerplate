import { Request, Response } from 'express';

import UserController from '../Controllers/UserControllers/UserController';
import { RouteDefinition } from '../Decorators/types/RouteDefinition';

export default class Routes {

  initRoutes(app: any){
    [
      UserController
    ].forEach(controller => {
      const instance = new controller();
      const prefix = Reflect.getMetadata('prefix', controller);
      const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller);
      
      routes.forEach(route => {
        app[route.requestMethod](prefix + route.path, (req: Request, res: Response) => {
          instance[route.methodName](req, res);
        });
      });
    });
  }

}
