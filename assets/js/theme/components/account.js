import $ from 'jquery';

export default class Account {
  constructor(el) {
    this.$el = $(el);

    this._bindEvents();
  }

  _bindEvents() {
    this.$el.on('click', '.account-order-details', (e) => {
      e.preventDefault();
      const id = e.currentTarget.hash;

      $(id).toggleClass('visible');

    });
  }
}
