/**
 * Created by oleksii-s on 08.04.17.
 */

// https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D

//Код текущей операции
var operation=0;
//Статус операции
var active=false;

//Начало графической операции
function startOperation(e)
{
  if (operation === 0)
    return;

  if (active)
    return;

  var context = getContext();
  context.strokeStyle = getColor("stroke");
  context.fillStyle = getColor("fill");
  context.beginPath();

  var point = getPoint(e);
  context.moveTo(point.x, point.y);

  active = true;
}

//Завершение графической операции
function stopOperation()
{
  if (!active)
    return;

  var context = getContext();
  context.closePath();

  active = false;
}

//События мыши
function mouseDown(e)
{
  var e = e || window.event;

  if (!active)
  {
    startOperation(e);
    return;
  }
  else
  {
    var context = getContext();
    var point = getPoint(e);

    context.lineTo(point.x, point.y);
    context.stroke();

    if (operation == 3)
      context.fill();
  }

  return true;
}

function mouseUp(e)
{
  var e = e || window.event;

  if (!active || operation != 1)
    return;

  stopOperation();

  return true;
}

function mouseMove(e)
{
  var e = e || window.event;

  if (!active || operation != 1)
    return;

  var context = getContext();
  var point = getPoint(e);

  context.lineTo(point.x, point.y);
  context.stroke();

  return true;
}

function getColor(control)
{
  var color = document.getElementById(control).value;

  if (color == "")
    color = "#000";

  return color;
}

//Элемент canvas
function getCanvas()
{
  return document.getElementById("canvas");
}

//Контекст вывода 2d графики на элемент canvas
function getContext()
{
  return getCanvas().getContext("2d");
}

//Элемент 'выбранная операция'
function getSelected()
{
  return document.getElementById("selected");
}

//Относительные координаты курсора мыши
function getPoint(e)
{
  var x = event.pageX || event.x;
  var y = event.pageY || event.y;

  var rect = getCanvas().getBoundingClientRect();

  var point = {};
  point.x = x - rect.left;
  point.y = y - rect.top;

  return point;
}

//Выбор операции
function selectOperation(code)
{
  stopOperation();
  operation = code;

  switch(operation)
  {
    case 1: {
      getSelected().innerText = 'Выбрано: перо';
      break;
    }
    case 2: {
      getSelected().innerText = 'Выбрано: линии';
      break;
    }
    case 3: {
      getSelected().innerText = 'Выбрано: полигоны';
      break;
    }
  }
}