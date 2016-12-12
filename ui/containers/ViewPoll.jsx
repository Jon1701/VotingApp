////////////////////////////////////////////////////////////////////////////////
// React
////////////////////////////////////////////////////////////////////////////////
import React from 'react';

// Components.
import AlertBox from 'components/AlertBox';

////////////////////////////////////////////////////////////////////////////////
// Redux
////////////////////////////////////////////////////////////////////////////////
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions.
import { storeToken } from 'actions/index';

////////////////////////////////////////////////////////////////////////////////
// Other modules
////////////////////////////////////////////////////////////////////////////////

// External libraries.
import axios from 'axios';  // AJAX Request library.
const CONFIG_AXIOS = require('config/axios.json');  // Axios configuration file.

////////////////////////////////////////////////////////////////////////////////
// Component definition
////////////////////////////////////////////////////////////////////////////////
class ViewPoll extends React.Component {

  // Constructor.
  constructor(props) {
    super(props);

    // Bind methods to component instance.
    this.getPollInformation = this.getPollInformation.bind(this);
  }

  // Function to get poll information regarding a give Poll ID.
  getPollInformation(pollID) {

    // Send a GET request to the server to get poll information.
    axios.get('/api/view/poll/' + pollID, CONFIG_AXIOS).then((res) => {

      console.log(res.data)

    }).catch((err) => {

    });

    console.log(pollID);
  }

  // Render.
  render() {

    // Look up poll information with the given Poll ID.
    const pollInfo = this.getPollInformation(this.props.params.poll_id);

    return (
      <div className="text-center columns is-mobile">

        <div className="column is-8 is-offset-2">

          <h1 className="title">View Poll</h1>

          <div className="box">

            View Poll here

          </div>

        </div>

      </div>
    )
  }

}

// Maps state to props.
const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

// Allow access of dispatch actions as props.
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    storeToken: storeToken
  }, dispatch);
}

// Allow component access to Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);
