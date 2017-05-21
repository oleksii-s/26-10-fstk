function arrSummarise(arr)
{
    result = [];
    arr.reduce(function(sum, current, index) {
        result.push(sum + current);
        return result[index];
    }, 0);
    return result;
}
var arr = [1,2,3,4,5];
arrSummarise(arr);
