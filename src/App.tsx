import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Error from './pages/Error';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
      <Switch>
        <Route path='/book/:id'>
          <Detail />
        </Route>
        <Route path='/edit/:id'>
          <Edit />
        </Route>
        <Route path='/add'>
          <Add />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/*'>
          <NotFound />
        </Route>
      </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
