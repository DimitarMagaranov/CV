
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div id="container">
      <Header />
      <Contacts />
    </div>
  );
}

export default App;
