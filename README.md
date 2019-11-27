# identify()

### An upgraded version of: `typeof` in JavaScript, to better identify & separate similar results.

eg: `identify([]).subType` returns: `"array"` instead of `"object"` that `typeof` would return. 
`identify()` returns an object containing 2 properties: `.type` & `.subType`.

`.type` is the same as `typeof` in case you need a more general matching, but `.subType` tries to be as specific as posible, you usually want to use `.subType` (I am thinking of removing `.type` & only return `.subType` directly as a string, but I will wait to see what your feedback says about it).

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
```

