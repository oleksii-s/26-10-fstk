function startsWith(str1, str2) {
    return !!~str2.toLowerCase().indexOf(str1[0].toLowerCase());
    }
}
//return Boolean(~str2.toLowerCase().indexOf(str1[0].toLowerCase()));

// var a = 'History of the Civil War',
//     b = 'april';
// startsWith(a, b);