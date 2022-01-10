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
	* DOTTED;
	* OVAL.
*/
var strokeStyle = "LINE";
var t = 0;
var r;
var g;
var b;
var avDistance;

function setStrokeStyle(style)
{
	strokeStyle = style;
}

var strokeColor = "ALL";
function setColor(color)
{
	strokeColor = color;
	updateColor();
} 

function updateColor()
{
	switch(strokeColor)
	{
		case "RED":
			setColorRed();
			break;
		case "GREEN":
			setColorGreen();
			break;
		case "BLUE":
			setColorBlue();
			break;
		case "ALL":
			setColorAll();
			break;
		default:
			break;
	}
}

function setColorRed()
{
	r = 255;
	g = 0;
	b = 0;
}

function setColorGreen()
{
	r = 0;
	g = 255;
	b = 0;
}

function setColorBlue()
{
	r = 0;
	g = 0;
	b = 255;
}

function setColorAll()
{
	r = 255 * noise(t+10);
	g = 255 * noise(t+15);
	b = 255 * noise(t+20);
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
		case "OVAL":
			paintWithOval();
		default:
			break;
	}
	t += 0.01;
}

function paintWithLine()
{
	stroke(r, g, b);
	strokeWeight(avDistance);
	line(poseX, poseY, prevPoseX, prevPoseY);
}

function paintWithDotted()
{
	stroke(r, g, b);
	strokeWeight(50);
	line(poseX, poseY, prevPoseX, prevPoseY);
}

function paintWithOval()
{
	noStroke();
	fill(r, g, b);
	for (let i = 0; i < 10; i ++)
	{
		ellipse(poseX, poseY, 20, 80);
	}
}