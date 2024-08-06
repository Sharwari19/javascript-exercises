const repeatString = function(inputString, timesToPrint) {

    let outputString = '';

    if(timesToPrint < 0)
    {
        return "ERROR";
        
    }

    for(let i = 0; i < timesToPrint; i++)
    {
        outputString = outputString + inputString;
    }
    return outputString;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
