const removeFromArray = function(array, ...args) {

   const newArray = [];

   array.forEach((item) => {
        if(!args.includes(item))
        {
            newArray.push(item);
        }
   });

//    OR
//    newArray = array.filter((item) => (!args.includes(item)))

   return newArray;
};


removeFromArray([1, 2, 3, 4], 3,2);

// Do not edit below this line
module.exports = removeFromArray;
