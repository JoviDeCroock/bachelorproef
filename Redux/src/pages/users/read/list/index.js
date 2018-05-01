import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { LOADING, ERROR } from '../../../../constants/states';
import { Button } from '../../../../components';
import { fetchUsersAction } from '../../../../actions/users';
import { getUsersLimit, getUsersOffset, getUsersSearchString, getUsersStatus, getUsersData, getUsersTotalCount } from '../../../../selectors/users';

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
  width: 80%;
`;

const ButtonContainer = styled.div`
  border-left: 1px solid ${({ theme }) => theme.darkAccent};
  display: flex;
  justify-content: center;
  width: 15%;
`;

class UsersList extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    limit: PropTypes.number,
    offset: PropTypes.number,
    searchString: PropTypes.string,
    status: PropTypes.symbol,
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }

  componentDidMount() {
    const {
      fetchUsers, limit, offset, searchString,
    } = this.props;
    fetchUsers({ limit, offset, searchString });
  }

  reroute = (mode, id) => {
    const { history } = this.props;
    if (id) {
      history.push(`/${id}/${mode}`);
    } else {
      history.push(`/${mode}`);
    }
  }

  render() {
    const { status, users } = this.props;
    if (status === LOADING) {
      return <div>Loading</div>;
    } else if (status === ERROR) {
      return <div>An unexpected Error occurred</div>;
    }

    return (
      <Fragment>
        <h1>List</h1>
        <Button onClick={this.reroute.bind(this, 'create', undefined)} label="Create" />
        <ListWrapper>
          {users.map(({ id, name }) => (
            <ItemWrapper key={id}>
              <IdCell>{id}</IdCell>
              <NameCell>{name}</NameCell>
              <ButtonContainer>
                <Button onClick={this.reroute.bind(this, 'update', id)} label="Update" />
                <Button onClick={this.reroute.bind(this, 'view', id)} label="View" />
              </ButtonContainer>
            </ItemWrapper>
          ))}
        </ListWrapper>
      </Fragment>
    );
  }
}

export default connect(state => ({
  limit: getUsersLimit(state),
  offset: getUsersOffset(state),
  searchString: getUsersSearchString(state),
  status: getUsersStatus(state),
  totalCount: getUsersTotalCount(state),
  users: getUsersData(state),
}), {
  fetchUsers: fetchUsersAction,
})(UsersList);
