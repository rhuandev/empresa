function showEquipe() {	
	var equipe = document.getElementById("equipe");
	
	if(equipe.style.display === "flex"){
		equipe.style.display = "none";
	}else {
		equipe.style.display = "flex";
	}
}