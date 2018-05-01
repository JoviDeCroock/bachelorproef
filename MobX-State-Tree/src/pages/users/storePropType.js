import PropTypes from 'prop-types';

export default PropTypes.shape({
  clearList: PropTypes.func,
  clearSelection: PropTypes.func,
  fetchUser: PropTypes.func,
  fetchUsers: PropTypes.func,
  limit: PropTypes.number,
  offset: PropTypes.number,
  searchString: PropTypes.string,
  selectedUser: PropTypes.object,
  status: PropTypes.symbol,
  users: PropTypes.object,
});
