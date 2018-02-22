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
	
	newLi.innerHTML = "<button onclick='getItems()'>" + prompt('Category name','') + "</button>";
	
	ul.appendChild(newLi);
}


$('#addCat').click( function () {	
	var cat = {
			id: '123456789',
			name: 'new cat',
	};
	
	var newLi = _.template($('#categoryItem-tpl').html())({categoryItem : cat});
	
	console.log(newLi);
	
	$('#list').append(newLi);
})

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000);
  }
  return s4() + s4() + s4() + s4();
}

function getItems(GUID) {
	$.ajax({
		type: "GET",
		url: "/JSLearning/items",
		data: {"groupId" : GUID},
		dataType: "json",
		success: function(data) {			
			console.log("123");
		    var dataHtml = _.template($('toDoItem-tpl').html())({items: data});
		    $('#items').html(dataHtml);
		}
	});
	
}



