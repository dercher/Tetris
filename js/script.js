// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
var matrix = [10, 20];
var all = matrix[0] * matrix[1];
getMatrix(20,10)

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
var el = document.querySelectorAll('.sell')[0];
 var computedStyle = getComputedStyle(el); 
        var width = computedStyle.width;
        var height = computedStyle.height;
  console.log('width', width, '. height', height);