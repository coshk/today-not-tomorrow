import React, {FC} from 'react';
import { TodayList } from '../TodayList/TodayList';
import { AddTask } from '../AddTask/AddTask';

export const Tasks: FC = () => (
    <>
      <AddTask />
      <TodayList />
    </>
);

