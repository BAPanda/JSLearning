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
	
	newLi.innerHTML = prompt('Category name','');
	
	$(newLi).click($.ajax({
        type: 'GET',
        url: '/items',
        success: function(response) {
        resp = response;
        	console.log(response);
            done(response);
        }
    }));
	
	createButton(newLi);
	
	list.appendChild(newLi);
})

