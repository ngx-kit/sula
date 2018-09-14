---
title: Theming
apiPriority: 2
---

# Theming Sula

Sula uses [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for customizing.

By default main set of variables injecting via `angular.json`:

```
...
"styles": [
  "node_modules/@ngx-kit/sula/themes/main.css",
  ...
],
``` 


## Dark theme

Sula delivers built-in dark theme, to enable inject it via `angular.json`:

```
...
"styles": [
  "node_modules/@ngx-kit/sula/themes/main.css",
  "node_modules/@ngx-kit/sula/themes/dark.css",
  ...
],
```

And activate it with `UiThemeService`:

```
constructor(
  private theme: UiThemeService,
) {
  this.theme.theme = 'dark';
}
```


## Custom theme

You can create your own theme:

```
.theme-custom {
  // Redefine vars here
  --mainBgColor: #34363f;
  --mainTextColor: #f2f2f2;
  ...
}
```

Check out list of variables in [main.css file](https://github.com/ngx-kit/sula/blob/master/projects/ui/src/themes/main.css).  

Add to `angular.json`:

```
...
"styles": [
  "node_modules/@ngx-kit/sula/themes/main.css",
  "path/to/custom.css",
  ...
],
```

And activate with the theme service:

```
constructor(
  private theme: UiThemeService,
) {
  this.theme.theme = 'custom';
}
```
