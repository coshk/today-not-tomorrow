import {Dispatch} from 'react';
import {AddCategoryAction} from '../../redux/categories/types';

export interface Props {
  dispatch: Dispatch<AddCategoryAction>
}
