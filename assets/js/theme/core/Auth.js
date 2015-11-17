import PageManager from '../../PageManager';
import updateState from './updateState';

export default class Account extends PageManager {
  loaded() {
    updateState(false, () => {
      // TODO
    });
  }
}
