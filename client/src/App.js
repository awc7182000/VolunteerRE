import './App.css';
import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import services from './Components/pages/Services'
import signup from './Components/pages/SignUp'


function App() {
  return(
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={services} />
          <Route path='/sign-in' component={signup} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
