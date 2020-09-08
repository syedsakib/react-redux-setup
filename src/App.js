import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';

// import CakeContainer from './component/CakeContainer';
// import HookContainer from './component/HookContainer';
// import IceCreamHook from './component/IceCreamHook';
// import CakeBuyNumber from './component/CakeBuyNumber';
//import UserAsync from './component/UserAsync';
//import HomePage from './component/router/HomePage';
//import Form1 from './component/form/Form1';
import Form2 from './component/form/Form2';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Form2 />
      </div>
    </Provider>
  );
}

export default App;
