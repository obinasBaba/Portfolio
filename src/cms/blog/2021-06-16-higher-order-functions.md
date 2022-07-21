---
contentKey: blog
link: https://blog.henzzo.com/higher-order-functions-in-javascript
title: Higher-Order Functions in Javascript.
date: 2021-06-16T08:06:43.916Z
thumbnail: /img/higher-order-functoins.png
tags:

- tag: "#functions"
- tag: "#javascirpt"
- tag: "#react"

---

## intro

Higher-order functions are functions that can manipulate other functions. They can either take functions in as arguments
or return functions or both. The first category of higher-order functions are functions that expect other functions as
arguments. `array.map`, ` array.filter`, and `array.reduce` all take functions as arguments. They are higher-order
functions.

## Understanding the basics

# Why the name "Higher Order"?

To grasp what “order” means, we need to have a look at functions first.

```typescript
function increment(a) {
  return a + 1;
}
``` 

The above Function `increment()` is a regular function that takes a number and returns the sum of this number and 1. It
is a `first-order function`.

```javascript
function twice( fn ){
  return function( ...args ){
    return fn( fn( ...args ) ) // calling `fn` twice
  }
}
``` 

The function `twice()` is a function that takes another function as an argument and
returns a function as a result - that makes it a `function` with an order higher than
first( `increment()` ). Basically, any given function that either takes a function as an `argument`, or `returns` a
function as a result, or both, is a function with order higher than first, hence the name -*` higher order function`*.

Let’s continue with our example here to understand the philosophy behind it. We can create a function that will
increment a number twice. A naive way to do that would be:

```javascript
function incrementTwice( a ){
  // calling the increment function twice,
  return increment( increment( a ) );
}
``` 

If that code confuse you it just means:
` let result = increment(a);
let result2 = increment( result )`

However, this is not very good. First, we cannot be sure that in the future there won’t
be a requirement to **increment** the number three or five times. Also, hardcoded logic
is not good in general. Finally, if we zoom into the `twice()` function we can notice
similarities with our `incrementTwice()` function.

They both call a function two times in a row, but `incrementTwice()` calls a concrete(static) function (`increment()`),
and `twice()` calls an *abstract function*(dynamic or at runtime) that comes from its argument (`fn()`).

We can try to use the twice() function to achieve the same result as we did with
`incrementTwice()`.

```javascript
const anotherIncrementTwice = twice( increment )
``` 

Let’s see how it works step by step:
When we call `twice()` and pass the `increment` as an argument, the variable `fn`( parameter of `twice`) starts carrying
the reference of `increment` function. So, after the first step `fn` is equal to `increment` function.

Then, we create an `anonymous function` inside `twice` that takes an `array` of arguments `function(...args )`. We need
to create this `function` to **prevent** calling `fn` or which is now `increment` right away, since we only want to
“prepare” and “remember” which function we want to call two times in the future.

We return this `anonymous function`. Thus, when we assign `const anotherIncrementTwice` to a result
of `twice(increment)`, we actually assign it to that anonymous function that already “remembers” which function we
wanted to call twice. It knows that it should call `increment()` twice when called, and it takes some arguments that
will be passed to `increment()`. It is able to do that because of the concept of `closures` in javascript, which we will
explore in another article.

If we try to write it down, it would look almost exactly like it did earlier:

```javascirpt
const anotherIncrementTwice = function ( ...args ) {
   return increment(increment(...args))
}

const result1 = incrementTwice(5) // returns 7
const result2 = anotherIncrementTwice(5) // returns 7

``` 

The benefit of using `twice()` over `incrementTwice()` is that we can now use
function `twice()` with any other function to repeat it.

```javascript
function sayHello(){
  console.log( `Hello world!` );
}

// work with other function too.
const sayHelloTwice = twice( sayHello );
sayHelloTwice();

// Hello world!
// Hello world!
``` 

Notice that we didn’t implement this logic again from scratch. We used a higher
order function `twice()` to build a more complex function `sayHelloTwice()` from a
simple one `sayHello()`.

## Abstraction, Utilities, and Complexity reduction.

higher-order functions are used for three key benefits: abstraction, utilities, and complexity reduction. Let's see them
one by one.

### Abstraction

Let’s say we have a function `slow(x)` which is CPU-heavy, but its results are stable. In other words, for the same `x`
it always returns the same result. If the function is called often, we may want to cache (remember) the results for
different `x` to
avoid spending extra time on recalculations.

