import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPages from "./pages/Login/SignInPages";
import RegistrasiPages from "./pages/Registrasi/RegistrasiPages";


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/signin' component={SignInPages} />
          <Route exact path='/registrationuser' component={RegistrasiPages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;