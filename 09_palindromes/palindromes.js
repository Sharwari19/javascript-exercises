const palindromes = function (string) {

    // remove spaces and convert string to lowercase
    string = string.trim().toLowerCase();

    // filter out only the letters and not speacial characters
    let stringArr = string.split('').filter((letter) => ((/[a-zA-Z0-9]/).test(letter))); // (/[a-zA-Z]/).test(letter) matches all the strings that start with alphabet and so it will check if a given word is a letter or not
    console.log(stringArr);

    let reverseStr = '';

    // backward loop to join the string bakwards
    for(let i = stringArr.length - 1; i >= 0; i--)
    {
       reverseStr = reverseStr + stringArr[i];    
    }
    
    string = stringArr.join('');

    return reverseStr === string ? true : false;

};

palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
