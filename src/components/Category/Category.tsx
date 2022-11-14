import React, {FC, useState} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';

import {EditCategory} from '../EditCategory/EditCategory';
import {Props} from './types';
import './category.css';


const Category_: FC<Props> = ({ category, dispatch }) => {

  const { id, description, color } = category;
  const [edit, setEdit] = useState(false);

  const editColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_CATEGORY_COLOR", id, color: event.target.value });
  }

  const deleteCategory = () => {
    dispatch({ type: "REMOVE_CATEGORY", id });
  }

  const handleClick = () => {
    setEdit(true);
  }
  const closeEdit = () => {
    setEdit(false);
  }

  if (edit) {
    return <EditCategory id={id} closeEdit={closeEdit} />;
  }

  return (
    <div className='category'>
      <div className='categoriesEditor__categoryAndButtons' key={id}>
        <input
          type='color'
          value={color}
          onChange={editColor}
          className='categoriesEditor__categoryAndButtons-input'
        />
        <span className='categoriesEditor__categoryAndButtons-category'>
          {description}
        </span>
        <div className='categoriesEditor__categoryAndButtons-buttons'>
          <button
            className='categoriesEditor__categoryAndButtons-buttons-edit'
            onClick={handleClick}
            aria-label='редактировать'
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className='categoriesEditor__categoryAndButtons-buttons-delete'
            onClick={deleteCategory}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
}

export const Category = connect()(Category_);
