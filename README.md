# `identify()`

### An upgraded version of: `typeof` in JavaScript, to better identify & separate similar results.

You can send in ANY THING to the `identify()` function and it returns an object with 2 properties: `.type` & `.subType` that lets you identify whatever it was you sent in.
eg: `identify([]).subType` returns: `"array"` instead of `"object"` that `typeof` would return. 
`identify()` returns an object containing 2 properties: `.type` & `.subType`.

`.type` is the same as `typeof` in case you need a more general matching, but `.subType` tries to be as specific as posible, you usually want to use `.subType`.

All output strings will always be turned to lowercase, for consistency & ease of writing.

### When/Why should I use this?
This is great when working with larger projects &/or global variables, where the variable you get into a function might not be what you expec it to be, because some other function have changed the value, or someone sends the wrong data to your function.<br/>
Eg: You get in: `add("1", 2)` & return `"12"` instead of `3`.

### Usage examples:
```javascript
let foo = identify(null);
console.log(foo.type) // "object"
console.log(foo.subType) // "null"

if( foo.subType === "null" ) {
    foo = 5;
}

let bar = identify(3.14)
console.log( typeof foo )  // "object"
console.log( foo.type )    // "number"
console.log( foo.subType ) // "float"
/*
bar = {
    type: "number",
    subType: "float"
}
*/

let baz = new Date();
let qux = identify(baz);
/*
qux = {
    type: "object ",
    subType: "date"
}
*/
```

##### NOTE!
There is no (known?) way to diferentiate a "integer like" float number, eg: `3.00` or `123.0000` from a "true integer" eg: `3` or `123`, not even on a binarry level.<br/>
Therefore `identify(3.00).subType` will return `"int"` instead of `"float"`.<br/>
All other things should return their correct values.

##### Feedback requests:
1. I am thinking of removing `.type` & only return `.subType` directly as a string, but I will wait to see what your feedback says about it.
2. If you find anything that doesn't return what you think it should, it would be very usefull if you could report it.
