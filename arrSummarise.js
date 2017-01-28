function arrSummarise(arr)
{
    result = [];
    result.push (arr.reduce(function(sum, current) {
        result.push (sum);
        return sum+current;
    }));
    return result;
}
// var arr = [1,2,3,4,5];
// arrSummarise(arr);
