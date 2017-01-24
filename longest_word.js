function len(str) {
    var arr = str.split(' ');
    var new_arr = [];
    var max_word = "";
    arr.forEach(function(item){
        new_arr[item.length] = item;
        max_word = new_arr[new_arr.length - 1];
    });
    return max_word;
}
var string = "1 23 345 45676 1";
len(string);

