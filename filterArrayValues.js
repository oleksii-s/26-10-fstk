function filterArrayValues(arr, a, b)
{
    arr.forEach(function(item, i, arr) {
        if (a > item || item > b) {
                    delete arr[i];
                }
    });
}
// var art = [1,2,3,6,9,80,1,10];
// filterArrayValues(art, 2, 7);
// console.log(art);

