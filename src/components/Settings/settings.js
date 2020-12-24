import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { CategoriesEditor } from "../CategoriesEditor/CategoriesEditor";
import "./settings.css";

export function Settings() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="settings">
      <div className="settings__changeCategory">
        <div className="settings__changeCategory_buttonAndDescription">
          <span className="settings__changeCategory_description">
            edit categories
          </span>
          <button
            className="settings__changeCategory_button"
            onClick={() => setVisible((prev) => !prev)}
          >
            {visible ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
        </div>
        {!visible ? null : <CategoriesEditor />}
      </div>
    </div>
  );
}
