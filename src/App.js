import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPages from "./pages/Login/SignInPages";
import RegistrasiPages from "./pages/Registrasi/RegistrasiPages";
import HomeUsersPages from "./pages/Home/HomeUsersPages";
import HomeAdminPages from "./pages/Home/HomeAdminPages";
import EventBus from "./common/EventBus";

class App extends Component {

  componentDidMount() {
    const user = this.props.user;
  
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("Users"),
        showAdminBoard: user.roles.includes("Admin"),
      });
    }
  
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  render() {
    //const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/signin' component={SignInPages} />
            <Route exact path='/registrationuser' component={RegistrasiPages} />
            <Route exact path='/users' component={HomeUsersPages} />
            <Route exact path='/admin' component={HomeAdminPages} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;