import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './home'
import Healthcare from './healthcare'
import Dashboard from './dashboard'
import Form from './Form'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path ="/">
          <Home />
        </Route>
    
        <Route exact path ="/healthcare">
          <Healthcare />
        </Route>

        <Route exact path ="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path ="/form">
          <Form />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
