// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
var matrix = [10, 20];
var upper = 20; // the heighest element on the ground
var count = 0;
var all = matrix[0] * matrix[1];
var figures = ['square', 'cross', 'halfCross', 'boot', 'deuce'];
var modes = [[0,0,0,0,0,0,1,1,0,0,1,1], [0,0,1,0,0,1,1,1,0,0,1,0], [0,0,0,0,0,0,1,0,0,1,1,1],
             [0,0,0,0,0,0,0,1,1,1,1,1], [0,0,0,0,0,1,1,0,0,0,1,1], [0,0,0,0,0,0,0,0,1,1,1,1]];

getMatrix(20,10);
setProcess();
createFigure(modes[setRandom(0, 5)]);
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
function setProcess(argument) {
	console.log();
	 
	count++;
    if(count > upper) {

    } else {

    }

  start = setTimeout(setProcess, 1000);
}
//--------------------------------------------------
  function setRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//--------------------------------------------------
function createFigure(arr) {
	var el = document.querySelector('.figure');
	var size = getSize(document.querySelectorAll('.sell')[0]);
	size = Number(size.slice(0, size.length - 2));
	console.log(size)
	var html = '', count = 0, top = 0, left = 0;
      for (var i = 0; i < 3; i++) {
      	for (var y = 0; y < 4; y++) {
       		if( arr[count++] != 0 ) {
		        html += '<div class="unit" style="width:'+size+'px; height:'+size+'px;';
		        html += 'left:'+(y*size)+'px; top:'+(i*size)+'px;"></div>'; 
				  }
      	}
      }
     console.log(html)
    el.innerHTML = html;
}
//--------------------------------------------------
function getSize(el) {
 var style = getComputedStyle(el); 
 return style.width;
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
//--------------------------------------------------

