import React, {FC} from 'react';
import {connect} from 'react-redux';

import {Form} from '../Form/Form';
import {EDIT_TASK} from '../../redux/tasks/actions';
import {ITask} from '../../redux/types';
import {EditTaskArgs, EditTaskDispatch, EditTaskOwnProps, OwnProps, Props, State} from './types';



const EditTask: FC<Props> = (
  { id, editTask, onClose, defaultValue, defaultOption }
) => {
  const handleSubmit = (data: { task: string; option: string; }) => {
    editTask(data);
    onClose();
  }
  return (
    <Form
      id={id}
      onSubmit={handleSubmit}
      defaultValue={defaultValue}
      defaultOption={defaultOption}
    />
  );
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  const obj = state.tasks.find((task: ITask) => task.id === ownProps.id);
  return {
    defaultValue: obj?.description,
    defaultOption: obj?.categoryId,
  };
};

const mapDispatchToProps = (dispatch: EditTaskDispatch, ownProps: EditTaskOwnProps) => {
  return {
    editTask: ({ task, option }: EditTaskArgs) => {
      dispatch({
        description: task,
        categoryId: option,
        type: EDIT_TASK,
        id: ownProps.id,
        done: false,
        date: new Date().toDateString()
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
