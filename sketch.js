function setup() {
	createCanvas(400, 400);

	startFaceDetection();
	loadVoiceCommands();
	startVoiceCommandsDetection();
}

function draw() {
	if(MIRROR_VIDEO_FEED == true)
	{
		translate(width, 0);
		scale(-1.0, 1.0);
	}

	if (poses.length > 0)
	{
		updatePositionsPre();
		if (isPainting)
		{
			paint();
		}
	}
}
