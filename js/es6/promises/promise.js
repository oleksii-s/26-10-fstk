/**
 * Created by oleksii-s on 04.04.17.
 */
'use strict';

// Синтаксис создания Promise.
let promise = new Promise(function(resolve, reject) {
  // your code here
});

// Навешивание обработчиков.
// onFulfilled – функция, которая будет вызвана с результатом при resolve.
// onRejected – функция, которая будет вызвана с ошибкой при reject.
promise.then(onFulfilled, onRejected);

// Можно назначить как оба обработчика сразу, так и только один.
promise.then(onFulfilled);
promise.then(null, onRejected);


// После вызова resolve/reject промис уже не может изменить состояние.
// Пример с setTimeout()
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("ignored"), 1000);
  setTimeout(() => reject(new Error("error")), 2000);

});

promise
    .then(
        result => alert("Fulfilled: " + result),
        error => alert("Rejected: " + error)
    );



// XHR обернутый в промис.
function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}

// Цепочкпа промисов
// выполняем запрос
httpGet('/data_server/user_data/user.json')
    // Получаем данные о пользователе и передаем дальше по цепочке
    .then(response => {
      console.log(response);
      let user = JSON.parse(response);
      return user;
    })
    // 2. Получаем информацию с vk
    .then(user => {
      console.log(user);
      return httpGet(`https://api.vk.com/users/${user.name}`);
    })
    // 3. Вывести аватар на 3 секунды (можно с анимацией)
    .then(vkUser => {
      console.log(vkUser);
      vkUser = JSON.parse(vkUser);

      let img = new Image();
      img.src = vkUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.appendChild(img);

      setTimeout(() => img.remove(), 3000);
    });


// Параллельное выполнение
Promise.all([
  httpGet('/data_server/user_data/user.json'),
  httpGet('/data_server/user_data/guest.json')
]).then(results => {
  alert(results);
});

// Если есть массив урлов то можно так
let urls = [
  '/article/promise/user.json',
  '/article/promise/guest.json'
];

Promise.all( urls.map(httpGet) )
    .then(results => {
      alert(results);
    });