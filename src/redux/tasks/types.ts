import { ADD_TASK,
EDIT_TASK,
REMOVE_TASK,
TOGGLE_TASK } from './actions';
import {ITask} from '../types';

export interface AddTaskAction extends ITask {
  type: typeof ADD_TASK;
}
export interface EditTaskAction extends ITask {
  type: typeof EDIT_TASK;
}
export interface RemoveTaskAction extends Partial<ITask> {
  type: typeof REMOVE_TASK;
}
export interface ToggleTaskAction extends Partial<ITask> {
  type: typeof TOGGLE_TASK;
}

export type TaskActionTypes =
  | AddTaskAction
  | EditTaskAction
  | RemoveTaskAction
  | ToggleTaskAction;

