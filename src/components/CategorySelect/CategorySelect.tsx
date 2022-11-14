import React, {FC} from 'react';
import {connect} from 'react-redux';

import {StateCategories} from '../../redux/types';
import {Props} from './types';
import './categorySelect.css';


const CategorySelect_: FC<Props> = ({ categories, value, onChange }) => {
  return (
    <div className="categorySelect">
      <select
        className="categorySelect__select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option className="categorySelect__option_disabled" value="default">
          no category
        </option>
        {categories.map(({id, description}) => (
          <option
            value={id}
            className="categorySelect__option"
            key={id}>{description}
          </option>
        ))}
      </select>
    </div>
  );
}

const mapStateToProps = (state: StateCategories) => {
  return { categories: state.categories };
}

export const CategorySelect = connect(mapStateToProps)(CategorySelect_);

