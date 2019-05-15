import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Homepage from './components/HomePage';
import Header from './components/Header';

let history = createBrowserHistory();

const appStyle = {

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%"
}

  class App extends React.Component {
    render()
    {
      return (

        <>

        <Header/>
        <Router history={history}>
          <div style={appStyle}>
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

          </div>
        </Router>

       </>

      );
    }


}

export default App;
