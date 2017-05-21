function compareObjects(obj1, obj2, prop) {
    var result = obj1[prop] - obj2[prop];
    if(result > 0){
        console.log (obj1.name);
    } else if(result < 0){
        console.log (obj2.name);
    }
}
var obj1 = {
        name: "John",
        age: 16
};
var obj2 = new function() {
    this.name = "Jane";
    this.age = 6;
};
compareObjects(obj1, obj2, "age");