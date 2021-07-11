var bool = true;
var boolbis = true;

	document.getElementById("valider").addEventListener("click", function () {
		if(bool==true){
			var taille = document.getElementById("infos").value;
			afficheTriangle(trianglePascal(taille));
			bool = false;
		}
		
	});
	
	document.getElementById("valider-1").addEventListener("click", function () {
		if(boolbis==true){
		var numero = document.getElementById("stern").value;
		afficheStern(Stern(numero));
		boolbis = false;
		}
		
	});
	
	
function trianglePascal(taille){
	var tab = new Array(); //équivalent : tab = [];
	
	for(var i=0;i<taille;i++){ //parcourt le nb de ligne
		tab[i] = new Array();
		
		for(var j=0;j<i+1;j++){ //il s'agit de nos colonne
			
			if (j==i || j==0){
			tab[i][j] = 1;	
			
			}else{
				tab[i][j] = tab[i-1][j-1] + tab[i-1][j];
			}
		}
		
	}
	return tab;		
}

function afficheTriangle(tab){
	for(var i=0; i<tab.length;i++){
		for(var j=0;j<tab[i].length;j++){
			document.getElementById("res").innerHTML += tab[i][j] + " ";
		}
		document.getElementById("res").innerHTML += "<br>";
	}
	
}

function Stern(numero){
	var tab1 = trianglePascal(numero+100);
	var tab2 = [];
	tab2.push(1);
	tab2.push(1);
	tab2.push(2);
	tab2.push(1);
	//tab2 = [1,1,2,1]
	for(var i=4; i<numero;i++){
		var sum = 0;
		var newval = Math.trunc(i/2);
		for(var j= 0; j<newval+1 ;j++){
			sum= sum+tab1[i-j][j]%2;
		}
		tab2.push(sum);
	}
	return tab2;
}
function afficheStern(tab){
	for(var i=0; i<tab.length;i++){
		var u = i+1;
		document.getElementById("stern-res").innerHTML += "s" +u+ "= "+tab[i]+" ";	
	}
	
}

document.getElementById("retry").addEventListener("click", function() {
	document.location.reload(true);
	
});
document.getElementById("retry-1").addEventListener("click", function() {
	document.location.reload(true);
	
});