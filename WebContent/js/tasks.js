function addSubcategory() {
	var ul, newLi;
	
	newLi = document.createElement('li');
	
	if (this.parentElement.lastElementChild.tagName == 'ul') {
		ul = this.parentElement.lastElementChild;
	} else {
		ul = document.createElement('ul');
		this.parentElement.appendChild(ul);
	}    
	
	newLi.id = 'li-n-' + (ul.childNodes.length);
	
	newLi.innerHTML = prompt('Category name','');
	
	ul.appendChild(newLi);
	
	createButton(newLi);
}

function createButton(newLi) {
	var button = document.createElement('button');
	
	button.classList.add('btn');
	button.classList.add('btn-primary');
	button.classList.add('btn-sm');
	button.classList.add('add-btn');
	
	newLi.appendChild(button);
	
	button.onclick = addSubcategory;
}


$('#addCat').click( function () {	
	
	var list, newLi;
	
	list = document.getElementById('list');
	
	newLi = document.createElement('li');
	
	newLi.id = 'li-n-' + (list.childNodes.length);
	
	newLi.innerHTML = "<button onclick='getItems()'>" + prompt('Category name','') + "</button>" ;	
		
	createButton(newLi);
	
	list.appendChild(newLi);
})

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000);
  }
  return s4() + s4() + s4() + s4();
}

function getItems() {
	$.ajax({
		type: "GET",
		url: "/JSLearning/items",
		data: {"groupId" : 2},
		dataType: "json",
		success: function(data) {
			console.log("123");
		    var dataHtml = '<ul>';
		    $.each(data, function (index, item) {
		                     dataHtml += '<li>' + item.name + '</li>';                         
		                 });
		    dataHtml += '</ul>';
		    $('#items').html(dataHtml);
		}
	});
	
}



