import { strEnum } from '../../Decorators/types/utils';

const userRoutesControllers = strEnum([
  'index',
  'setUser',
  'updateUser',
  'replaceUser',
  'removeUser',
])

export type userRoutesControllers = keyof typeof userRoutesControllers;
