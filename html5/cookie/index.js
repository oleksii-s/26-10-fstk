/**
 * Created by oleksii-s on 18.04.17.
 */
function submitHandler() {
  var elems = [
    document.getElementById('data'),
    document.getElementById('data1'),
    document.getElementById('data2'),
  ];

  elems.forEach(function(element) {
    setCookie(element.id, element.value);
  });

  console.log(elem.id);
}

function setCookie(name, value, options) {
  // options can contain:
  // - expires
  // - path
  // - domain
  // - secure
  options = options || {};

  var expires = options.expires;

  if (typeof expires === "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

function clearCookies(name) {
  var elems = [
    document.getElementById('data'),
    document.getElementById('data1'),
    document.getElementById('data2'),
  ];

  elems.forEach(function(element) {
    setCookie(element.id, "", {
      expires: -1
    })
  });


}