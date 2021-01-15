import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/home';
import UserInformation from './pages/user-information';
import Login from './pages/login';

import store from './store';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route component={Home} path='/' exact />
          <Route component={Login} path='/login' exact />
          <Route component={UserInformation} path='/user-information' exact />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
