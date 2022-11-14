import React, {FC, useState} from 'react';
import {connect} from 'react-redux';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {Props} from './types';
import './addCategory.css';


const AddCategory_: FC<Props> = ({ dispatch }) => {
  const [newCategory, setNewCategory] = useState('');
  const [color, setColor] = useState("#000000");

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_CATEGORY", description: newCategory, color });
    setNewCategory('');
    setColor("#000000");
  }
  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }

  return (
    <form className="categoriesEditor__addForm" onSubmit={handleSubmit}>
      <fieldset className="categoriesEditor__fieldset">
        <legend className="categoriesEditor__fieldset_legend">
          type a category
        </legend>
        <input
          type="text"
          value={newCategory}
          onChange={handleChangeText}
          className="categoriesEditor__fieldset_addCategoryInput"
        />
      </fieldset>
      <fieldset className="categoriesEditor__fieldset">
        <legend className="categoriesEditor__fieldset_legend">
          choose a color
        </legend>
        <input
          type="color"
          value={color}
          onChange={handleChangeColor}
          className="categoriesEditor__fieldset_addColorInput"
        />
      </fieldset>
      <button className="categoriesEditor__addForm_btn" type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}

export const AddCategory = connect()(AddCategory_);
