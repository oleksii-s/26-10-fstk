function keys_to_values(obj){
    var new_obj = {};
    for (var key in obj) {
        var new_key = obj[key];
        new_obj[new_key] = key;
    }
    return new_obj;
}

var obj = {
    width: 300,
    'height': 200,
    "мама мыла раму": true
};
keys_to_values(obj);