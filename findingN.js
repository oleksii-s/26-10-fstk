function findingN(arr)
{
    if ( ! (arr.reduce(function(sum, current) { return sum+current; }) % 2 )){//if sum is odd
        return arr.filter(function(item) {
                return item % 2 == 0;})
    } else {//if sum is even
        return arr.filter(function(item) {
            return item % 2 !== 0;})
    }
}
// var arr = [2, 4, 0, 100, 4, 11, 2602, 36];
// findingN(arr);
// var arr2 = [160, 3, 1719, 19, 11, 13, -21];
// findingN(arr2);