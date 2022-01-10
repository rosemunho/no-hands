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
var t = 0;
var r;
var g;
var b;
var avDistance;

function setStrokeStyle(style)
{
	strokeStyle = style;
}

function paint()
{
	r = 255 * noise(t+10);
	g = 255 * noise(t+15);
	b = 255 * noise(t+20);

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

	updatePositionsPost();
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