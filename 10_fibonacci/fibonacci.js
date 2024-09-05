const fibonacci = function(positionArg) {

    //argument type should be number 
    let position;
    if(typeof positionArg !== 'number')
    {
        position = parseInt(positionArg);
    }
    else
    {
        position = positionArg;
    }

    // let num1 = 0;
    // let num2 = 1;
    // let sum = 0;

    // if(position < 0)
    // {
    //     return "OOPS";
    // }
    // else if(position === 0)
    // {
    //     return 0;
    // }
   
    // for(let i = 2; i <= position; i++)
    // {
    //     sum = num1 + num2;
    //     num1 = num2;
    //     num2 = sum;
    // }
    // return num2;

    let fib = [0, 1];

    if(position < 0)
    {
        return "OOPS";
    }

    for(let i = 2; i <= position; i++)
    {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[position];
    
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
