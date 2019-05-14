import React, { Fragment } from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Homepage from './components/HomePage';


let history = createBrowserHistory();
  class App extends React.Component {
    render()
    {
      return (

        <>
        <Router history={history}>
          <Switch>
            <Route
            exact
            path={"/"}
            render={props => <Homepage/>}
            />
             <Route
            path={"/test"}
            render={props => <p>test</p>}
            />


          </Switch>
        </Router>

       </>

      );
    }


}

export default App;
