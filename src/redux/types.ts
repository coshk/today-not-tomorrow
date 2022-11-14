export interface Category {
  id: string;
  description: string;
  color: string;
}

export interface StateCategories {
  categories: Category[]
}

export interface ITask  {
  id: string;
  description: string;
  categoryId: string;
  done: boolean;
  date: string;
}

export interface State {
  categories: StateCategories;
  tasks: ITask[]
}
