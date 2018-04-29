import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { LOADING, ERROR } from '../../../../constants/states';

class UsersDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        userId: PropTypes.string,
      }),
    }),
  }

  componentDidMount() {
    const { match: { params: { userId } } } = this.props;
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div />
    );
  }
}

export default UsersDetail;
