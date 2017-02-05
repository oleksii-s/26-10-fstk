function startsWith(str1, str2) {
    if(~str2.toLowerCase().indexOf(str1[0].toLowerCase())){
        return true;
    }
}
// var a = 'History of the Civil War',
//     b = 'april';
// startsWith(a, b);