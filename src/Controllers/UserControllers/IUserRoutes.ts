import { strEnum } from '../../Decorators/types/utils';

const userRoutesControllers = strEnum([
  'index',
  'details',
])

export type userRoutesControllers = keyof typeof userRoutesControllers;
