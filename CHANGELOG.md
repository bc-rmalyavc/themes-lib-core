# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

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
