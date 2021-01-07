
import React, { Component, Suspense } from 'react'

import './../styles/App.scss';
import { Footer } from './Footer';
import Header from './Header';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import history from '../history';
import NotFound from '../containers/NotFound';
import routes from '../layout/routes'
import isAuthenticated from '../layout/utils/isAuthenticated';
import ReactNotification from 'react-notifications-component'
import { Notifications } from '../layout/utils/Notifications';
import Loader from '../layout/utils/Loader';

class App extends Component {
  render() {


    const { pathname } = this.props.location;
    const header = pathname !== '/auth/login' && pathname !== '/auth/register' ? <Header /> : '';
    const footer = pathname !== '/auth/login' && pathname !== '/auth/register' ? <Footer /> : '';

    const RenderRoute = (route) => {

      // Set title of the page as per route
      document.title = route.title || 'React Learning'

      if (route.needsAuth && !isAuthenticated()) {
        const ToasterType = "danger"
        const ToasterTitle = 'Unauthorized 😟';
        const Toasterdescription = 'You are not authorized to access the page ! Please login to access the page.';
        Notifications(ToasterType, ToasterTitle, Toasterdescription);
        return <Redirect to='/auth/login' />
      } else {
        return <Route
          path={route.path}
          exact
          render={(props) => <route.component {...props} />}
        />
      }
    }

    return (
      <div>
        <ReactNotification />
        {header}
        <div className="container py-5">

          <Suspense fallback={<Loader /> }>
            <Switch >
              {routes.map((route, index) => (
                <RenderRoute {...route} key={index} />
              ))}
            </Switch>
          </Suspense>

        </div>
        {footer}

      </div>
    )
  }
}

export default withRouter(App);
