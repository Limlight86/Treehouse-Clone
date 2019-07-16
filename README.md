## Useful links for syntax / conventions that may be unfamiliar

### Square bracket property accessor for objects

```
const topic = "html"
const courses = {
  html: [...],
  css: [...],
  javascript: [...]
}[topic]
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
- https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781

### Curried functions / Currying

```
const handleInputChange = field => event => {
  this.setState({ [field]: event.target.value })
}
```

- https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
- https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400

### classNames

```
const foo = "truthyString"
const isActive = true
<div className={classNames('regular-class')} />
<div className={classNames(foo ? "truthy-ternary-class" : "falsey-ternary-class" />
<div className={classNames({ applyThisClassIfValueIsTrue: isActive })} >
```

- https://github.com/JedWatson/classnames
- https://jedwatson.github.io/classnames/

### Best practices with react import / exports

```
// /src/components/index.js
export { default as Form } from './Form'
export { default as Navbar } from './NavBar'
export { default as Button } from './Button'
```

- https://alligator.io/react/index-js-public-interfaces/

### Underscore vs parenthesis for arrow fuctions with no parameter

```
const someFunctionWithNoParameter = _ => {
  console.log('hello world')
}
```

- https://jaketrent.com/post/javascript-arrow-function-no-params/

### Javascript syntax style guide

- http://airbnb.io/javascript/
