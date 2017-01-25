function makeCounter() {
    function counter() {
        return counter.count;
    }

    counter.count = 1;

    counter.increment = function () {
      counter.count++;
    };

    counter.decrement = function () {
        counter.count--;
    };

    counter.get = function () {
        return counter.count;
    };

    counter.reset = function () {
        counter.count = 1;
    };

    return counter;
}

var counter = makeCounter();

console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());
counter.decrement();
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.reset();
console.log(counter.get());
