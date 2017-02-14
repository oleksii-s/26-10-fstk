function filterArrayValues(arr, a, b)
{
    arr = arr.filter(function(item){
    return item >= a && item <= b;
});
   console.log (arr);
}
var art = [1,2,3,6,9,80,1,10];
filterArrayValues(art, 2, 7);
console.log(art);

// var arr = [1,2,3,6,9,80,1,10];
// var a= 2, b=7;
//



// arr.forEach(function(item, i, arr) {
//     if (a > item || item > b) {
//                 delete arr[i];
//             }
// });
