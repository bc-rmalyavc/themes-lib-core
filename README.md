# Bigcommerce Account Pages

A collection of all the bits and pieces needed to make the BC Account Pages function.

These templates are a work-in-progress, so please feel free to jump in on the fun !


### Templates

Pages: [/templates/pages/account/](/templates/pages/account/)

Components: [/templates/components/account/](/templates/components/account/)


### Styles

SCSS: [/assets/scss/pages/_account.scss](/assets/scss/pages/_account.scss)

```
@import "pages/account";
```

### Scripts

JS: [/assets/js/theme/components/account-pages.js](/assets/js/theme/components/account-pages.js)

#### Import the following into global.js:
```
import HeaderTools from './components/header-tools';
```

#### And then include the following within your constructor:
```
new AccountPages($('.account-list-item'));
```

#ToDo:

• Still have to make this all responsive :D

#Notes:
Some of the account pages call upon the alert partials. To keep everything organized, place your alerts in: `/templates/components/alerts/`