import {RemoveTaskAction, ToggleTaskAction} from '../../redux/tasks/types';

export interface Options {
  year: string;
  month: string;
  week: string;
  day: string;
  weekday: string;
  timezone: string;
  hour: string;
  minute: string;
}

export type OwnProps = { id: string; };
export type TaskDispatch = (arg0: RemoveTaskAction | ToggleTaskAction) => void;

export interface Props {
  id: string;
  task: string;
  date: string;
  option: string;
  done: boolean;
  handleDeleteTask: () => void;
  handleCompleteTask: () => void;
}
