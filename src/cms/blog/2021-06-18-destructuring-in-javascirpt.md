---
contentKey: blog
link: https://blog.henzzo.com/understanding-destructuring-assignment-in-javascript
title: Understanding Destructuring assignment In Javascript.
date: 2022-06-18T08:40:33.120Z
thumbnail: /img/destruction.png
tags:

- tag: "#array"
- tag: "#es6"
- tag: "#javascirpt"

---

# Introduction

The two most used data structures in JavaScript are `Object` and `Array`. But when we pass those to a `function`, it
might not need the entire `array/object` as a whole, but rather individual pieces.

Destructuring assignment is a special syntax that allows us to “unpack” `arrays` or `objects` into a
bunch of variables, as sometimes that’s more convenient. Destructuring also works great with
complex functions that have a lot of parameters, default values, and so on.

# Destructuring `Array` and `iterables`

The general form of the syntax is: `[ variable1, variable2, ..., variableN ] = array;`  An example of how the array is
destructured into variables:

```javascript
// we have an array with the name and surname
let arr = ["Henzzo", "Baba"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
console.log( firstName ); // -> Henzzo
console.log( surname ); // -> Baba
``` 

Now we can work with `variables` instead of `array` members.
It looks great when combined with `split()` or other *array-returning* methods:

```javascript
let [firstName, surname] = "Henzzo Baba".split( ' ' ); // firstname -> Henzzo, surname -> Baba
```

### “Destructuring” does not mean “destructive”.

It’s called “destructuring assignment,” because it “destructurizes” by copying items into `variables`. But the `array`
itself is not modified.
It’s just a shorter way to write:

```javascript
 let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
``` 

### Ignore elements using commas

Unwanted elements of the `array` can also be thrown away via an extra *comma*:

```javascript
//second element is not needed
let [firstName, , title] = ["Henok", "Getachew", "Web", "Ninja"];
console.log( title ); // Web
``` 

In the code above, the second element of the array is skipped, the third one is assigned to `title`, and the rest of the
array items are also skipped (as there are no variables for them).

### Works with any iterable on the *right-side*

…Actually, we can use it with any iterable, not only arrays:

```javascript
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set( [1, 2, 3] );
``` 

### Assign to anything at the *left-side*

We can use any “assignables” on the left side.
For instance, an object property:

```javascript
let user = {};
[user.name, user.surname] = "Henzzo Baba".split( ' ' );
console.log( user.name ); // Henzzo
``` 

### Looping with .entries()

`Object.values(obj)` return an array of `[key, value]` pairs of an object; We can use it with destructuring to loop over
keys-and-values of an object:

```javascript
let user = {
  name: "Henok",
  feeling: "loved"
};

// loop over keys-and-values
for ( let [key, value] of Object.entries( user ) ) {
  console.log( `${key}:${value}` ); // -> name:Henok, then feeling:loved
}
``` 

```javascript
let user = new Map();
user.set( "name", "Henok" );
user.set( "desc", "very cool" );
for ( let [key, value] of user ) {
  console.log( `${key}:${value}` ); //  -> name:Henok, then desc:very cool
}
``` 

### The rest ‘…’

If we want not just to get the first values, but also to gather all that follows – we can add one more
parameter that gets “the rest” using three dots "...": (if you want to understand `rest` in javascript I wrote a lovely
blog about it [here](Link))

```javascript
let [word1, word2, ...rest] = ["Programing", "Isn't", "About", "Syntax"];
console.log( word1 ); // Programing
console.log( word2 ); // Isn't

// Note that type of `rest` is Array.
console.log( rest[0] ); // About
console.log( rest[1] ); // Syntax
console.log( rest.length ); // 2
``` 

The value of `rest` is the array of the remaining array elements. We can use any other variable name in place of `rest`
, just make sure it has three dots before it and goes last in the destructuring assignment.

### Default values

