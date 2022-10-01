import logo from './logo.svg';
import './App.css';

import React, { Component, useState } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const App=()=> {
  const [progress, setProgress] = useState(0);
 
  const setProgresss = (progress) =>{
    setProgress({progress:progress});
  }
  
    return (
      <div>
        <Router>
        <Navbar title="Todays News "/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       
        <Switch>
        <Route exact path="/">  <News setProgress={setProgress} pageSize={12} key="general" country="in" category="general"/> </Route>
        <Route exact path="/entertainment">  <News setProgress={setProgress} pageSize={12} key="business" country="in" category="entertainment"/> </Route>
        <Route exact path="/sports">  <News setProgress={setProgress} pageSize={12} key="sports" country="in" category="sports"/> </Route>
        <Route exact path="/technology">  <News setProgress={setProgress} pageSize={12}  key="technology" country="in" category="technology"/> </Route>
        <Route exact path="/science">  <News setProgress={setProgress} pageSize={12} key="science" country="in" category="science"/> </Route>

        </Switch>
        </Router>
      </div>
    )
  
}

export default App