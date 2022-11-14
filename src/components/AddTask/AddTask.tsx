import React, {FC} from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Form } from '../Form/Form';
import { ADD_TASK } from '../../redux/tasks/actions';
import {AddTaskDispatch, Props} from './types';


const AddTask_: FC<Props> = ({ addTask }) => <Form buttonText="add" onSubmit={addTask} />;

const mapDispatchToProps = (dispatch: AddTaskDispatch) => {
  return {
    addTask: ({ task, option }: { task: string; option: string; }) =>
      dispatch({
        type: ADD_TASK,
        description: task,
        categoryId: option,
        id: uuidv4(),
        done: false,
        date: new Date().toDateString()
      }),
  };
}

export const AddTask = connect(null, mapDispatchToProps)(AddTask_);
