import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faCheck} from '@fortawesome/free-solid-svg-icons';
import Snackbar from '@material-ui/core/Snackbar';

import {CategorySelect} from '../CategorySelect/CategorySelect';
import useStyles from './snackbarStyle';
import {Props} from './types';
import './form.css';


export const Form = ({
  defaultValue = '',
  defaultOption = 'default',
  buttonText,
  onSubmit,
}: Props) => {

  const classes = useStyles();
  const [task, setTask] = useState(defaultValue);
  const [emptyInput, setEmptyInput] = useState(false);
  const [option, setOption] = useState(defaultOption);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task === '') {
      setEmptyInput(true);
      return;
    }
    onSubmit({ task, option });
    setTask('');
  }

  return (
    <div className="form">
      <form className="form__form" onSubmit={handleSubmit}>
        <div className="form__inputAndSelectWrapper">
          <input
            type="text"
            value={task}
            className="form__input"
            onChange={handleChange}
            maxLength={60}
          />
          <CategorySelect value={option} onChange={setOption} />
        </div>
        <button type="submit" className="form__approveButton" title="add">
          <FontAwesomeIcon icon={buttonText === 'add' ? faPlus : faCheck} />
        </button>
      </form>
      <Snackbar
        className={classes.snackbar}
        open={emptyInput}
        autoHideDuration={3000}
        onClose={() => setEmptyInput(false)}
        message="type a task"
      />
    </div>
  );
}
