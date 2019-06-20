import React, { Component } from 'react';

// Actions are called as a props, anything from the redux state:
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTest } from '../actions/homeActions';

class Home extends Component {
  componentDidMount() {
    this.props.getTest();
  }

  render() {
    return (
      <div>
        <h1>React Redux Seed</h1>
        <ul className="list-group">
          {this.props.test.map(item => (
            <li className="list-group-item text-secondary">{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  test: PropTypes.array.isRequired,
  getTest: PropTypes.func.isRequired
};

// Redux
const mapStateToProps = state => ({
  test: state.home.test
});

export default connect(
  mapStateToProps,
  { getTest }
)(Home);
