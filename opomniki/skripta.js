window.addEventListener('load', function() {
	//stran nalozena
	
	
	var potrdiPrijavo = function() {
    	var uporabnik=	document.querySelector("#uporabnisko_ime").value
    	document.querySelector("#uporabnik").innerHTML = uporabnik;
    	document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	
	var dodajOpomnik = function() {
		var naziv = document.querySelector("#naziv_opomnika").value
		var cas = document.querySelector("#cas_opomnika").value
		//opomnik.innerHTML += ""
		//opomnik.removeChild(opomnik);
		
	}
	document.querySelector("#prijavniGumb").addEventListener("click", potrdiPrijavo);
	
	document.querySelector("#dodajGumb").addEventListener("click", dodajOpomnik);
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});