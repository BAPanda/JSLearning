(function() {
	window.onload = function() {
		var result = prompt('enter your name', '');
		document.getElementById("name").innerHTML = 'Hi,' + result;
	}
})();
