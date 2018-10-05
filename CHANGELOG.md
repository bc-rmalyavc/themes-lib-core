# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [3.6.7] - 2018-10-04

#### Added
- Option for regular price label
- Added data-default to track default options for productUtils

## [3.6.6] - 2018-09-26

#### Fixed
- Labels now appear when you update a product option

## [3.6.5] - 2018-08-16
#### Fixed
- The options date field wasn't interacting with the form validator, not it is

## [3.6.4] - 2018-07-26
#### Added
- Price scss file to control the now core based pricing

#### Fixed
- When a category is selected in the advanced search panel the category
  selection persists once the page is refreshed

#### Changed
- Show pre-populated text in text inputs as text and not placeholder
- Pricing now lives in core, now all our themes can use the core files to build
  and handle product prices across the theme, and access new theme settings so
  our themes work like Cornerstone now

## [3.6.3] - 2018-06-01
#### Changed
- Show pre-populated text in textareas as text and not placeholder

## [3.6.2] - 2018-05-16
#### Fixed
- Advanced search cancel now actually closes the advanced search.
- bug in advanced search where first checkbox was being checked when focusing
  on checkbox area
- Correct spacing on AMP product options css file

#### Added
- .editorconfig file added to support proper code hygiene

## [3.6.1]
#### Fixed
- The fancy AJAX add to cart fell apart on amp product pages, so it was removed

## [3.6.0]
#### Added
- Support for AMP product pages

## [3.5.3]
#### Fixed
- Now when you click in the categories box on the advanced search panel, it wont
  always toggle the first list item

## [3.5.2]
#### Fixed
- Multiple category selection now works in advanced search

## [3.5.1] - 2018-04-17
#### Fixed
- Copyright script in AMP footer removed

## [3.5.0] - 2018-04-10
#### Added
- Advanced search form styles and js added

## [3.4.6] - 2018-03-28
#### Added
- Header and footer scripts to checkout and order confirmation pages for use by
  app developers in relation to the new checkout API

## [3.4.5] - 2018-03-16
#### Changed
- Footer and header colors for AMP pages now have their own background and text
  variables to allow more flexibility to match theme color scheme.

## [3.4.4] - 2018-03-09
#### Fixed
- Tappable area increased on AMP navigation close

## [3.4.3] - 2018-03-08
#### Changed
- Remove broken search from AMP Navigation

## [3.4.2] - 2018-03-07

#### Added
- Accordion functionality added to AMP navigation elements to make it nicer

#### Changed
- Increased customizability of AMP for use in themes

## [3.4.1] - 2018-02-28

#### Fixed
- Category links for AMP, fixed

## [3.4.0] - 2018-02-28

#### Added
- Support for Google AMP category pages

## [3.3.16] - 2018-02-16

#### Added
- GeoTrust Seals added to theme settings for use across all themes

## [3.3.15] - 2018-02-13

#### Changed
- Remove `import $ from 'jquery';` at the top of js files, this will be imported
globally in themes

## [3.3.14] - 2018-01-17

#### Fixed
- Update select label when using the options helper to show/hide product options.

## [3.3.13] - 2018-01-09

#### Added
- Select options helper to show/hide product options.

#### Changed
- No longer disable empty product option

## [3.3.12] - 2017-11-28

#### Fixed
- Required state class toggling off when required

## [3.3.11] - 2017-11-23

#### Fixed
- Account address form layout so fields are not out of line

#### Changed
- Added title to customized checkbox field to display consistently like other
  checkbox fields on the product page
- Move contact form errors to outside of contact form avoiding form layout
  breaking when an error occurs on forms with flexbox layouts

## [3.3.10] - 2017-11-14

#### Fixed
- Redo on the below account from state fix. Pervious fix didn't allow for required
  fields to be denoted in the `form-title::after`, toggling the `form-required`
  class is much less hackie and keep the HTML semantically sound, while still
  hiding the asterisks when the field is not required.

## [3.3.9] - 2017-11-10

