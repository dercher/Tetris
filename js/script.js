// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
var matrix = [10, 20];
var upper = 20; // the heighest element on the ground
var all = matrix[0] * matrix[1];
var figures = ['square', 'cross', 'halfCross', 'boot', 'deuce'];
var modes = [[0,0,0,0,0,0,1,1,0,0,1,1], [0,0,1,0,0,1,1,1,0,0,1,0], [0,0,0,0,0,0,1,0,0,1,1,1],
             [0,0,0,0,0,0,0,1,1,1,1,1], [0,0,0,0,0,1,1,0,0,0,1,1], [0,0,0,0,0,0,0,0,1,1,1,1]];
var elWrapper = document.querySelector('.elWrapper');

getMatrix(20,10);
createFigure(modes[setRandom(0, 5)], elWrapper);
setProcess(elWrapper);
//------------------------- ALL FUNCTIONS ------------------
function getMatrix(num1, num2) {
	var el = document.querySelector('.main');
	var count =0;
  for (var i = 0; i < num1; i++) {
  	for (var y = 0; y < num2; y++) {
  	  el.innerHTML += '<div class="sell">' +(++count)+ '</div>'; 
  	}
  	  el.innerHTML += '<br class="clearfix">';
  }
}
//-------------------------------------------------
 var dist = 0;
 var count = 0;
function setProcess(elWrapper) {
	var elWrapper = document.querySelector('.elWrapper');
  var size = getSize(document.querySelectorAll('.sell')[0]);
    count++; dist = (count*size-size-size);
    if(count < upper) {
     elWrapper.style.top = dist + 'px';
    } else {

    }

  start = setTimeout(setProcess, 1000);
}
//--------------------------------------------------
  function setRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//--------------------------------------------------
function createFigure(arr, elWrapper) {
	var size = getSize(document.querySelectorAll('.sell')[0]);
	var html = '', count = 0, top = 0, left = 0;
      for (var i = 0; i < 3; i++) {
      	for (var y = 0; y < 4; y++) {
       		if( arr[count++] != 0 ) {
		        html += '<div class="unit" style="width:'+size+'px; height:'+size+'px;';
		        html += 'left:'+(y*size)+'px; top:'+(i*size)+'px;"></div>'; 
				  }
      	}
      }
    elWrapper.style.top ='-200px';
    elWrapper.innerHTML = html;
}
//--------------------------------------------------
function getSize(el) {
 var style = getComputedStyle(el);
 style = style.width;
 return Number(style.slice(0, style.length - 2));
}
//--------------------------------------------------
function rotate() {
	elWrapper.style.transform = 'rotate(90deg)';
}
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

