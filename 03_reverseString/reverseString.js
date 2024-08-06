const reverseString = function(string) {
    
    const stringToArr = string.split('');
    const reverseArray = [];
    
    for(let i = stringToArr.length - 1; i >= 0; i--)
    {
        reverseArray.push(stringToArr[i]);
    }

    let arrayToString = reverseArray.join("");

    return arrayToString;
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
