const fs = require("fs");

function addNote (title,body){
	var notes = getFile()
	console.log(notes)
	
	var filterinfo=notes.filter(function(note){
		return (note.title==title)
	})
	if(filterinfo.length>0){
		console.log("title already exists")
	}else{
			notes.push({
			title:title,
			body:body
		})
		console.log("title updated")
		var data = JSON.stringify(notes)
		fs.writeFileSync("notes.json",data)	
	}

}
function removeNote(title,body){
		var notes = getFile();
		var filterinfo=notes.filter(function(note){
			return (note.title!=title)
		})
		var data = JSON.stringify(filterinfo);
		fs.writeFileSync("notes.json",data)

}

function getFile(){
	try{
		var fileBuffer = fs.readFileSync("notes.json");
		var fileJson = JSON.parse(fileBuffer);
		return fileJson;

	}
	catch(e){
		return [];
	}
}

module.exports = {
	addNote:addNote,
	removeNote:removeNote
}