import React, {useState} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons';

import {TaskCategoryLabel} from '../TaskCategoryLabel/TaskCategoryLabel';
import EditTask from '../EditTask/EditTask';
import {formatDate} from './formatDate';
import {REMOVE_TASK, TOGGLE_TASK} from '../../redux/tasks/actions';
import {OwnProps, Props, TaskDispatch} from './types';
import './task.css';


const Task_ = ({
  id,
  task,
  date,
  option,
  done,
  handleDeleteTask,
  handleCompleteTask,
}: Props) => {
  const [edit, setEdit] = useState(false);
  const handleClose = () => setEdit(false);

  if (edit) {
    return <EditTask id={id} onClose={handleClose} />;
  }

  return (
    <div className="task">
      <label htmlFor="task__checkboxId" />
      <input
        type="checkbox"
        checked={done}
        onChange={handleCompleteTask}
        className="task__checkbox"
        id="task__checkboxId"
      />
      <div className="task__outputAndDateWrapper">
        <span className="task__output">{task}</span>
        <span className="task__date">{formatDate(date)}</span>
        <TaskCategoryLabel categoryId={option} />
      </div>
      <div className="task__buttonsWrapper">
        <button
          type="button"
          className="task__edit"
          title="edit"
          onClick={() => setEdit(true)}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button
          type="button"
          className="task__delete"
          title="delete"
          onClick={handleDeleteTask}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: TaskDispatch, ownProps: OwnProps) => {
  return {
    handleDeleteTask: () => {
      dispatch({
        type: REMOVE_TASK,
        id: ownProps.id
      });
    },
    handleCompleteTask: () => {
      dispatch({
        type: TOGGLE_TASK,
        id: ownProps.id,
      });
    },
  };
}

export const Task = connect(null, mapDispatchToProps)(Task_);