If there are fewer values in the `array` than variables in the assignment, there will be no error. Absent values are
considered `undefined`:

```javascript
let [firstName, surname] = [];
console.log( firstName ); // undefined
console.log( surname ); // undefined
``` 

If we want a “default” value to replace the missing one, we can provide it using `=`:

```javascript
// default values
let [name = "Guest", surname = "Anonymous"] = ["Henok"];
console.log( name ); // Henok (from array)
console.log( surname ); // Anonymous (default used)
``` 

*Default values* can be more complex expressions or even `function` calls. They are evaluated only if the value is not
provided. For instance, here we use the prompt function for two defaults. But it will run only for the missing one:

```javascript
// runs only prompt for surname
let [name = prompt( 'name?' ), surname = prompt( 'surname?' )] = ["Henok"];
alert( name ); // Henok (from array)
alert( surname ); // whatever prompt gets
``` 

# Object destructuring

The destructuring assignment also works with objects.
The basic syntax is:

```javascript
let { var1, var2 } = { var1:…,
var2…
}
```

We have an existing `object` at the right side, that we want to *split* into `variables`. The left side
contains a “pattern” for corresponding properties. In the simple case, that’s a list of variable
names in {...} .

For instance:

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let { title, width, height } = options;
console.log( title ); // Menu
console.log( width ); // 100
console.log( height ); // 200
``` 

Properties `options.title` , `options.width` and `options.height` are assigned to the
corresponding variables. The order does not matter. This works too:

```javascript
// changed the order in let {...}
let { height, width, title } = { title: "Menu", height: 200, width: 100 }
``` 

The pattern on the left side may be more complex and specify the mapping between properties
and variables. If we want to assign a property to a variable with another *name*, for instance,
`options.width` to go into the variable named `w` , then we can set it using a colon `:` :

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;
// width -> w
// height -> h
// title -> title
console.log( title ); // Menu
console.log( w ); // 100
console.log( h ); // 200
``` 

The colon shows “what : goes where”. In the example above the property `width` goes to `w` ,
property `height` goes to `h` , and `title` is assigned to the same name. For potentially missing properties we can set
default values using "=" , like this:

```javascript
let options = {
  title: "Menu"
};
let { width = 100, height = 200, title } = options;
alert( title ); // Menu
alert( width ); // 100
alert( height ); // 200
``` 

Just like with `arrays` or `function` parameters, default values can be any expressions or even
`function` calls. They will be evaluated if the value is not provided.

```javascript
// with function call
const requiredArg = ( argName ) =>
  throw new Error( `Checker: dude you forgot to pass something called ${argName} in your call` );

function auth( { firstName = 'unknown', password = requiredArg( 'password' ) } ){
  return {
    firstName,
    password
  }
}

auth() // Error: ...
auth( 'henok', 'incorrect' ) // {firstName: 'henok', password: 'incorrect'}
``` 

We also can combine both the colon and equality:

```javascript
let options = {
  title: "Menu"
};
let { width: w = 100, height: h = 200, title } = options;

console.log( title ); // Menu
console.log( w ); // 100
console.log( h ); // 200
``` 

### The rest pattern “…”

What if the object has more properties than we have variables? Can we take some and then
assign the “rest” somewhere? We can use the `rest` pattern, just like we did with `arrays`. It’s not supported by some
older browsers (IE, use `Babel` to polyfill it), but works in modern ones.
It looks like this:

```javascript
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;
// now title="Menu", rest={height: 200, width: 100}
console.log( rest.height ); // 200
console.log( rest.width ); // 100
``` 

### Gotcha if there’s no let

In the examples above variables were declared right in the assignment: `let {…} = {…}` .
Of course, we could use existing variables too, without `let` . But there’s a catch.
This won’t work:

```javascript
let title, width, height;
// error in this line
{
  title, width, height
}
= { title: "Menu", width: 200, height: 100 };
``` 

