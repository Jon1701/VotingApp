////////////////////////////////////////////////////////////////////////////////
// React
////////////////////////////////////////////////////////////////////////////////
import React from 'react';

// Containers.
import App from 'containers/App';

////////////////////////////////////////////////////////////////////////////////
// React Router
////////////////////////////////////////////////////////////////////////////////
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

////////////////////////////////////////////////////////////////////////////////
// Component Definition
////////////////////////////////////////////////////////////////////////////////

export default class UserInterface extends React.Component {

  // Component constructor.
  constructor(props) {
    super(props);
  }

  // Component render.
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>

        </Route>
      </Router>
    )
  }
}
