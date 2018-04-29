import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import userStorePropType from '../../storePropType';
import { LOADING, ERROR } from '../../../../constants/states';

const ListWrapper = styled.div`
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.darkAccent};
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.darkAccent};
  display: flex;
  width: 100%;
  > * {
    height: 100%;
    padding: 10px;
    text-align: left;
  }
`;

const IdCell = styled.div`
  width:5%;
`;

const NameCell = styled.div`
  border-left: 1px solid ${({ theme }) => theme.darkAccent};
  font-size: 22px;
  width: 75%;
`;

const ButtonContainer = styled.div`
  border-left: 1px solid ${({ theme }) => theme.darkAccent};
  width: 20%;
`;

@inject('userStore')
@observer
class UsersList extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    userStore: userStorePropType,
  }

  componentDidMount() {
    const { userStore: { fetchUsers } } = this.props;
    fetchUsers();
  }

  componentWillUnmount() {
    const { userStore: { clearList } } = this.props;
    clearList();
  }

  reroute = (mode, id) => {
    const { history } = this.props;
    history.push(`/users/${id}/${mode}`);
  }

  render() {
    const { userStore: { status, users } } = this.props;

    if (status === LOADING) {
      return <div>Loading</div>;
    } else if (status === ERROR) {
      return <div>An unexpected Error occurred</div>;
    }

    return (
      <Fragment>
        <h1>List</h1>
        <ListWrapper>
          {users.map(({ id, name }) => (
            <ItemWrapper key={id}>
              <IdCell>{id}</IdCell>
              <NameCell>{name}</NameCell>
              <ButtonContainer>
                <button onClick={this.reroute.bind(this, 'update', id)}>Update</button>
                <button onClick={this.reroute.bind(this, 'view', id)}>View</button>
              </ButtonContainer>
            </ItemWrapper>
          ))}
        </ListWrapper>
      </Fragment>
    );
  }
}

export default UsersList;
