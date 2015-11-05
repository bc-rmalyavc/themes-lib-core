import $ from 'jquery';
import PageManager from '../../PageManager';
import initAlertDismissable from './alertDismissable';
import initDownloadGallery from './downloadGallery';
import FormValidator from '../utils/FormValidator';

export default class Account extends PageManager {
  constructor() {
    super();
    this._bindEvents();
  }

  _bindEvents() {
    initAlertDismissable();
    initDownloadGallery();

    const $body = $(document.body);

    // Toggle - a simple way to toggle elements
    $body.on('click', '[data-account-toggle]', (event) => {
      const $el = $(event.currentTarget);
      const $target = $($el.data('account-toggle'));
      $target.toggle();
    });
  }

  loaded() {
    new FormValidator(this.context).initGlobal();
  }
}
