function setup() {
	createCanvas(400, 400);

	loadVoiceCommands();
	startVoiceCommandsDetection();
}

function draw() {
	if (isPainting)
	{
		paint();
	}
}
