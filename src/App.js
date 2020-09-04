import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';

// import CakeContainer from './component/CakeContainer';
// import HookContainer from './component/HookContainer';
// import IceCreamHook from './component/IceCreamHook';
// import CakeBuyNumber from './component/CakeBuyNumber';
import UserAsync from './component/UserAsync';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserAsync />
      </div>
    </Provider>
  );
}

export default App;
