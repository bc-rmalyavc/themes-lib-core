import $ from 'jquery';
import PageManager from '../../PageManager';
import initAlertDismissable from './alertDismissable';

export default class Account extends PageManager {
  constructor() {
    super();
    this._bindEvents();
  }

  _bindEvents() {
    initAlertDismissable();

    const $body = $(document.body);

    $('.account-order-details').on('click', (event) => {
      event.preventDefault();
      this._toggleDetails(event);
    });

    // Toggle - a simple way to toggle elements
    $body.on('click', '[data-account-toggle]', (event) => {
      const $el = $(event.currentTarget);
      const $target = $($el.data('account-toggle'));
      $target.toggle();
    });
  }

  _toggleDetails(event) {
    const id = event.currentTarget.hash;
    $(id).toggleClass('visible');
  }
}
