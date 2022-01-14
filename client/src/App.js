import React, { useContext, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Members from './pages/Members';
import AppNavigation from './pages/NavBar';
import GlobalStyle from './styles/globalStyles';
import CoverWrapperLayout from './components/shared/CoverWrapperLayout';
import PageLoader from './components/shared/FullPageLoader';
import PageNotFound from './components/shared/404';
/* Even though this is the App.js file, in the end we are not exactly exporting
   the App component.  We actually set up the app component to implement our react
   router, but in the end we export App wrapped in the context provider */

function App() {
  /* Here we subscribe the authentication context using the useContext hook
     we use isAuth to determine whether the user is logged in, and setIsAuth
     to change their status on logout. */

  const { isAuth } = useContext(AuthContext);
  console.log('App auth: ', isAuth);

  /* here we are ceating a private route wrapper to prevent front end routing to
     restricted pages.  The ({ component: Component, ...rest })  argument that is
     passed to this functional component is essentially the same as just passing
     props, but using object destucturing.  the ...rest is literally the rest of
     the props that were not destructured. */

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        <AppNavigation>
          <Component {...props} />
        </AppNavigation>
      )}
    />
  );

  const AuthenticatedApp = () => {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Members} />
          <PrivateRoute path="/members" component={Members} />
          <Route
            path="*"
            children={
              <CoverWrapperLayout subHead="signOut">
                <PageNotFound />
              </CoverWrapperLayout>
            }
          />
        </Switch>
      </Router>
    );
  };

  const UnAuthenticatedApp = () => {
    return (
      <Router>
        <CoverWrapperLayout>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/signup"
              render={(props) => <Signup {...props} />}
            />
            <Route path="*" children={<PageNotFound />} />
          </Switch>
        </CoverWrapperLayout>
      </Router>
    );
  };

  return (
    <Suspense fallback={<PageLoader />}>
      {isAuth ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </Suspense>
  );
}

/* Here we export the final product of our app/context configuration, and
   even though it is unnamed here, it will be imported as App in index.js */
export default () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  );
};
