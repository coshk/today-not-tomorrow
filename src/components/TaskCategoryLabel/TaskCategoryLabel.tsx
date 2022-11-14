import React, {FC} from 'react';
import {connect} from 'react-redux';

import {OwnProps, Props, State} from './types';


const TaskCategoryLabel_: FC<Props> = (category) => {
  if (!category) {
    return null;
  }
  const { color, description } = category;

  return (
    <div className="task__option" style={{ backgroundColor: color }}>
      {description}
    </div>
  );
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return state.categories.find((category) => category.id === ownProps.categoryId) ?? null;
};

export const TaskCategoryLabel = connect(mapStateToProps)(TaskCategoryLabel_);
