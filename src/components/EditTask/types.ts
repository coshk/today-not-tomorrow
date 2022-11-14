import {ITask, StateCategories} from '../../redux/types';
import {EditTaskAction} from '../../redux/tasks/types';


export interface Props {
  id: string;
  editTask: (arg0: EditTaskArgs) => void;
  onClose: () => void;
  defaultValue?: string;
  defaultOption?: string;
}

export interface State {categories: StateCategories; tasks: ITask[]}
export interface OwnProps {id: string; onClose: () => void}

export type EditTaskDispatch = (arg0: EditTaskAction) => ITask;
export type EditTaskOwnProps = {id: string; onClose: () => void;};
export type EditTaskArgs = {option: string; task: string;};
