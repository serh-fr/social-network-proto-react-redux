import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Provider, connect } from 'react-redux';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {initialisation} from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import { Suspense } from 'react';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends Component {

  componentDidMount() {
    this.props.initialisation();
  }

  render() {

    if(!this.props.initialized) {
      return <Preloader />
    }

    return <BrowserRouter>
      <Provider store={this.props.store}>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Sidebar store={this.props.store} />
          <div className='content'>
            <Route path='/dialogs' render={ () => <DialogsContainer /> } />
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
            <Route path='/users' render={ () => 
              <Suspense fallback={<Preloader/>}>
                <UsersContainer />
              </Suspense>} />
            <Route path='/login' render={() => <LoginContainer />} />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initialisation})(App);
