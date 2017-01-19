# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

### [3.2.3] - unreleased

### Changed
 - Update updateState.js to import stencil-utils properly with webpack
 
 
### [3.2.2] - 2017-01-19

#### Changed
 - Altered GC on load syntax to work with jQuery 3


### [3.2.1] - 2016-11-08

#### Changed
 - Altered logic of customizable form checkbox field so BC validates it correctly
 - Added breakpoint for account tables to switch to full-width on narrow screens


### [3.2.0] - 2016-07-28

#### Changed
 - Improved the publicly shared wishlist template


### [3.1.0] - 2016-07-18

#### Added
 - Added structured data / schema.org JSON-LD templates


### [3.0.0] - 2016-05-24

#### Added
 - Add an expanded pattern image to the swatch form field.


### [2.0.9] - 2016-05-18

#### Changed
 - Add a clause selecting the 'Pick one...' option by default if no other option has been selected.


### [2.0.8] - 2016-04-05

#### Changed
 - the 'Pick one...' default option for product selects disabled again. Adding to cart wasn't validating the empty value.


### [2.0.7] - 2016-03-14

#### Added
 - `data-product-attribute` and `data-product-attribute-value` attributes on all product option inputs to hook into enabling/disabling based on SKU inventory

#### Changed
 - the 'Pick one...' default option for product selects is no longer disabled


### [2.0.6] - 2016-03-08

#### Changed
 - Gift certificate page properly accounts for only one theme being enabled from the CP
 - Gift certificate preview doesn't refresh when checkboxes change

#### Added
 - An alert below the nav for explaining a customer's store credit, if a credit exists.


### [2.0.5] - 2016-03-02

#### Changed
- Updated the create account bullets to hide the wishlist text if wishlist is disabled.


### [2.0.4] - 2016-02-26

#### Added
- Added contact form lang strings to en.json
- Added captcha placeholder

### [2.0.3] - 2016-02-25

#### Changed
- Replaced a reference to an older image string of `product_image`. It is now `account-product-thumbnail`


### [2.0.2] - 2016-02-24

#### Changed
- Change the product-picklist-thumb image requirement to `core-product-picklist`
  to be inline (same namespace) with the other core-image requirements

#### Added

- Added `core-swatch` image to the swatch product-option markup and to the
  readme requirements


### [2.0.1] - 2016-02-24

#### Changed
 - login/signup columns now break into a single column at `$account-breakpoint-small`
 - account-create form columns now break into a single column at `$account-breakpoint-small`
 - `{{getImage}}` image size strings are namespaced and consistent (see readme)


### [2.0.0] - 2016-02-22

#### Added
 - standalone invoice.css with improved printable invoice template (requires theme-side invoice.scss, see readme)

### [1.0.2] - 2016-02-17

#### Changed
 - spruce up unavailable templates (hibernation/maintenance)


### [1.0.1] - 2016-02-15

#### Changed
 - hide wishlist nav item in account nav if wishlists are disabled
