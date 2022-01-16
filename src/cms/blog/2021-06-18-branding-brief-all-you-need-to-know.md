---
contentKey: blog
title: "Generators Simplified"
date: 2021-06-18T08:40:33.120Z
tags:
  - tag: "#devlopment"
  - tag: "#Angular"
  - tag: "#Animation"
thumbnail: /img/screenshot-49-.png
---
<!--StartFragment-->
**Generators, advanced iteration**


Regular functions return only one, single value (or nothing).

Generators can return `("yield")` multiple values, possibly an infinite number of values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.

**Generator functions**

To create a generator, we need a special syntax construct: function* , so-called "generator function". It looks like this:

```
function* generateSequence() {

yield 1;

yield 2;

return 3;

};
```



when `generateSequence()` is called, it does not execute the code. Instead, it returns a special object, called "generator".

// "generator function" creates "generator object"

`let generator = generateSequence();`

The generator object can be perceived as a "frozen function call":

Upon creation, the code execution is paused at the very beginning.

The main method of a generator is `next()` . When called, it resumes execution till the nearest yield <value> statement. Then the execution pauses, and the value is returned to the outer code.

For instance, here we create the generator and get its first yielded value:

```
function* generateSequence() {

yield 1;

yield 2;

return 3;

}

let generator = generateSequence();

let one = generator.next();

alert(JSON.stringify(one)); // {value: 1, done: false}
```

The result of `next()` is always an object:

● value : the yielded value.

● done : false if the code is not finished yet, otherwise true .

As of now, we got the first value only:

Let's call `generator.next()` again. It resumes the execution and returns the next yield :

```javascript
let two = generator.next();

alert(JSON.stringify(two));
```

And, if we call it the third time, then the execution reaches return statement that finishes the

function:

Now the generator is done. We should see it from done:true and process value:3 as the final result. New calls generator.next() don't make sense any more. If we make them, they return the same object: {done: true} .

There's no way to "roll back" a generator. But we can create another one by calling

generateSequence() .

So far, the most important thing to understand is that generator functions, unlike regular function, do not run the code. They serve as "generator factories". Running function* returns a generator, and then we ask it for values.

 **function* f(...) or function *f(...) ?**

That's a minor religious question, both syntaxes are correct.

But usually the first syntax is preferred, as the star * denotes that it's a generator function, it describes the kind, not the name, so it should stick with the function keyword.

**Generators are iterable**

As you probably already guessed looking at the `next()` method, generators are iterable. We can get loop over values by `for..of` :

```javascript
 function* generateSequence() {

    yield 1;

    yield 2;

    return 3;

}

let generator = generateSequence();

for(let value of generator) {

    alert(value); // 1, then 2

}
 ```

That's a much better-looking way to work with generators than calling `.next().value` , right? ...But please note: the example above shows 1 , then 2 , and that's all. It doesn't show 3 !

It's because for-of iteration ignores the last value , when done: true . So, if we want all results to be shown by for..of , we must return them with yield :

```javascript
function* generateSequence() {

yield 1;

yield 2;

yield 3;

}
let generator = generateSequence();

for(let value of generator) {

    alert(value); // 1, then 2, then 3

}
```

Naturally, as generators are iterable, we can call all related functionality, e.g. the spread operator ... :

```javascript
function* generateSequence() {

yield 1;

yield 2;

yield 3;

}

let sequence = [0, ...generateSequence()];

alert(sequence); // 0, 1, 2, 3
```

In the code above, ...`generateSequence()` turns the iterable into array of items.

**Using generators instead of iterables**

Some time ago, in the chapter Iterables we created an iterable range object that returns values `from..to` .

Here, let's remember the code:

```javascript

let range = {
    from: 1,

    to: 5,

// for..of calls this method once in the very beginning

    [Symbol.iterator]() {

// ...it returns the iterator object:

// onward, for..of works only with that object, asking it for next values

        return {

            current: this.from,

            last: this.to,

// next() is called on each iteration by the for..of loop

            next() {

// it should return the value as an object {done:.., value :...}

                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

alert([...range]); // 1,2,3,4,5
```

Using a generator to make iterable sequences is so much more elegant:

```javascript

function* generateSequence(start, end) {

for (let i = start; i <= end; i++) {

yield i;

}

}

let sequence = [...generateSequence(1,5)];

alert(sequence); // 1, 2, 3, 4, 5
```

...But what if we'd like to keep a custom range object?

**Converting Symbol.iterator to generator**

We can get the best from both worlds by providing a generator as Symbol.iterator :


```javascript

let range = {

    from: 1,

    to: 5,

    * [Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()

        for (let value = this.from; value <= this.to; value++) {

            yield value;

        }

    }

};

alert([...range]); // 1,2,3,4,5
```

The range object is now iterable.

That works pretty well, because when `range[Symbol.iterator] `is called:

l it returns an object (now a generator)

l that has .next() method (yep, a generator has it)

l that returns values in the form `{value: ..., done: true/false}` (check, exactly what generator does).

That's not a coincidence, of course. Generators aim to make iterables easier, so we can see that. The last variant with a generator is much more concise than the original iterable code, and keeps the same functionality.

 **Generators may continue forever**

In the examples above we generated finite sequences, but we can also make a generator that yields values forever. For instance, an unending sequence of pseudo-random numbers.

That surely would require a break in `for..of` , otherwise the loop would repeat forever and hang.