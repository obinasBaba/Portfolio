---
contentKey: blog
link: https://blog.henzzo.com/understanding-rest-parameters-and-spread-operator-in-javascript
title: Understanding Rest Parameters and Spread Operator in Javascript?
date: 2021-06-18T08:35:40.289Z
thumbnail: /img/rest_parameter.png
tags:

- tag: "#javascript"
- tag: "#array"

---

#### Introduction

Have you ever wondered how the built-in functions like `Math.max(arg1, arg2, ..., argN)  ` support an arbitrary number
of arguments but still manage to give accurate output? In this blog, we will try to understand the mastermind behind
them and more importantly how to feel comfortable working with such functions and arrays. Let's dive in.

### Rest Parameters `...`

A function can be called with any number of arguments, no matter how it is defined.
Like here:

```javascirpt
function sum(a, b) {
   return a + b;
} 

alert( sum(1, 2, 3, 4, 5) );
``` 

The function will not get angry because of the excessive argument we passed in ( except using `Typescript`), But of
course in the result only the
first, two will be counted.

The rest parameters can be mentioned in a function definition with three dots `...`, providing a way to
represent  [variadic functions](https://en.wikipedia.org/wiki/Variadic_function), "varargs" in most languages. They
literally mean  ***"gather the remaining parameters into an array"***.
For instance, to gather all arguments into array `income` :

```javascript
function sumAll( ...income ){ // income is the name for the array
  let wallet = 0;
  for ( let money of income )
    wallet += money;
  return wallet;
}

alert( sumAll( 1 ) ); // 1
alert( sumAll( 1, 2 ) ); // 3
alert( sumAll( 1, 2, 3 ) ); // 6
``` 

We can also choose to get the first parameters as variables and gather only the rest.

```javascript
function showName( firstName, lastName, ...titles ){
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName( "Julius", "Caesar", "Consul", "Imperator" );
``` 

# The rest parameters must be at the end.

The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

```
function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
    // error
}
``` 

The ...rest must always be last.

# What about the `arguments` variable?

There is also a special *array-like* object named `arguments` that contains all arguments by their index. For instance:

```javascript
function showName(){
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );
  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName( "Julius", "Caesar" );
// shows: 1, Ilya, undefined (no second argument)
showName( "Ilya" );
``` 

In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments
of the function, no matter their total number. And it still works, we can use it today. But one of the downsides of
using it is that although `arguments` are both *array-like* and *iterable*, it’s not an `array`. It does not support
array methods, so we can’t call `arguments.map(...)` for example.

Also, it always contains all arguments. We can’t capture them partially as we did with the rest parameters. So when we
need these features, then the rest parameters are preferred.

# Arrow functions do not have `arguments` !

If we access the argument's object from an arrow function, it takes them from the outer “normal” function. Here’s an
example:

```javascript
function f(){
  let showArg = () => alert( arguments[0] );
  showArg();
}

f
( 1 ); // 1

``` 

As we know, *arrow functions* don’t have their own `this`. Now we know they don’t have the special `arguments` object
either.

### Spread operator

We’ve just seen how to get an `array` from the list of parameters. But sometimes we need to do exactly the reverse.
Let’s say we have an array `[7, 9, 4]`. How do we call `Math.max` with it? Passing it “as is” won’t work,
because `Math.max` expects a list of numeric arguments, not a single array:

```javascript
let arr = [7, 9, 4];
alert( Math.max( arr ) ); // NaN
``` 

And surely we can’t manually list items in the code `Math.max(arr[0], arr[1],
arr[2])` , because we may be unsure how many there are. As our script executes, there could be a lot, or there could be
none. And that would get ugly.

Spread operator to the rescue! It looks similar to rest parameters, also using `...` , but does quite the opposite.
When `...arr` is used in the function call, it “expands” an iterable object `arr` into the list of arguments.
For `Math.max` :

```javascript
let arr = [7, 9, 4];
alert( Math.max( ...arr ) );  // 9 (spread turns array into a list of arguments)
``` 

We also can pass multiple iterables this way:

```
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(...arr1, ...arr2) ); // 8
``` 

We can even combine the spread operator with normal values:

```javascript
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max( 1, ...arr1, 2, ...arr2, 25 ) ); // 25
``` 

Also, the spread operator can be used to merge multiple arrays together:

```
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)
``` 

In the examples above we used an array to demonstrate the spread operator, but any iterable will do. For instance, here
we use the spread operator to turn the string into `array` of characters:

```javascript
let str = "Hello";
alert( [...str] ); // H,e,l,l,o
console.log( [...str] );  //['H', 'e', 'l', 'l', 'o']
``` 

The spread operator internally uses iterators to gather elements, the same way as `for..of` does. So, for a
string, `for..of` returns characters, and `...str` becomes
`"H","e","l","l","o"` . The list of characters is passed to the array initializer `[...str]` . For this particular task,
we could also use `Array.from` , because it converts an iterable (like a `string`) into an `array`:

```javascript
let str = "Hello";
// Array.from converts an iterable into an array
alert( Array.from( str ) ); // H,e,l,l,o
``` 

The result is the same as `[...str]` . But there’s a subtle difference between `Array.from(obj)` and `[...obj]` :

- `Array.from` operates on both array-likes and iterables.

- The spread operator operates only on iterables.
  So, for the task of turning something into an `array`, `Array.from` tends to be more universal.

### Conclusion

When we see `...` in the code, it is either ***rest parameters*** or the ***spread operator***. There’s an easy way to
distinguish between them:

- When `...` is at the end of `function` parameters, it’s ***rest parameters*** and gathers the rest of the list of
  arguments into an `array`.

- When `...` occurs in a function call or alike, it’s called a ***spread operator*** and expands an array into a list.

### use patterns:

- ***Rest parameters***are used to create `functions` that accept any number of `arguments`. `varargs` in some language.

- The ***spread operator*** is used to pass an array to functions that normally require a list of many arguments.

Together they help to travel between a list and an array of parameters with ease and also remember arguments of a
function call are also available in “old-style” `arguments`: array-like iterable object.











 