```javascript
function slow( x ){
  // there can be a heavy CPU-intensive job here
  alert( `Called with ${x}` );
  return x;
}
``` 

But instead of adding that functionality into `slow()` we’ll create a wrapper( higher-order function). As we’ll see,
there are many benefits of doing so.

```javascript
// using higher order function
function cachingDecorator( func ){
  let cache = new Map();
  return function( x ){
    if ( cache.has( x ) ) { // if the result is in the map
      return cache.get( x ); // return it
    }
    let result = func( x ); // otherwise call func
    cache.set( x, result ); // and cache (remember) the result
    return result;
  };
}

const cachedSlow = cachingDecorator( slow ); // passing the slow function
console.log( cachedSlow( 1 ) ); // slow(1) result is cached
console.log( "Again: " + cachedSlow( 1 ) ); // the same

console.log( cachedSlow( 2 ) ); // slow(2) result is cached
console.log( "Again: " + cachedSlow( 2 ) ); // the same as the previous line
``` 

In the code above `cachingDecorator` is a `HOF` (  which is also decorator ): a special function that takes another
function and alters its behavior. By doing this we abstract the caching process inside the `HOF` `cachingDecorator`.
From an outside code, the
wrapped `slow` function still does the same.

Generally :

- The `cachingDecorator` is reusable. We can apply it to another function.
- The caching logic is separate, it did not increase the complexity of slow itself.

### Utilies

Often, we want to maximize flexibility and create functions that work over a wide range of potential input values or
formats. Let say in React Event handlling process we want to capture both the current argument and the event target like
this:

```javascript

const handleIt = ( num, event ) => {
  console.log( num, event.target )
}

return (
  <div>
    <button onClick={event => handleIt( 1, event )}>click 1</>
    <button onClick={event => handleIt( 2, event )}>click 2</>
    <button onClick={event => handleIt( 3, event )}>click 3</>
  </div>
);
``` 

Wouldn't it be more clear if we have a generic function to do the handling across all buttons like this:

```javascript
// higher order function that handle click event.
const handleIt = ( num ) => {
  return function( event ){
    console.log( num, event.target )
  }
}

return (
  <div>
    <button onClick={event => handleIt( 1 )}>click 1</>
    <button onClick={event => handleIt( 2 )}>click 2</>
    <button onClick={event => handleIt( 3 )}>click 3</>
  </div>
);
```

Cool, right? This is achieved through the concept of currying. Currying is a functional technique that involves the use
of higher-order functions which I will talk about in another article, But in general, it is the practice of holding on
to some of the values needed to complete an operation (`num` in our case)  until the rest can be supplied at a later
point in time (`event` in our case).

### Complexity reduction

Code that is longer and more complex is more prone to having bugs. Higher order functions abstract away the internal
workings of complex parts of the code and can use utility functions to reduce the lines of code that need to be written.

```javascript

function swap( key1, key2 ){
  return obj => {
    //using array-destructuring to swap
    [obj[key1], obj[key2]] = [obj[key2], obj[key1]];
    return obj;
  }
}
``` 

The `swap` function takes in two arguments,`key1` and `key2,` and returns a function that takes an object to do the swap
on. It's using `array-destructuring`, (You can read about it
in [this](https://blog.henzzo.com/understanding-destructuring-assignment-in-javascript) blog, where I talk about it more
deeply). We can use the above example as follow:

```javascript

const data = [
  { k1: 1, k2: 3 },
  { k1: 11, k2: 6 },
  { k1: 7, k2: 9 }
];

const swappedData = data.map( swap( 'k1', 'k2' ) );
console.log( swappedData );


//output
//[ { k1: 3, k2: 1 }, { k1: 6, k2: 11 }, { k1: 9, k2: 7 } ]

``` 

here we are passing the `map` function the `HOF`, which returns a function to do the swapping, and `map`  expect a
function that accepts the current item and returns some value, which fits the return value of calling `swap()` which is
a function that is doing the swapping.

# Wrapup

That is a wrapup, I hope you learn something about Higher-Order Functions. I have
another [blog](https://blog.henzzo.com/composition-patterns-in-reactjs) that talks about  `Higher Order Components`
in `React`. Leave me a comment below, am looking for any suggestions and feedbacks or any confusion about the topic.
untile the next peace out ✌️!
