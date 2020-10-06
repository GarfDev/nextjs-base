import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type MainActions = ActionType<typeof actions>;

export interface Main {
  activeCart: boolean;
}
