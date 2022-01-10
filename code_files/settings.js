function openWindow()
{
	$('#window1').modal('show');
}

function closeWindow()
{
	$('#window1').modal('hide');
}

function selectedRed()
{   
    $(document).ready(()=> {
		
		document.getElementById('box-red').style.borderColor = "#9ac7ff";
		document.getElementById('box-green').style.borderColor = "white";
		document.getElementById('box-blue').style.borderColor = "white";
		document.getElementById('box-multicolor').style.borderColor = "white";
	});
}

function selectedGreen()
{   
	$(document).ready(()=> {
		document.getElementById('box-red').style.borderColor = "white";
		document.getElementById('box-green').style.borderColor = "#9ac7ff";
		document.getElementById('box-blue').style.borderColor = "white";
		document.getElementById('box-multicolor').style.borderColor = "white";
	});
}

function selectedBlue()
{   
	$(document).ready(()=> {
		document.getElementById('box-red').style.borderColor = "white";
		document.getElementById('box-green').style.borderColor = "white";
		document.getElementById('box-blue').style.borderColor = "#9ac7ff";
		document.getElementById('box-multicolor').style.borderColor = "white";
	});
    
}

function selectedMulticolor()
{
    $(document).ready(()=> {
		document.getElementById('box-red').style.borderColor = "white";
		document.getElementById('box-green').style.borderColor = "white";
		document.getElementById('box-blue').style.borderColor = "white";
		document.getElementById('box-multicolor').style.borderColor = "#9ac7ff";
	});
}

function selectedLine()
{
    $(document).ready(()=> {
		document.getElementById('box-line').style.borderColor = "#9ac7ff";
		document.getElementById('box-dotted').style.borderColor = "white";
		document.getElementById('box-brush').style.borderColor = "white";
	});
}

function selectedDotted()
{
	$(document).ready(()=> {
		document.getElementById('box-line').style.borderColor = "white";
		document.getElementById('box-dotted').style.borderColor = "#9ac7ff";
		document.getElementById('box-brush').style.borderColor = "white";
	});
}

function selectedBrush()
{
	$(document).ready(()=> {
		document.getElementById('box-line').style.borderColor = "white";
		document.getElementById('box-dotted').style.borderColor = "white";
		document.getElementById('box-brush').style.borderColor = "#9ac7ff";
	});
}