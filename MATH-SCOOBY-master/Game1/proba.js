 var tableau = [];
 var i = 0;
 
document.getElementById("envoyer-1").addEventListener("click", function() {
	var taille = document.getElementById("taille").value;
	document.getElementById("envoyer-2").addEventListener("click", function(){
		if(i < taille){
			var chiffre = document.getElementById("tab").value;
			tableau.push(chiffre);
			i++;
		}else {  //lorsque i n'est plus inférieur a notre taille
			document.getElementById("envoyer-2").value = "Generate";
			document.getElementById("envoyer-2").addEventListener("mouseover", function test() {
				document.getElementById("moyenne").textContent = moyenne(tableau);
				document.getElementById("variance").textContent = variance(tableau);
				document.getElementById("ecart-type").textContent = ecartType(tableau);	
			});
		}
		
	});	
	
});

function moyenne(tableau) {
	var sum = 0;
	var calcul = 0;
	for(var i=0; i<tableau.length; i++){
		sum+= parseFloat(tableau[i]);
	}
	calcul = sum/tableau.length;
	return calcul;
}

function variance(tableau) {
	var sum = 0;
	var calcul = 0;
	for(var i=0; i<tableau.length; i++){
		sum+= (parseFloat(tableau[i])-moyenne(tableau))*(parseFloat(tableau[i])-moyenne(tableau));
	}
	calcul = sum/tableau.length;
	return calcul;	
}
function ecartType(tableau) {
	var calcul = 0;
	calcul = Math.sqrt(variance(tableau));
	return calcul;	
}
/*Reset*/
  
document.getElementById("reset-1").addEventListener("click", function() {
	document.location.reload(true);
	
});
document.getElementById("reset-2").addEventListener("click", function() {
	document.location.reload(true);
	
});