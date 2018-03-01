function addSubcategory(button) {
	var ul, newLi;
	var cat = {
		id : '123456789',
		name : 'new cat',
	};

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
	var cat = {
		id : '123456789',
		name : 'new cat',
	};

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
	var item = {
		id: '123',
		name : '123',
		description : '123'
	};
	
	var items = [item];

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
