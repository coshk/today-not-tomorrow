import { ADD_TASK, EDIT_TASK, REMOVE_TASK, TOGGLE_TASK } from "./actions";
import { v4 as uuidv4 } from "uuid";
import {ITask} from '../types';
import {TaskActionTypes} from './types';

const tasks: ITask[] = [];

export function taskReducer(state = tasks, action: TaskActionTypes) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: uuidv4(),
          description: action.description,
          categoryId: action.categoryId,
          done: false,
          date: new Date(),
        },
      ];
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.id
          ? {
              ...task,
              description: action.description,
              categoryId: action.categoryId,
            }
          : task
      );
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.id
          ? {
              ...task,
              done: !task.done,
            }
          : task
      );
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
}
