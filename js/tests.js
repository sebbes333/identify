

let tests = [
    // Bools
    {
        label: "Bool True",
        thing: true, 
        Type: "boolean",
        SubType: "true",
        debug: true
    },
    {
        label: "Bool False",
        thing: false, 
        Type: "boolean",
        SubType: "false",
        debug: true
    },
    // Ints
    {
        label: "Int",
        thing: 5, 
        Type: "number",
        SubType: "int",
        debug: true
    },
    {
        label: "Negative int",
        thing: -5, 
        Type: "number",
        SubType: "int",
        debug: true
    },
    {
        label: "Scientific number",
        thing: 5e3, 
        Type: "number",
        SubType: "int",
        debug: true
    },
    {
        label: "Infinity",
        thing: Infinity, 
        Type: "number",
        SubType: "infinity",
        debug: true
    },
    {
        label: "Infinity Negative",
        thing: -Infinity, 
        Type: "number",
        SubType: "-infinity",
        debug: true
    },
    // Floats
    {
        label: "Negative scientific number",
        thing: 5e-3, 
        Type: "number",
        SubType: "float",
        debug: true
    },
    {
        label: "Float",
        thing: 5.5, 
        Type: "number",
        SubType: "float",
        debug: true
    },
    {
        label: "Float zero, should generate a yellow Warning-level result",
        thing: 5.0, 
        Type: "number",
        SubType: "float",
        debug: true
    },
    {
        label: "Int zero",
        thing: 5.0, 
        Type: "number",
        SubType: "int",
        debug: true
    },
    // Other numbers
    {
        label: "NaN",
        thing: NaN, 
        Type: "number",
        SubType: "nan",
        debug: true
    },
    {
        label: "BigInt",
        thing: 55465465469841684196841964169149814681496841698654198167418687684684654683454n,
        Type: "bigint",
        SubType: "bigint",
        debug: true
    },
    // String
    {
        label: "String",
        thing: "text", 
        Type: "string",
        SubType: "string",
        debug: true
    },
    {
        label: "Object new String",
        thing: new String("Text object"), 
        Type: "object",
        SubType: "string",
        debug: true
    },
    // RegExp
    {
        label: "Regular expression",
        thing: /ab+c/i, 
        Type: "object",
        SubType: "regexp",
        debug: true
    },
    // Object containers
    {
        label: "Object",
        thing: {}, 
        Type: "object",
        SubType: "object",
        debug: true
    },
    {
        label: "Array",
        thing: ["array"], 
        Type: "object",
        SubType: "array",
        debug: true
    },
    // Object specials
    {
        label: "Null",
        thing: null, 
        Type: "object",
        SubType: "null",
        debug: true
    },
    {
        label: "Date",
        thing: new Date(), 
        Type: "object",
        SubType: "date",
        debug: true
    },
    {
        label: "Intentionally wrong type, should generate a red Error-level result",
        thing: "Intentionally wrong type", 
        Type: "wrong",
        SubType: "string",
        debug: true
    },
    {
        label: "Intentionally wrong subType, should generate a red Error-level result",
        thing: "Intentionally wrong subType", 
        Type: "string",
        SubType: "wrong",
        debug: true
    },
    {
        label: "Intentionally wrong booth, should generate a red Error-level result",
        thing: "Intentionally wrong double", 
        Type: "wrong",
        SubType: "wrong",
        debug: true
    }
]

tests.forEach(test => { // run all tests from the test-object above.
    verify(test.thing, test.Type, test.SubType, test.label, test.debug);
    let a = verify(test.thing);
    console.log(a); // ERROR? Why only ONE False? why not many?
    
});

// Special edge cases that can't be held in an Object
let undefined_variable;
a = verify( undefined_variable,  "undefined", "undefined", "Undefined variable", true)
console.log(a);

let fn = function(params) {}
a = verify(fn, "function", "function", "function", true)
console.log(a);

let sym = Symbol("sym");
a = verify(sym, "symbol", "symbol", "Symbol", true)
console.log(a);

class myTestClass {
    constructor() {
        return "";
    };
    a = 5;
    bla(params=3) {
      console.log("in myTestClas/bla(), the variable is: " + a);
    };
}

let myClas = new myTestClass();
a = verify(myClas, "object", "object", "myTestClass", true)