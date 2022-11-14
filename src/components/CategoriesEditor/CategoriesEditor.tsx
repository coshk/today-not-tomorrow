import React, {FC} from 'react';
import {connect} from 'react-redux';

import {AddCategory} from '../AddCategory/AddCategory';
import {Category} from '../Category/Category';
import {StateCategories} from '../../redux/types';
import {ICategory, Props} from './types';
import './categoriesEditor.css';


const CategoriesEditor_: FC<Props> = ({categories}) => {

  return (
    <div className="categoriesEditor">
      <div className="categoriesEditor__add">
        <AddCategory />
      </div>
      <div className="categoriesEditor__categoriesList">
        <span className="category__categoriesList_title">
          current list of the categories
        </span>
        {categories.map((c: ICategory) => (
          <Category category={c} key={c.id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateCategories) => {
  return {
    categories: state.categories,
  };
}

export const CategoriesEditor = connect(mapStateToProps)(CategoriesEditor_);
