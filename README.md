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

<div class="theme-specific-outer">
  <div class="theme-specific-inner">
    {{> account/pages/edit}}
  </div>
</div>

{{/partial}}

{{> layout/base}}

```

## Theme requirements
The account pages rely on a few partials from your theme's components. Make sure they exist and that they're handling the passed variables in the same way:

- `components/products/ratings.html`
- `components/alerts/alert-info.html`
- `components/alerts/alert-error.html`
- `components/alerts/alert-success.html`
- `components/common/forms/*`
- `components/common/pagination.html`

## Styles

SCSS: [/assets/scss/pages/_account.scss](/assets/scss/pages/_account.scss)

Below is an example of what your theme's `pages/_account.scss` could look like. This example is setting custom variables, and main wrapping structure, along with page titles and section titles. Make sure you import this file before the module's component scss.

`@import "pages/account";`
`@import "components/account";`

```
// Variables
$account-light-color: $input-background-color;
$account-nav-color: $body-color;
$account-accent-color: $accent-color;
$account-border-color: $border-color;
$account-header-color: $heading-color;
$account-gutter: $gutter;
$account-font-size: $font-size;

.account-wrapper {
  @extend %wrapper;
  margin-top: $gutter*2;
  font-size: 0;

  .section-title {
    margin-top: 50px;
    margin-bottom: 30px;
  }
}

.account-nav,
.account-body {
  display: inline-block;
  padding-left: $gutter;
  padding-right: $gutter;
  vertical-align: top;
  font-size: $font-size;
}

// Account Body
.account-body {
  width: 75%;
}

// Account Headings
.account-heading {
  @extend .page-title;
  margin-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.account-sub-heading {
  @extend .section-title;
}

// Navigation
.account-nav {
  width: 25%;
}

// List Views
.account-list-item-note > span {
  @extend %meta-text-treatment;
}
```

## TODO:

• Still have to make this all responsive :D


# Auth Pages

## Templates

Auth templates are set up in a way so that they should function independent to your theme's page wrapper markup and frontmatter. All auth markup is located within an `auth/` directory, which should be dropped into your theme's `templates/` directory. 

From there, for each auth page template in your theme, link to its equivalent block:

```
<!-- templates/pages/auth/login.html -->

---
frontmatter: here
more_frontmatter: yup
---

{{#partial "page"}}

<div class="theme-specific-outer">
  <div class="theme-specific-inner">
      {{> auth/pages/login}}
  </div>
</div>

{{/partial}}

{{> layout/base}}

```


## Theme Requirements

The auth pages rely on a few partials from your theme's components. Make sure they exist and that they're handling the passed variables in the same way:

- `components/alerts/alert-info.html`
- `components/alerts/alert-error.html`
- `components/alerts/alert-success.html`
- `components/common/forms/`


## Styles

Below is an example of what your theme's `pages/_auth.scss` could look like. This example is setting custom variables, and main wrapping structure, along with page titles and section titles. Make sure you import this file before the module's component scss.

`@import "pages/auth";`
`@import "modules/auth";`

```
// Variables
$auth-gutter: $gutter * 2;
$auth-font-size: $font-size;

.auth-wrapper {
  @extend %wrapper;
}

.auth-heading {
  @extend .page-title;
}

.auth-sub-heading {
  @extend .section-title;
  margin-bottom: 30px;
}

.auth-button-alt {
  @extend .form-submit-alternative;
}

 // Login
.auth-customer-login {
  @include breakpoint(ms) {
    width: 100%;
  }
}

.auth-new-customer {
  @include breakpoint(ms) {
    width: 100%;
    margin-top: $auth-gutter;
  }
}
```


## TODO

• Still have to make this all responsive :D

