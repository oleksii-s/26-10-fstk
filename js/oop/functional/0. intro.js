/**
 * Created by oleksii-s on 16.03.17.
 */
function User(name) {

  this.sayHi = function() {
    alert( "Привет, я " + name );
  };

}

var vasya = new User("Вася"); // создали пользователя
vasya.sayHi(); // пользователь умеет говорить "Привет"