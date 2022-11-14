import React, {FC} from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import './App.css';


const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
