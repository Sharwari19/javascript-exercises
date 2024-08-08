const sumAll = function(startPoint, endPoint) {

    let i = startPoint;
    let iSum = 0;
    let isStartInteger =  Number.isInteger(startPoint);
    let isEndInteger = Number.isInteger(endPoint);

    if( startPoint < 0                    || 
        endPoint < 0                      || 
        !(typeof startPoint === "number") ||
        !(typeof endPoint === "number")   ||
        !isStartInteger                   ||
        !isEndInteger 
    )
    {
        return 'ERROR';
    }

    if(startPoint > endPoint)
    {
        for(i = startPoint; i >= endPoint; i--)
        {
            iSum = iSum + i;
        }
    }
    else
    {
        for(i = startPoint; i <= endPoint; i++)
        {
            iSum = iSum + i;
        }
    }

    return iSum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
