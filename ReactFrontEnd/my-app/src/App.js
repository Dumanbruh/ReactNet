import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      
      <h3 class="d-flex justify-content-center m-3">
        React cal
      </h3>

      <nav className = "navbar navbar-expand-sm bg-light navbar-dark">
        <ul className = "navbar-nav">
          <li className = "nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Home">
              Home
            </NavLink>
          </li>
          <li className = "nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Department">
              Department
            </NavLink>
          </li>
          <li className = "nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Employee">
              Employee
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/department' component={Department}/>
        <Route path='/employee' component={Employee}/>
      </Switch>
      
    </div>
  </BrowserRouter>
    
  );
}

export default App;
