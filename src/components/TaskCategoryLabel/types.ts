import {Dispatch} from 'react';
import {AddCategoryAction} from '../../redux/categories/types';
import {Category, ITask} from '../../redux/types';


export type OwnProps = { categoryId: string; }
export interface State {
  categories: Category[];
  tasks: ITask[];
}

export interface Props {
  categoryId: string;
  id: string;
  description: string;
  color: string;
  dispatch: Dispatch<AddCategoryAction>;
}

