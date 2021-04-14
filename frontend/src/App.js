import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

import AboutPage from './components/Pages/AboutPage';
import InvestmentPage from './components/Pages/InvestmentPage';
import FaqPage from './components/Pages/FaqPage';
import ContactPage from './components/Pages/ContactPage';
import SigninPage from './components/Pages/SigninPage';
import SignupPage from './components/Pages/SignupPage';
import ReferralSignUp from './components/Pages/ReferralSignUp'

import Particles from 'react-particles-js';
import HomePage from './components/Pages/HomePage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Loading from './components/Pages/Loading';
import ToTop from './components/Pages/ToTop';
import UserDashboardPage from './components/Pages/UserDashboardPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
      authenticationToken: ""
    }
  }

  componentDidMount(){
    if(localStorage.getItem('authenticatedUser') !== null){
      const data = JSON.parse(localStorage.getItem('authenticatedUser'))
      this.setState({ authenticated: true });
      this.setAuthenticatedUserData(data);
      this.setAuthenticationToken(data.token);
    }
  }

  setAuthenticatedUserData = obj =>{
    localStorage.setItem("authenticatedUser", JSON.stringify(obj));
  }

  setAuthenticated = val =>{
    this.setState({ authenticated: val })
  }
  
  setAuthenticationToken = val =>{
    this.setState({ authenticationToken: val })
  }

  stopLoading = ()=>{
    this.setState({loading: false})
  }

  render() {
    const { location } = this.props;

    return (
      <div>
          <TransitionGroup className="page-holder">
              {/* <NavigationBar /> */}
            <CSSTransition key={ location.key } classNames="page" timeout="1000">
              <Switch location={ location }>
                <Route path="/dashboard/:username/" render={ props =>( <UserDashboardPage {...props}
                                                            setAuthenticationToken={this.setAuthenticationToken}
                                                            authenticated={ this.state.authenticated } 
                                                            authenticationToken={ this.state.authenticationToken }
                                                            setAuthenticated={ this.setAuthenticated }
                                                            setAuthenticatedUserData={ this.setAuthenticatedUserData } />
                )}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
      </div>
    );
  }
}

export default App;
