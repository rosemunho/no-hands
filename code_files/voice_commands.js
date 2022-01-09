var artyom;
var commandList = [
	{
		indexes: ["start painting"],
		action: function()
		{
			artyom.say("Painting now.");
			startPainting();
		}
	},
	{
		indexes: ["stop painting"],
		action: function()
		{
			artyom.say("Not painting.");
			stopPainting();
		}
	},
	{
		indexes: ["stroke line"],
		action: function()
		{
			artyom.say("Changed stroke style to line.");
			setStrokeStyle("LINE");
		}
	},
	{
		indexes: ["stroke dotted"],
		action: function()
		{
			artyom.say("Changed stroke style to dotted.");
			setStrokeStyle("DOTTED");
		}
	}
];

function loadVoiceCommands()
{
	artyom = new Artyom();
	artyom.addCommands(commandList);
}

function startVoiceCommandsDetection()
{
	artyom.initialize({
		listen: true,
		continuous: true,
		lang: "en-GB",
	}).then(function(){
		console.log("Artyom has been correctly initialized");
		console.log("The following array shouldn't be empty" , artyom.getVoices());
	}).catch(function(){
		console.error("An error occurred during the initialization");
	});
}