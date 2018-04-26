import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class UsersList extends Component {
  static propTypes = {
    userStore: PropTypes.shape({
      fetchUsers: PropTypes.func,
      users: PropTypes.object,
    }),
  }

  componentDidMount() {
    const { userStore: { fetchUsers } } = this.props;
    fetchUsers();
  }

  render() {
    const { userStore: { users } } = this.props;
    console.log(users.toJS());
    return (
      <Fragment>
        <h1>List</h1>
        <div>
          {users.map(({ id, name }) => <p key={id}>{name}</p>)}
        </div>
      </Fragment>
    );
  }
}

export default UsersList;
