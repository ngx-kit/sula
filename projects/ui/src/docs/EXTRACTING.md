---
title: Extracting
apiPriority: 3
---

# Extracting modules

Any module sources can be extracted to your project.

After that you can modify features as you like, but you will lose automatic updates for this particular module.

Use Angular CLI `generate` command to extract a module:

```
ng g @ngx-kit/sula:ui-button my-awesome-button
```

Pick any name for a generated module, code will be modified in a right way.

Import a newly generated module:

```
@NgModule({
  ...
  imports: [MyAwesomeButtonModule],
  ...
})
export class SomeModule { }
```

And use it:

```
<button myAwesomeButton>Click me!</button>
```
