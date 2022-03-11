const sumAll = function(minnum, maxnum) {

    if (minnum < 0 || maxnum < 0) {
        console.log("ERROR")
    }

   let sum = 0, i = minnum;

    while (i <= maxnum) {
        sum = sum + i;
        i++;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
