# Bigcommerce Account Pages

A collection of all the bits and pieces needed to make the BC Account Pages function.

These templates are a work-in-progress, so please feel free to jump in on the fun !


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

#### Theme requirements
The account pages rely on a few partials from your theme's components. Make sure they exist and that they're handling the passed variables in the same way:

- `components/products/ratings.html`
- `components/alerts/alert-info.html`
- `components/alerts/alert-error.html`
- `components/alerts/alert-success.html`
- `components/common/forms/*`
- `components/common/pagination.html`

### Styles

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

###TODO:

• Still have to make this all responsive :D
