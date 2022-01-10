var artyom;
var commandList = [
	{
		indexes: ["start painting"],
		action: function()
		{
			artyom.say("Painting.");
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
	},
	{
		indexes: ["stroke oval"],
		action: function()
		{
			artyom.say("Changed stroke style to using the oval brush.");
			setStrokeStyle("OVAL");
		}
	},
	{
		indexes: ["open options"],
		action: function()
		{
			artyom.say("Options window open. Select color and brush style.");
			openWindow();
		}
	},
	{
		indexes: ["close options"],
		action: function()
		{
			artyom.say("Options window closed");
			closeWindow();
		}
	},
	{
		indexes: ["colour red"],
		action: function()
		{
			artyom.say("Red selected.");
			setColor("RED");
		}
	},
	{
		indexes: ["colour green"],
		action: function()
		{
			artyom.say("Green selected.");
			setColor("GREEN");
		}
	},
	{
		indexes: ["colour blue"],
		action: function()
		{
			artyom.say("Blue selected.");
			setColor("BLUE");
		}
	},
	{
		indexes: ["colour all"],
		action: function()
		{
			artyom.say("All colors selected.");
			setColor("ALL");
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