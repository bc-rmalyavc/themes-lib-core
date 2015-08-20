import PageManager from '../page-manager';
import $ from 'jquery';

export default class Account extends PageManager {
  constructor() {
    super();

    this._bindEvents();
  }

  _bindEvents() {
    $(document.body).on('click', '.account-order-details', (e) => {
      e.preventDefault();
      const id = e.currentTarget.hash;

      $(id).toggleClass('visible');
    });
  }
}
