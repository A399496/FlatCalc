var screen = document.getElementById('screen');
var elements = document.getElementsByTagName('span');


for (var i = 0; i < elements.length; i++) {
  if(elements[i].innerHTML === '=') {
    elements[i].addEventListener("click", result());
  }else if(elements[i].innerHTML === 'C'){
    elements[i].addEventListener("click", clear());
  }else if(elements[i].innerHTML === '±'){
    elements[i].addEventListener("click", znak());
  }else if(elements[i].innerHTML === '%'){
    elements[i].addEventListener("click", procent());
  }else{
    elements[i].addEventListener("click", calc(i) );
}
}

function calc(i) {
  return function () {
    if (elements[i].innerHTML === '÷') {
      screen.innerHTML += '/';
    }else if (elements[i].innerHTML === '×'){
      screen.innerHTML += '*';
    }else{
      screen.innerHTML += elements[i].innerHTML;
    }
  };
}
function clear() {
  return function () {
    screen.innerHTML = "";
  };
}
function znak() {
  return function () {
    screen.innerHTML = screen.innerHTML * (-1);
  };
}
function procent() {
  return function () {
    screen.innerHTML = screen.innerHTML / 100;
  };
}
function result() {
  return function () {
    screen.innerHTML = eval(screen.innerHTML);
  };
}
