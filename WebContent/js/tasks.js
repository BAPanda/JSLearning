
var buttonAdd = document.getElementById('addToList');

buttonAdd.onclick = function () {
	var list = document.getElementById('list');
	
	var newLi = document.createElement('li');
	
	newLi.id = 'li-n';
	newLi.innerHtml = '';
	
	list.appendChild(newLi);
	
}