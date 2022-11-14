import React from 'react';
import { connect } from 'react-redux';

import { Task } from '../Task/Task';
import {ITask} from '../../redux/types';
import {RootState} from '../../redux/store';
import {Props} from './types';


const TodayList_ = ({ tasks }: Props) => {
  return (
    <div className="todayList">
      {tasks.map(({ id, description, categoryId, done, date }: ITask) => (
        <Task
          task={description}
          option={categoryId}
          done={done}
          id={id}
          key={id}
          date={date}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return { tasks: state.tasks };
}

export const TodayList = connect(mapStateToProps)(TodayList_);
