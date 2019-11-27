Upgraded version of: typeof in JavaScript, to better identify & separate similar results.

eg: identify([]).subType returns: "array" instead of "object" that typeof would return. 
It returns an object containing 2 properties: .type & .subType.

Usage examples:

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