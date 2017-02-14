function findingN(arr)
{
    if ((arr.filter(function(item){
        return item % 2 == 0;
    })).length == 1) {
        return arr[0];
    } else {
        return (arr.filter(function(item){
            return item % 2 !== 0;
        }))[0];
    }
}

// var arr = [2, 4, 0, 100, 4, 11, 2602, 36];
// findingN(arr);
// var arr2 = [160, 3, 1719, 19, 11, 13, -21];
// findingN(arr2);
// var arr = [211, 1253, 911, 28];
// findingN(arr);

