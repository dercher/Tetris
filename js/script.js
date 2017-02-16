// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
var matrix = [10, 20];
var upper = 20; // the heighest element on the ground
var all = matrix[0] * matrix[1];
getMatrix(20,10);
setProcess()
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
  console.log('it goes')

  start = setTimeout(setProcess, 1000);
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
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

