
const yargs = require("yargs");
const notes = require("./notes.js");


yargs.command({
	command : "add",
	describe : "to add title",
	builder:{
		title:{
			describe : "The Title",
			demandOption : true,
			type : "string"
		},
		body:{
			describe : "The Body",
			demandOption : true,
			type : "string"
		}
	},
	handler : function(argv){
		console.log("handler")
		notes.addNote(argv.title,argv.body)

	}
});

yargs.command({
	command : "remove",
	describe : "to remove",
	builder :{
		title :{
			describe : "title",
			demandOption :  true,
			type : "string"
		},
		body : {
			describe : "body",
			demandOption :  true,
			type : "string"
		}
	},
	handler : function(argv){
		notes.removeNote(argv.title,argv.body)
	}
})
yargs.parse()