const sumAll = function(startPoint, endPoint) {

    let iSum = 0;
    let isStartInteger =  Number.isInteger(startPoint);
    let isEndInteger = Number.isInteger(endPoint);

    if( startPoint < 0    || 
        endPoint < 0      || 
        !isStartInteger   ||
        !isEndInteger 
    )
    {
        return 'ERROR';
    }

    if(startPoint > endPoint)
    {
        let temp = startPoint;
        startPoint = endPoint;
        endPoint = temp;
    }

    // OR
    // if(startPoint > endPoint)
    // {
    //     [startPoint, endPoint] = [endPoint, startPoint]
    // }

    for(i = startPoint; i <= endPoint; i++)
    {
        iSum = iSum + i;
    }

    return iSum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