But why? The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code
block. The same goes for `const foo = (input) => {input * 2}`. Such code blocks can be used to group statements, like
this:

```javascript
{
// a code block
  let message = "Hello";
// ...
  console.log( message );
}
``` 

To show JavaScript that it’s not a code block, we can make it a part of an expression by wrapping in
parentheses `(...)` :

```javascript
let title, width, height;
// okay now
({ title, width, height } = { title: "Menu", width: 200, height: 100 });
console.log( title ); // Menu
``` 

# Nested destructuring

If an `object` or an `array` contains other `objects` and `arrays`, we can use more complex *left-side* patterns to
extract deeper portions. In the code below `options` have another object in the property size and an array in the
property items. The pattern at the *left side* of the assignment has the same structure:

```javascript
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true // something extra that we will not destruct
};

/// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

console.log( title ); // Menu
console.log( width ); // 100
console.log( height ); // 200
console.log( item1 ); // Cake
console.log( item2 ); // Donut
``` 

The whole `options` object except extra that was not mentioned, is assigned to corresponding variables. **Note**
that `size` and `items` themself are not destructured.

![Screenshot_32.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1645090383953/6c-YYteLX.png)

Finally, we have `width`, `height`, `item1`, `item2`, and `title` from the default value. If we have a complex `object`
with many properties, we can extract only what we need:

```javascript
// take size as a whole into a variable, ignore the rest
let { size } = options;
``` 

# Smart function parameters

There are times when a `function` has many parameters, most of which are optional. That’s especially true for user
interfaces. Imagine a function that creates a menu. It may have a width, a `height`, a `title`, `items-list`, and so on.
Here’s a bad way to write such `function`:

```javascript
function showMenu( title = "Untitled", width = 200, height = 100, items = [] ){
  // ...
}
``` 

In real-life, the problem is how to remember the order of arguments. Usually IDEs try to help us,
especially if the code is well-documented, but still… Another problem is how to call a function
when most parameters are ok by default.
Like this?

```javascript
showMenu( "My Menu", undefined, undefined, ["Item1", "Item2"] )
``` 

That’s ugly. And becomes unreadable when we deal with more parameters.
Destructuring comes to the rescue!
We can pass parameters as an object, and the function immediately *destructurizes* them into
variables:

```javascript
// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu( { title = "Untitled", width = 200, height = 100, items = [] } ){
// title, items – taken from options,
// width, height – defaults used
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu( options );
``` 

We can also use more complex destructuring with nested objects and colon mappings:

```javascript
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu( {
                     title = "Untitled",
                     width: w = 100, // width goes to w
                     height: h = 200, // height goes to h
                     items: [item1, item2] // items first element goes to item1, second to item2
                   } ){
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu( options );
``` 

The syntax is the same as for a destructuring assignment:
`
function({ incomingProperty: parameterName = defaultValue
})
`

Please note that such *destructuring* assumes that `showMenu()` does have an `argument`. If we
want all values by default, then we should specify an empty `object`:

```javascript
showMenu( {} ); // fallback to default value
showMenu(); // this would give an error
``` 

We can fix this by making `{}` the *default* value for the whole *destructuring* thing:

```javascript
//simplified parameters a bit for clarity
function showMenu( { title = "Menu", width = 100, height = 200 } = {} ){
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
``` 

In the code above, the whole argument object is `{}` by default, so there’s always something
to *destructurize*.

# Conculusion

- Destructuring assignment allows for instantly mapping an object or array onto many variables.

- The object syntax: `let {prop : varName = default, ...rest} = object`
  This means that property prop should go into the variable `varName` and, if no such
  property exists, then the default value should be used.
  Object properties that have no mapping are copied to the `rest` object.


- The array syntax: `let [item1 = default, item2, ...rest] = array`
  The first item goes to `item1` ; the second goes into `item2` , all the rest makes the array
  `rest` .

- For more complex cases, the *left side* must have the same structure as the *right one*.
