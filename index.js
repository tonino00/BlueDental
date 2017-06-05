var campos = [
	document.querySelector('#name'),
	document.querySelector('#clinic'),
	document.querySelector('#turn'),
	document.querySelector('#date')
];

	console.log(campos);

var tbody = document.querySelector('table tbody');


document.querySelector('.form').addEventListener('submit', function(event){
	event.preventDefault();

	var tr = document.createElement('tr');
	campos.forEach(function(campo){
		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	tbody.appendChild(tr);

	campos[0].value = '';
	campos[1].value = '';
	campos[2].value = '';
	campos[3].value = '';

	campos[0].focus();
});


