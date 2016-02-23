# BC-Core

A collection of shared templates, styles, and javascript that can be used in themes to save time.

These templates are a work-in-progress, so please feel free to jump in on the fun !

## Installation

Add or update your theme using the `install.sh` script. It's a good idea to do this on a clean brach so you can easily see the changes.

```
/path/to/bc-core/install.sh /path/to/my-theme
```

This adds the following directories to your theme:

- `templates/core/`
- `assets/js/core/`
- `assets/scss/core/`

These should be added to git, but remember that they do not belong to your theme—if you want to make a change either copy the file, or submit a PR to the bc-core repo.

In addition, it also adds a `core` object to your `lang/en.json` file.

## Templates

All core templates are installed into your theme at `templates/core`. These have no effect on your theme, unless you explicitly include them.

## Account Pages

The core account pages are designed so that you can import them from your account page templates in your theme and get a fully-functioning account section for free.

For example:

```html
<!-- templates/pages/account/edit.html -->
{{#partial "page"}}
  {{> core/account/edit}}
{{/partial}}
{{> layout/base}}
```

## Giftcard Pages

The three giftcard pages work in the same way except each of your templates need to include two partials, one for the page content and one for the navigation.

By default the navigation will be styled as three inline-block links in a horizontal row. To drop this styling and use your own, set `$giftcard-nav-use-default-styles` to false in your scss.

```html
<!-- templates/pages/gift-certificate/purchase.html -->
{{#partial "page"}}
  <article class="page-container">
    {{> core/gift-certificate/navigation page='purchase'}}
    <div class="page-content">
      {{> core/gift-certificate/purchase}}
    </div>
  </article>
{{/partial}}
{{> layout/base}}
```

The giftcard PageManager class should be all you need for the giftcard functionality to work in your theme:

```javascript
// assets/js/theme/GiftCertificate.js

import GiftCertificate from './core/GiftCertificate';

export default GiftCertificate;
```

## Unavailable pages

Partials for maintenance/hibernation pages come with their own stripped-down layout file and therefore should be included standalone without any reference to the base.html layout:

```html
<!-- templates/pages/unavailable/maintenance.html -->
{{> core/unavailable/maintenance}}

```

## Invoices

The printable invoice template (`/templates/core/account/orders/invoice.html`) is a standalone template with its own layout that does not rely on theme.scss at all. It uses invoice.css, which you'll need to include as a separate file under `/assets/scss`:

```scss
// assets/scss/invoice.scss
@import "core/invoice";

// this template doesn't really merit any overrides,
// but you could do this if you really wanted to:
body {
  font-family: $primary-font;
}

```

## Styles

Import the core styles into your theme with `@import "core/account";`. Have a look at the root `core/_account.scss` for a reference of what variables are at your disposal.

Below is an example of how you could include core styles into your theme. This example is overriding some core variables and styles.

```
// Variable Overrides
$account-light-color: $input-background-color;
$account-accent-color: $accent-color;
$account-border-color: $border-color;
$account-gutter: $gutter;
$account-font-size: $font-size;

// Import
@import "core/account";

// Style Overrides
.account-wrapper {
  @extend %wrapper;
  margin-top: $gutter * 2;
}
```

## Javascript

Core includes all javascript needed for the account pages to work -- just import and them immediately export the **Account.js**, **Auth.js** and **GiftCertificate.js** classes into your own theme:

```js
// assets/js/theme/Account.js
import Account from './core/Account';

export default Account;
```

###Additional `<select>` JS
But! If you're require additional javascript for your select inputs, extend Auth and Account  instead of exporting them and enjoy to the `selectWrapCallback()` method which is called every time a new `<select>` element is appended to the DOM (on any auth or account pages). Important when swapping between a select and text input in account address fields.

```js
// assets/js/theme/Auth.js
import CoreAuth from './core/Auth';

export default class Auth extends CoreAuth {
  selectWrapCallback($selectEl) {
    console.log('there is a new select element on the page', $selectEl);
  }
};
```

## Caveats

 - As of December 21, 2015, please style your own product grids.
 - You will need a `default_image` path in your config.json theme settings for the missing image fallback to work.
