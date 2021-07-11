
//initialisation des différentes variable utilisé dans le jeu
var scoreActu = [0,0];
var scoreTmp = 0;
var numberTmp = 0;
var indexPlayer = 1;
var bool = true;

//évènement pour le bouton Roll dice avec fonction callback
	document.querySelector(".btn-roll").addEventListener("click", function () {
	if(bool==true){	
		//variable qui donne un chiffre random entre 1 et 6
	var randomNumber = Math.floor(Math.random()*6)+1;
	
	document.querySelector(".image-roll").src = "pics/"+ randomNumber+".png";
	
	//ajout de score temporaire + changement de joueur si on tombe sur fantome
	if (randomNumber!=3){
		scoreTmp += randomNumber;
		document.querySelector(".current-score-"+indexPlayer).textContent= scoreTmp;
		
	}else {
		scoreTmp = 0;
		document.querySelector(".current-score-"+indexPlayer).textContent= scoreTmp;
		indexPlayer === 1 ? indexPlayer = 2 : indexPlayer = 1;
		
		var elem1 = document.querySelector(".part1").firstChild;
		var elem2 = document.querySelector(".part2").firstChild;
		
		elem1.classList.toggle("active");
		elem2.classList.toggle("active");
	}
	
	numberTmp = scoreTmp;
	}
});

document.querySelector(".btn-hold").addEventListener("click", function () {
	if(bool==true){
		scoreActu[indexPlayer-1] += scoreTmp;
		document.querySelector(".score-"+indexPlayer).textContent= scoreActu[indexPlayer-1];
		if(scoreActu[indexPlayer-1]>=200){
			
			document.querySelector(".name-"+indexPlayer).textContent= "WINNER !!";
			
			var elem1 = document.querySelector(".part1").firstChild;
			var elem2 = document.querySelector(".part2").firstChild;
					
			elem1.classList.remove("active");
			elem2.classList.remove("active");
			
			
			bool = false;
		}else{
				
				scoreTmp = 0;
				document.querySelector(".current-score-"+indexPlayer).textContent= "0";
				
				indexPlayer === 1 ? indexPlayer = 2 : indexPlayer = 1;
					
					var elem1 = document.querySelector(".part1").firstChild;
					var elem2 = document.querySelector(".part2").firstChild;
					
					elem1.classList.toggle("active");
					elem2.classList.toggle("active");
		}
				
				
	}
	
});