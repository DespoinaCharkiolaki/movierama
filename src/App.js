import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Main from './components/header/main.js';

const App = () => (
  <BrowserRouter basename="/">
    <div>
      <Main />
    <Redirect to='/' />
    </div>
  </BrowserRouter>
);

export default App;
