import PageManager from '../../PageManager';
import $ from 'jquery';
import FormValidator from '../utils/FormValidator';

export default class GiftCertificate extends PageManager {
  constructor() {
    super();
    this.$purchaseForm = $('[data-giftcard-purchase-form]');
    this.validatorOptions = {
      onValid: (event) => {
        this._bindPreview(event);
      },
    };
  }

  loaded() {
    if (this.$purchaseForm.length) {
      this.Validator = new FormValidator(this.context);
      this.Validator.initSingle(this.$purchaseForm, this.validatorOptions);
    }
  }

  _bindPreview() {
    const $buttonClicked = $(document.activeElement);
    if ($buttonClicked.data('preview-url')) {
      event.preventDefault();
      const previewUrl = `${$buttonClicked.data('preview-url')}&${this.$purchaseForm.serialize()}`;
      window.open(previewUrl);
    }
  }
}
