import $ from 'jquery';
import PageManager from '../page-manager';

export default class Account extends PageManager {
  constructor() {
    super();
    this._bindEvents();
  }

  _bindEvents() {
    $('.account-order-details').on('click', (event) => {
      event.preventDefault();
      this._toggleDetails(event);
    });
  }

  _toggleDetails(event) {
    const id = event.currentTarget.hash;
    $(id).toggleClass('visible');
  }
}
