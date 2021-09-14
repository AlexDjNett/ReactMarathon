import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Protected from './Protected';
import Unprotected from './Unprotected';
import Home from './Home';
import GuardedRoute from './GuardRoute'

function App() {
    const[isAutheticated, setisAutheticated] = useState(false);

  function login(e) {
    let isCheck = e.target.value;
    if (isCheck % 2 === 0) {
      setisAutheticated(true);
    } else {
      setisAutheticated(false);
    }

  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/protected'>
              Show protected information if
          </Link>
          </li>
         
        </ul>
        <input id="protected" type="text" onChange={login} size="5"></input>
        <br/>
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <GuardedRoute path='/protected' component={Protected} auth={isAutheticated} />
      </Switch>
    </Router>

  );
}

export default App;