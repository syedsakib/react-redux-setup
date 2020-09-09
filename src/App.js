import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
//import HomePage from './component/router/HomePage';
import Pagination1 from './component/pagination1/Pagination1';

// import CakeContainer from './component/CakeContainer';
// import HookContainer from './component/HookContainer';
// import IceCreamHook from './component/IceCreamHook';
// import CakeBuyNumber from './component/CakeBuyNumber';
//import UserAsync from './component/UserAsync';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Pagination1 />
      </div>
    </Provider>
  );
}

export default App;
