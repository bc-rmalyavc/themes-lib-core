import PageManager from '../page-manager';
import $ from 'jquery';

export default class Account extends PageManager {
  constructor() {
    super();
    this._bindEvents();
  }

  _bindEvents() {
    this.$el.on('click', '.account-order-details', (event) => {
      event.preventDefault();
      this._toggleDetails(event);
    });
  }

  _toggleDetails(event) {
    const id = event.currentTarget.hash;
    $(id).toggleClass('visible');
  }
}
