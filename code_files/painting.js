var isPainting = false;

function startPainting()
{
	isPainting = true;
}

function stopPainting()
{
	isPainting = false;
}

/*
Styles that can be used:
	* LINE;
	* DOTTED.
*/
var strokeStyle = "LINE";

function setStrokeStyle(style)
{
	strokeStyle = style;
}

function paint()
{
	switch(strokeStyle)
	{
		case "LINE":
			paintWithLine();
			break;
		case "DOTTED":
			paintWithDotted();
			break;
		default:
			break;
	}
}

function paintWithLine()
{
	// ADD CODE HERE
}

function paintWithDotted()
{
	// ADD CODE HERE
}