

function verify(unknown, expectedType="any", expectedSubType="any", label="", debug=false) {

    let styles ={
        indexes: { // using numbers instead of strings for easier comparison.
            ok: 0,
            warning: 1,
            error: 2,
        },
        colors: [
            'background: #000; color: #0f0', 
            'background: #ff0; color: #000',
            'background: #a00; color: #fff'
        ]
    }

    let type = {
        message: `%c `, // this initialization is needed for colors.
        severity: styles.indexes.ok,
    }
    let subType = {
        message: `%c `,
        severity: styles.indexes.ok,
    }


    let identified = identify(unknown);


    if (expectedType !== "any") {
        if (identified.type === expectedType) {
            if (debug) {
                type.message += `Expected type: ${expectedType}, Got: ${identified.type} `
            }
        } else {
            type.severity = styles.indexes.error;
            type.message += `Expected type: ${expectedType}, Got: ${identified.type} `
        }
    }
    
    if (expectedSubType !== "any") {
        if (identified.subType === expectedSubType) {
            if (debug) {
                subType.message += `Expected subType: ${expectedSubType}, Got: ${identified.subType} `
            }
        } else {
            if( expectedSubType === "float" && identified.subType === "int" ) {
                subType.severity = styles.indexes.warning;
                let temp = identified.subType
                identified.subType = "float"
                subType.message += `Expected subType: ${expectedSubType}, Got: ${temp}, Corrected to: ${identified.subType}, because you expected a float `
            } else {
                subType.severity = styles.indexes.error;
                subType.message += `Expected subType: ${expectedSubType}, Got: ${identified.subType} `
            }
        }
    }

    let temp_message = "";
    if( identified.type === "symbol" ) { // decide special mesage conversion for symbols
        temp_message = unknown.toString();
    } else {
        temp_message = unknown;
    }
    
    
    let worst = 0;
    if(type.severity >= subType.severity ){
        worst = type.severity;
    } else {
        worst = subType.severity;
    }

    if((worst > 0) || (debug) ) {
        console.groupCollapsed(`%c Input: ${temp_message} `, styles.colors[worst]);
        console.log( `%c Test name: ${label} `, styles.colors[styles.indexes.ok]);

        if(expectedType!=="any"){
            if( (type.severity !== 0)) {
                //console.assert( (expectedType === identified.type), type.message, styles.colors[type.severity] )
                console.log( type.message, styles.colors[type.severity]);
            } else {
                if(debug){
                    console.log( type.message, styles.colors[type.severity]);
                }
            }
        }
        
        if(expectedSubType!=="any"){
            if( (subType.severity !== 0) && (expectedSubType!=="any")) {
                console.log( subType.message, styles.colors[subType.severity]);
            } else {
                if(debug){
                    console.log( subType.message, styles.colors[subType.severity]);
                }
            }
        }
        console.log(identified, unknown);
        console.groupEnd();
    }
    let status = true;
    
    if( worst > 0){
        status = false
    }
    return status;
}
