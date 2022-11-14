import React, {useState} from 'react';
import {connect} from 'react-redux';

import {Category, StateCategories} from '../../redux/types';
import {EditCategoryDispatch, OwnProps} from './types';


//TODO props
const EditCategory_ = ({
  id,
  initialDescription,
  initialColor,
  save,
  closeEdit,
}: any) => {
  console.log({
    id,
    initialDescription,
    initialColor,
    save,
    closeEdit,
  });

  const [description, setDescription] = useState(initialDescription);
  const [color, setColor] = useState(initialColor);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    save({
      description,
      color,
      id,
    });
    closeEdit();
  }
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }
  return (
    <div className="editCategory">
      <form className="editCategory__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="editCategory__form_inputText"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          type="color"
          className="editCategory__form_inputColor"
          value={color}
          onChange={handleColorChange}
        />
        <button type="submit" className="editCategory__form_btn">
          edit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state: StateCategories, ownProps: OwnProps) => {
  const category = state.categories.find((category) =>
    category.id === ownProps.id ? category.description : null
  );
  return {
    initialDescription: category?.description,
    initialColor: category?.color,
  };
}


const mapDispatchToProps = (dispatch: EditCategoryDispatch) => {
  return {
    save: ({ description, color, id }: Category) => {
      dispatch({
        type: 'EDIT_CATEGORY',
        description,
        color,
        id,
      });
    },
  };
}

export const EditCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory_);
