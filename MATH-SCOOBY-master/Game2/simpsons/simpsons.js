	
	var scoreActu = [0,0];
	var scoreTmp = 0;
	var indexPlayer = 1;
	var boolPlay = true;
	var numberTmp = 0;
	var test = 0;
	
	document.getElementsByClassName("score-1").textContent = "0";
	document.getElementsByClassName("score-2").textContent = "0";
	document.getElementsByClassName("current-score-1").textContent = "0";
	document.getElementsByClassName("current-score-2").textContent = "0";
	
	
	
	document.querySelector(".btn-roll").addEventListener("click", function() {
		if (boolPlay== true){
			
		var randomNumber = Math.floor(Math.random()*8)+1;
		document.querySelector(".image-roll").src = "pics/" + randomNumber+".png";
		
		if(randomNumber==1 && randomNumber==6){
			scoreTmp += 200;
			document.querySelector(".current-score-"+indexPlayer).textContent = scoreTmp;	
		}else if(randomNumber!=3) {
			scoreTmp += randomNumber;
			document.querySelector(".current-score-"+indexPlayer).textContent = scoreTmp;
			
		}else {
			
			scoreTmp = 0;
			document.querySelector(".current-score-"+indexPlayer).textContent = scoreTmp;
			
			indexPlayer === 1 ? indexPlayer = 2 : indexPlayer = 1;
			
			var elem1 = document.querySelector(".part1").firstChild;
			var elem2 = document.querySelector(".part2").firstChild;
			
			elem1.classList.toggle("active");
			elem2.classList.toggle("active");
			
			
		}
		numberTmp = randomNumber;
		}
		
	});
	
	document.querySelector(".btn-hold").addEventListener("click", function () {
		if(boolPlay==true) {
			
			scoreActu[indexPlayer-1] += scoreTmp;
			document.querySelector(".score-"+indexPlayer).textContent = scoreActu[indexPlayer-1];
			
			
			if(scoreActu[indexPlayer-1] >= 200) {
					
					document.querySelector(".name-"+indexPlayer).textContent = "winner";
					
					var elem1 = document.querySelector(".part1").firstChild;
					var elem2 = document.querySelector(".part2").firstChild;
					elem1.classList.remove("active");
					elem2.classList.remove("active");
					
					boolPlay = false;
			}
				
			else {
					indexPlayer === 1 ? indexPlayer = 2 : indexPlayer = 1;
					scoreTmp =0;
					
					
					document.querySelector(".current-score-1").textContent ="0";
					document.querySelector(".current-score-2").textContent ="0";
					
					var elem1 = document.querySelector(".part1").firstChild;
					var elem2 = document.querySelector(".part2").firstChild;
						
					elem1.classList.toggle("active");
					elem2.classList.toggle("active");
					
					
			}
		}
				
	});