function rangeParser(params) {
    let array = params.split(',');
    let result = [];

    array.forEach(element => {

        elements = element.split(new RegExp('-|:'));

        if (elements.length == 3) {
           result= result.concat(writerange(parseInt(elements[0]), parseInt(elements[1]), parseInt(elements[2])));
        } else {
            if (elements.length == 2) {
                result=result.concat(writerange(parseInt(elements[0]), parseInt(elements[1])));
                
            } else {
                
                result.push(parseInt(elements[0]));
            }
        }
    });


    return result;
}

function writerange(startValue, maxValue, increment = 1) {
    let valueRange = [];
    while (startValue<=maxValue){
        valueRange.push(startValue);
        startValue+=increment;
    }
    
    return valueRange;
}

