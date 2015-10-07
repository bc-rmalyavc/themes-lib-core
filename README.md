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

```
<!-- templates/pages/account/edit.html -->
{{#partial "page"}}
  {{> core/account/edit}}
{{/partial}}
{{> layout/base}}
```

### Styles

Import the core styles into your theme with `@import "core/account";`. Some styles can be adjusted by defining the following variables before the import:

- `$account-light-color`—Base background color for some elements.
- `$account-accent-color`—Main accent color.
- `$account-border-color`—Border color for separators.
- `$account-border-radius`—Border radius used on some elements.
- `$account-gutter`—A general layout size. Multiples of this will be used for paddings.
- `$account-font-size`—The base font size.

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
  margin-top: $gutter*2;
}
```
