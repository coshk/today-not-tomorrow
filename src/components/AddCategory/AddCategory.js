import React, { useState } from "react";
import { connect } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./addCategory.css";

export const AddCategory = connect()(AddCategory_);
function AddCategory_({ dispatch }) {
  const [newCategory, setNewCategory] = useState("");
  const [color, setColor] = useState("#000000");
  function handleChangeText(e) {
    setNewCategory(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD_CATEGORY", description: newCategory, color });
  }
  function handleChangeColor(e) {
    setColor(e.target.value);
  }
  return (
    <form className="categoriesEditor__addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newCategory}
        onChange={handleChangeText}
        className="categoriesEditor__addForm_input"
      />
      <input
        type="color"
        value={color}
        onChange={handleChangeColor}
        className="categoriesEditor__addForm_input"
      />
      <button className="categoriesEditor__addForm_btn" type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}
