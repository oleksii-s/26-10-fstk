/**
 * Created by oleksii-s on 08.04.17.
 */

// https://developer.mozilla.org/ru/docs/Web/API/DataTransfer
function startDrag(e)
{
  var e = e || window.event;
  e.dataTransfer.setData('Ball', e.target.id);
  e.dataTransfer.effectAllowed='move';

  return true;
}

function endDrag(e)
{
  var e = e || window.event;
  e.dataTransfer.clearData('Ball');

  return true;
}

function drop(e)
{
  var e = e || window.event;
  e.target.appendChild(document.getElementById(e.dataTransfer.getData('Ball')));

  e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
  return false;
}