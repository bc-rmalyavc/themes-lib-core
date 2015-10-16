import PageManager from '../../PageManager';
import $ from 'jquery';

export default class GiftCertificate extends PageManager {
  constructor() {
    super();
    this.$purchaseForm = $('[data-gift-certificate-purchase-form]');
  }

  loaded() {
    if (this.$purchaseForm.length) {
      this._bindPreview();
    }
  }

  _bindPreview() {
    // TODO: validation
    $('[data-preview-url]').on('click', (event) => {
      const previewUrl = $(event.currentTarget).data('preview-url') + '&' + this.$purchaseForm.serialize();
      event.preventDefault();
      window.open(previewUrl);
    });
  }
}
