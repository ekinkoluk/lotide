# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ekinkoluk/lotide`

**Require it:**

`const _ = require('@ekinkoluk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description

* `head` : returns the first element of a given array  
* `tail` :  return the tail of a given array
* `middle`: returns the middle elements of given array
* `assertArraysEqual`: checks if two arrays is equal
* `assertEqual` : compares values with ===
* `assertObjectsEqual`: check if two objects is equal
* `countLetters` : count the letters on a given string
* `countOnly`   : counts only the given items
* `eqArrays` : returns true if two arrays are equal
* `eqObjects`: returns true if two given objects are equal
* `findKey`:  finds key of an object
* `findKeyByValue`: finds a key bu y given value
* `letterPositions`: returns the first position of a letter
* `map`: map function works as same
* `takeUntil`: takes values until given value
* `without`: returns a new array without a given value
