import {AddTaskAction} from '../../redux/tasks/types';
import {ITask} from '../../redux/types';

export type AddTaskDispatch = (arg0: AddTaskAction) => ITask;

export interface Props {
  addTask: ({ task, option }: { task: string; option: string; }) => void
}
