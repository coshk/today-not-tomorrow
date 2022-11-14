import {Category} from '../../redux/types';
import {Dispatch, SetStateAction} from 'react';

export interface Props {
  categories: Category[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}
