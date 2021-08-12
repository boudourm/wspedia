function check(){

	var question1 = document.quiz.question1;
	var question2 = document.quiz.question2;
	var question3 = document.quiz.question3;
	var correct = 0;
	var questions = 0;

	if (question1.value == "2") {
		correct++;
}
questions++;
	if (question2.value == "2") {
		correct++;
}	
questions++;
	if (question3.value == "2") {
		correct++;
	}
	questions++;
	//alert("Le nombre de reponse juste est "+correct);
	var classes=document.getElementsByClassName("correct");
	for (var i = 0, len = classes.length; i < len; i++){
		classes[i].style.color=" rgb(65, 218, 65)";
		//classes[i].style.backgroundColor=" rgb(245, 225, 225)";
		
	}
	var quiz=document.getElementById("quiz");
	var images=quiz.getElementsByTagName("img");
	var radios=quiz.getElementsByTagName("input");
	for (var i = 0, len = radios.length; i < len; i++)
	{
		radios[i].disabled=true;
		if(radios[i].checked==true && images[i].getAttribute("alt")=="nocheck")
		{
			radios[i].checked=false;
			images[i].style.visibility = "visible";
		}
	}

	for (var i = 0, len = images.length; i < len; i++){
		if(images[i].getAttribute("alt")=="check")
		{
			radios[i].checked=true;
			images[i].style.visibility = "visible";
		}
		
	}
	var bouton = document.getElementById("bouton");
	bouton.style.display="none";


	document.getElementById("after_submit").style.display = "block";
	document.getElementById("message").innerHTML = "Vous avez " + correct + "/"+questions+" bonnes reponses.";
	

	}

