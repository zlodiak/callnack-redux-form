import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Page4smart from './Components/Page4/Page4smart';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route exact path='/'    render={ () => <Page4smart/> }/>
      </main>
    </BrowserRouter>
  );
}

export default App;
