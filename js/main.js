document.getElementById("generate-button").onclick = function (){

	let wordinput= document.getElementById("Word-imput").value

	if(wordinput!=""){

		let partOfSpeech
		const url ='https://api.dictionaryapi.dev/api/v2/entries/en/'+wordinput
		console.log(url)
		fetch(url)
		.then(response => response.json())
		.then( data =>{

			let th1 = document.createElement("th")
			let th2 = document.createElement("th")
			let th3 = document.createElement("th")
			let tr = document.createElement("tr")
			
			th1.innerHTML=data[0].meanings[0].partOfSpeech
			tr.appendChild(th1)
			document.getElementById("thead-table").appendChild(tr)
			th2.innerHTML=data[0].meanings[1].partOfSpeech
			tr.appendChild(th2)
			document.getElementById("thead-table").appendChild(tr)
			th3.innerHTML=data[0].meanings[2].partOfSpeech
			tr.appendChild(th3)
			document.getElementById("thead-table").appendChild(tr)

			let defth1 = document.createElement("th")
			let defth2 = document.createElement("th")
			let defth3 = document.createElement("th")
			let deftr = document.createElement("tr")
			defth1.innerHTML="Definitions"
			deftr.appendChild(defth1)
			document.getElementById("thead-table").appendChild(deftr)
			defth2.innerHTML="Definitions"
			deftr.appendChild(defth2)
			document.getElementById("thead-table").appendChild(deftr)
			defth3.innerHTML="Definitions"
			deftr.appendChild(defth3)
			document.getElementById("thead-table").appendChild(deftr)
			
			let trbody = document.createElement("tr")
			let td1 = document.createElement("td")
			let td2 = document.createElement("td")
			let td3 = document.createElement("td")


			td1.innerHTML=data[0].meanings[0].definitions[0].definition
			trbody.appendChild(td1)
			document.getElementById("body-table").appendChild(trbody)
			td2.innerHTML=data[0].meanings[1].definitions[0].definition
			trbody.appendChild(td2)
			document.getElementById("body-table").appendChild(trbody)
			td3.innerHTML=data[0].meanings[2].definitions[0].definition
			trbody.appendChild(td3)
			document.getElementById("body-table").appendChild(trbody)

			document.getElementById("audio-button").onclick = function(){

				var audio = document.createElement("audio");
				let url =data[0].phonetics[0].audio;
				audio.src=url;
				audio.controls= true;
				document.getElementById("word-audio").appendChild(audio)
			}


		}

		)

	}else{
		alert("Debe ingresar una palabra")	
	}

}

document.getElementById("delete-button").onclick = function(){

	document.getElementById("body-table").innerHTML="";
	document.getElementById("thead-table").innerHTML="";}