# Account Pages

A collection of all the bits and pieces needed to make the BC Account Pages function.

These templates are a work-in-progress, so please feel free to jump in on the fun !

## Installation

Add or update the account pages code into your theme using the `install.sh` script. Make sure your theme directory doesn't have any uncommited changes in case something goes wrong!

```
./install.sh ../path/to/my-theme
```

This installs templates into `templates/account/`, styles into `assets/scss/modules/account/`, and a single JS file at `assets/js/theme/account.js`. These files should be added to git, but be careful not to edit them—they belong to this project and should only be updated here.

## Templates

Account templates are set up in a way so that they should function independent to your theme's page wrapper markup and frontmatter. All account markup is located within an `account/` directory, which should be dropped into your theme's `templates/` directory.

From there, for each account page template in your theme, link to its equivalent block:

```
<!-- templates/pages/account/edit.html -->

---
frontmatter: here
more_frontmatter: yup
---

{{#partial "page"}}
  <div class="theme-specific-wrapper">
    {{> account/pages/account/edit}}
  </div>
{{/partial}}

{{> layout/base}}
```

## Theme Requirements

The account pages rely on a few partials from your theme's components. Make sure they exist and that they're handling the passed variables in the same way:

- `components/products/ratings.html`
- `components/alerts/alert-info.html`
- `components/alerts/alert-error.html`
- `components/alerts/alert-success.html`
- `components/common/forms/*`
- `components/common/pagination.html`

## Styles

Import the account styles into your theme with `@import "modules/account/account";`. Some styles can be adjusted by defining the following variables before the import:

- `$account-light-color`—Base background color for some elements.
- `$account-accent-color`—Main accent color.
- `$account-border-color`—Border color for separators.
- `$account-border-radius`—Border radius used on some elements.
- `$account-gutter`—A general layout size. Multiples of this will be used for paddings.
- `$account-font-size`—The base font size.

Below is an example of what your theme's `pages/_account.scss` could look like. This example is setting custom variables, and main wrapping structure, along with page titles and section titles. Make sure you import this file before the module's component scss.

```
// Variables
$account-light-color: $input-background-color;
$account-accent-color: $accent-color;
$account-border-color: $border-color;
$account-gutter: $gutter;
$account-font-size: $font-size;

// Import
@import "modules/account/account";

// Overrides
.account-wrapper {
  @extend %wrapper;
  margin-top: $gutter*2;
}

.account-heading {
  @extend .page-title;
  margin-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.account-sub-heading {
  @extend .section-title;
}

.account-list-item-note > span {
  @extend %meta-text-treatment;
}
```

## TODO

- Still have to make this all responsive :D
