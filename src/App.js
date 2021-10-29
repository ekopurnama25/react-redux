import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import RegistrasiPages from "./pages/Registrasi/RegistrasiPages";


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/rgsusers' component={RegistrasiPages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;