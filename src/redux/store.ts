import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoriesReducer } from "./categories/categoriesReducer";
import { taskReducer } from "./tasks/tasksReducer";

const reducer = combineReducers({
  categories: categoriesReducer,
  tasks: taskReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools()
);
console.log(store.getState()); // what in state

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
