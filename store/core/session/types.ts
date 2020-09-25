import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type SessionActions = ActionType<typeof actions>;

export interface SessionType {
  id?: string;
}
