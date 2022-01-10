var video;
//var color;
var poseNet;
var poses = [];
var MIRROR_VIDEO_FEED = true;
var poseX;
var poseY;
var prevPoseX;
var prevPoseY;

function startFaceDetection()
{
	video = createCapture(VIDEO);
	video.hide();
	video.size(width, height);

	background(255);
	//color = color(random(255), random(255), random(255));
	frameRate(120);

	poseNet = ml5.poseNet(video, modelReady);
	poseNet.on("pose", function (results)
	{
		poses = results;
	});
}

function modelReady()
{
	select("#status").html("Model Loaded");
}

function mousePressed()
{
	console.log(JSON.stringify(poses));
}

function updatePositionsPre()
{
	let pose = poses[0].pose;

	let rightEye = pose["rightEye"];
	let leftEye = pose["leftEye"];
	poseX = leftEye.x - 50;
	poseY = rightEye.y;
	
	//what is this for? only strokeweight?
	let distanceX = abs(poseX - prevPoseX);
	let distanceY = abs(poseY - prevPoseY);
	avDistance = (distanceX + distanceY)/2;
	avDistance = map (avDistance, 0, 200, 1, 20);

}

function updatePositionsPost()
{
	prevPoseX = poseX;
	prevPoseY = poseY;

	t = t + 0.01;
}