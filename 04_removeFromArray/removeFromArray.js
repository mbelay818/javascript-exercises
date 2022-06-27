const removeFromArray = function(array, ...removeGroup) {
   result = [];

   for (let i of array) {
        if (!removeGroup.includes(i)) {
            result.push(i);
        }
   }
   return result;
};

// Do not edit below this line
module.exports = removeFromArray;
