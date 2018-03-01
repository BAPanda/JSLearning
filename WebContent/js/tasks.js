var cat = {
		id : '123456789',
		name : 'new cat',
	};


var item = {
	id: '123',
	name : '123',
	description : '123'
};

var items = [item];

function addSubcategory(button) {
	var ul, newLi;

	if ($(button).parent().last().tagName == 'ul') {
		ul = $(button).parent().last();
	} else {
		ul = document.createElement('ul');
		$(button).parent().append(ul);
	}

	newLi = _.template($('#categoryItem-tpl').html())({
		categoryItem : cat
	});

	$(ul).append(newLi);
}

$('#addCat').click(function() {
	

	var newLi = _.template($('#categoryItem-tpl').html())({
		categoryItem : cat
	});

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

	var dataHtml = _.template($('#toDoItem-tpl').html())({
		toDoList : items
	});
	$('#items').html(dataHtml);

	return;

	$.ajax({
		type : "GET",
		url : "/JSLearning/items",
		data : {
			"groupId" : GUID
		},
		dataType : "json",
		success : function(data) {
			console.log("123");

			var item = {
				name : '123',
				description : '123'
			}

			var dataHtml = _.template($('#toDoItem-tpl').html())({
				items : data
			});
			$('#items').html(dataHtml);
		}
	});

}

function editToDo(toDoID) {
	var i;
	
	for (i = 0; i < items.length; i++) {
		if (items[i].id == toDoID) {
			editingItem = items[i];
			break;
		}
	}
	
	alert(item[i]);
	
	newName = prompt("Хотите изменить имя?", "");
	newDescription = prompt("Хотите изменить описание?","");
	
	if (newName != "")
		items[i].name = newName;
	
	if (newDescription != "")
		items[i].description = newDescription;
	
	getItems(123);
}
