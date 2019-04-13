import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Header from './components/header/header.js';

const App = () => (
  <BrowserRouter basename="/">
    <div>
      <Header />
    <Redirect to='/#' />
    </div>
  </BrowserRouter>
);

export default App;
