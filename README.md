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

### Styles

SCSS: [/assets/scss/pages/_account.scss](/assets/scss/pages/_account.scss)

`@import "pages/account";`

### Scripts

JS: [/assets/js/theme/components/account-utils.js](/assets/js/theme/components/account-utils.js)

#### Import the following into global.js:
`import AccountUtils from './components/account-utils';`

#### And then include the following within your constructor:
`new AccountUtils($('.account-list-item'));`

###TODO:

• Still have to make this all responsive :D
