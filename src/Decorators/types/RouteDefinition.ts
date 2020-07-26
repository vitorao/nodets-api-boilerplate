import { userRoutesControllers } from '../../Controllers/UserControllers/IUserRoutes';

export type AllControllers = userRoutesControllers;

export interface RouteDefinition {
  path: string;
  requestMethod: 'get' | 'post' | 'delete' | 'patch' | 'put';
  methodName: AllControllers
}
