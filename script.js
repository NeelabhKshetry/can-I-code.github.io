var flag = 0;
function f1()
{	
	if(flag%2==0)
		document.getElementById('newtag').innerHTML = 'Odd Number';
	else if(flag%2==1)
		document.getElementById('newtag').innerHTML = 'Even Number';
	flag++;
}

var neelabh =
{
	name : "Neelabh Kshetry",
	id : 1531286,
	height : 172,
	weight : 169
};

function nameone()
{
	//document.getElementById('newtag').innerHTML = Date();
	// var th = document.getElementById('newtag').innerHTML;
	// document.getElementById('newtag').innerHTML = th.toUpperCase();
	//alert('neelabh.name')
	document.getElementById('date').innerHTML = Date();
}

function pagedate()
{
	//alert("Loaded");
	document.getElementById('date').innerHTML = Date();
}

window.onload = function() {
 document.getElementById('date').innerHTML = Date();
}
