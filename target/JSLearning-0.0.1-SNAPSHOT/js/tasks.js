(function() {
	window.onload = function() {
		var result = prompt('enter your name', '');
		document.getElementById("name").innerHTML = 'Hi,' + result;
	}
})();

var buttonAdd = document.getElementById('addToList');

buttonAdd.onclick = function () {
	var list = document.getElementById('list');
	
	var newLi = document.createElement('li');
	
	newLi.id = 'li-n';
	
	list.appendChild(newLi);
	
	console.log(newLi);
}