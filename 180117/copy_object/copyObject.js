var object = {"id": 1, "name": "John", "age": 23};

function copy(object) {
    var clone = {};

    for (var prop in object) {
        clone[object[prop]] = prop;
    }

    return clone;
}

copy(object);
