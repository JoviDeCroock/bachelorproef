import { types } from 'mobx-state-tree';

export default types.model('User', {
  id: types.identifier(types.number),
  name: types.string,
});