#### Fixed
- When users are setting up addresses, if their country does not have states,
  the state input is no longer marked as required

### [3.3.8] - 2017-11-07

#### Fixed
- Corrected HTML logic for multiple checkboxes on the account sign up form when
  only a single checkbox is required. Requires an updated validetta.

### [3.3.7] - 2017-10-23

#### Added
- Support for none in non-required multiple choice product options

### [3.3.6] - 2017-08-01

#### Added
- Default translation strings for use with bc-zoom

### [3.3.5] - 2017-07-27

#### Fixed
- Fixed an issue causing returns to be limited to 99 units

### [3.3.4] - 2017-07-13

#### Fixed
- Fixed location of alert message

### [3.3.3] - 2017-07-13

#### Added
- Added alert message to forget password form

### [3.3.2] - 2017-07-11

#### Fixed
- Made disabled option for month and day the selected default for delivery/event
  date
- Added CSS to clear account fields when error occurs

### [3.3.1] - 2017-06-06

#### Fixed
- Date option, when range and is limited to one year, allows for the merchant
  selected date to show

### [3.3.0] - 2017-05-10

#### Added
- Optimized checkout theme settings and markup

#### Changed
- Install scripts to allow for updates of config.json and schema.json files

### [3.2.7] - 2017-04-13

#### Fixed
- Fixed product list picker to hide 'none' option when pick list is required

#### Changed
- How product description is parsed for structured data to allow users to input
  anything, even script tags

### [3.2.6] - 2017-04-11

### Fixed
- Fixed product list picker to select a product based on a control panel setting


### [3.2.5] - 2017-04-03

#### Changed
- The version of captcha to v2.  Everything should work OK on your old theme,
  but check the styling.

### Fixed
- Quick fix in the structured data for post date


### [3.2.4] - 2017-03-08

#### Fixed
- removed references to Page Manager

### [3.2.3] - 2017-01-19

#### Changed
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
- Add a clause selecting the 'Pick one...' option by default if no other option
  has been selected.


### [2.0.8] - 2016-04-05

#### Changed
- the 'Pick one...' default option for product selects disabled again. Adding
  to cart wasn't validating the empty value.


### [2.0.7] - 2016-03-14

#### Added
- `data-product-attribute` and `data-product-attribute-value` attributes on all
  product option inputs to hook into enabling/disabling based on SKU inventory

#### Changed
- the 'Pick one...' default option for product selects is no longer disabled


### [2.0.6] - 2016-03-08

#### Changed
- Gift certificate page properly accounts for only one theme being enabled from
  the CP
- Gift certificate preview doesn't refresh when checkboxes change

#### Added
- An alert below the nav for explaining a customer's store credit, if a credit
  exists.


### [2.0.5] - 2016-03-02

#### Changed
- Updated the create account bullets to hide the wishlist text if wishlist is
  disabled.


### [2.0.4] - 2016-02-26

#### Added
- Added contact form lang strings to en.json
- Added captcha placeholder

### [2.0.3] - 2016-02-25

#### Changed
- Replaced a reference to an older image string of `product_image`. It is now
  `account-product-thumbnail`


### [2.0.2] - 2016-02-24

#### Changed
- Change the product-picklist-thumb image requirement to `core-product-picklist`
  to be inline (same namespace) with the other core-image requirements

#### Added

- Added `core-swatch` image to the swatch product-option markup and to the
  readme requirements


### [2.0.1] - 2016-02-24

#### Changed
- login/signup columns now break into a single column at
  `$account-breakpoint-small`
- account-create form columns now break into a single column at
  `$account-breakpoint-small`
- `{{getImage}}` image size strings are namespaced and consistent (see readme)


### [2.0.0] - 2016-02-22

#### Added
- standalone invoice.css with improved printable invoice template
  (requires theme-side invoice.scss, see readme)

### [1.0.2] - 2016-02-17

#### Changed
- spruce up unavailable templates (hibernation/maintenance)


### [1.0.1] - 2016-02-15

#### Changed
- hide wishlist nav item in account nav if wishlists are disabled
