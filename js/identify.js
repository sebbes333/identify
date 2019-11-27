
function identify(unknown) {

    let obj = Object.create(null); // {}; //not sure wich is best. {} seams to add about 0.08 ms for every verify(X) test, insignificant? It will progbably run MANY times...? Is there any use for the .prototype at all in this situation?
    obj.type = (typeof unknown).toLowerCase();
    obj.subType = Object.prototype.toString.call(unknown).slice(8, -1).toLowerCase();

    if(obj.type === "boolean"){
        if( unknown === true) {
            obj.subType = "true";
        } else {
            obj.subType = "false";
        }
        return obj;
    }

    if(obj.type === "number"){ // float vs number
        if(Number.isNaN(unknown)){
            obj.subType = "nan"
        }else if(Number.isFinite(unknown) === false) {
            if( unknown > 0) {
                obj.subType = "infinity"
            } else {
                obj.subType = "-infinity"
            }
        } else if (Math.round(unknown) === unknown) {
                obj.subType = "int" // FALSE POSITIVE for "integer-like floats", eg: 3.00 or 157.000
        } else {
            obj.subType = "float";
        }
    }
    return obj;
}

//module.exports = identify;