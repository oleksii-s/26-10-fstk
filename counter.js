function counter(b) {
var a = b;
    return {
        increment: function() {
            return ++a;
        },

        decrement: function(value) {
            return --a;
        },
        get: function(){
            return a;
        },
        reset: function() {
            return a = b;
        }
    };
}

// var test_counter = counter(2);
//
// alert( test_counter.increment() );
// alert( test_counter.increment() );
// alert( test_counter.decrement() );
// alert( test_counter.get() );
// alert( test_counter.reset() );

