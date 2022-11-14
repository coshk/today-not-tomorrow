import {
  ADD_CATEGORY,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
  CHANGE_CATEGORY_COLOR,
} from "./actions";
import {Category} from '../types';


export interface AddCategoryAction extends Partial<Category> {
  type: typeof ADD_CATEGORY;
}
export interface EditCategoryAction extends Partial<Category>  {
  type: typeof EDIT_CATEGORY;
}
export interface RemoveCategoryAction extends Partial<Category>  {
  type: typeof REMOVE_CATEGORY;
}
export interface ChangeCategoryActionAction extends Partial<Category>  {
  type: typeof CHANGE_CATEGORY_COLOR;
}

export type CategoryActionTypes =
  | AddCategoryAction
  | EditCategoryAction
  | RemoveCategoryAction
  | ChangeCategoryActionAction;


