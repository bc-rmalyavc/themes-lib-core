import $ from 'jquery';
import PageManager from '../../PageManager';
import initAlertDismissable from './alertDismissable';
import initDownloadGallery from './downloadGallery';
import updateState from './updateState';

export default class Account extends PageManager {
  loaded() {
    this._bindEvents();
  }

  _bindEvents() {
    initAlertDismissable();
    initDownloadGallery();

    updateState(false, () => {
      // TODO
    });

    // Toggle - a simple way to toggle elements
    $(document.body).on('click', '[data-account-toggle]', (event) => {
      const $el = $(event.currentTarget);
      const $target = $($el.data('account-toggle'));
      $target.toggle();
    });
  }
}
