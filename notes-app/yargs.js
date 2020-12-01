//console.log(process.argv)

const yargs = require("yargs")


yargs.version('1.1.0')


yargs.command({
	command:"add",
	describe:"this is add describe function",
	builder:{
		title:{
			describe:"this is the title",
			demandOption:false,
			type:'string'
		}
	},
	handler:function(argv){
		console.log("add handler",argv)
	}
})
yargs.command({
	command:"remove",
	describe:"remove a note",
	handler:function(){
		console.log("remove this note")
	}
})


yargs.parse()
//console.log(yargs.argv)


