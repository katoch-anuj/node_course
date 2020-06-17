console.log('Client side javascript file is loaded!')



const el = document.querySelector("form");
 const search = el.querySelector("input");
const msg1 = document.querySelector("#message1");
const msg2 = document.querySelector("#message2");


 el.addEventListener("submit",(event)=>{
 	event.preventDefault();
 	const address=search.value

 	fetch("http://localhost:3000/weather?address="+address).then(response=>{
		response.json().then(data=>{
		if(data.error){
			msg1.textContent=data.error;
		}else{
			msg1.textContent=data.location;
			msg2.textContent=data.forecast;
			
		}

		})
	})
 })