import React from 'react';
import './App.css';
import CakeContainer from './component/CakeContainer';

import { Provider } from 'react-redux';
import store from './redux/store';
import HookContainer from './component/HookContainer';
import IceCreamHook from './component/IceCreamHook';
import CakeBuyNumber from './component/CakeBuyNumber';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HookContainer />
        <IceCreamHook />
        <CakeBuyNumber />
      </div>
    </Provider>
  );
}

export default App;
