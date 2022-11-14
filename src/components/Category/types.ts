import {Dispatch} from 'react';

import {ICategory} from '../CategoriesEditor/types';
import {ChangeCategoryActionAction, RemoveCategoryAction} from '../../redux/categories/types';


export interface Props {
  category: ICategory;
  dispatch: Dispatch<RemoveCategoryAction | ChangeCategoryActionAction>;
}
