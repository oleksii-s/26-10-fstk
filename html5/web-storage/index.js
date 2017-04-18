/**
 * Created by oleksii-s on 18.04.17.
 */

function setSettings() {
  if ('localStorage' in window && window['localStorage'] !== null) {
    try {
      var favcolor = document.getElementById('favcolor').value;
      var fontwt = document.getElementById('fontwt').value;
      localStorage.setItem('bgcolor', favcolor);
      localStorage.fontweight = fontwt;

      applySetting();
    } catch (e) {
      // QUOTA_EXCEEDED_ERR exception will be thrown if the storage limit exceeds 5MB.
      if (e == QUOTA_EXCEEDED_ERR) {
        alert('Quota exceeded!');
      }
    }
  } else {
    alert('Cannot store user preferences as your browser do not support local storage');
  }
}

function applySetting() {
  if (localStorage.length !== 0) {
    document.body.style.backgroundColor = localStorage.getItem('bgcolor');
    document.body.style.fontSize = localStorage.fontweight + 'px';
    document.getElementById('favcolor').value = localStorage.bgcolor;
    document.getElementById('fontwt').value = localStorage.fontweight;
  } else {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.fontSize = '13px'
    document.getElementById('favcolor').value = '#FFFFFF';
    document.getElementById('fontwt').value = '13';
  }
}

function clearSettings() {
  localStorage.removeItem("bgcolor");
  localStorage.removeItem("fontweight");
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.style.fontSize = '13px'
  document.getElementById('favcolor').value = '#FFFFFF';
  document.getElementById('fontwt').value = '13';

}
