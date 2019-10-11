document.getElementsByTagName("form")[0].addEventListener("submit", handleSubmit);

function handleSubmit()
{
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var one = document.getElementById("one-star").checked;
	var two = document.getElementById("two-star").checked;
	var three = document.getElementById("three-star").checked;
	var four = document.getElementById("four-star").checked;
	var five = document.getElementById("five-star").checked;
	var comment = document.getElementById("comment").value;
	var agree = document.getElementById("agree").checked;

	if(name == "") alert("Name can't be empty");
	else if(name.length < 5) alert("Name can't be less than 5 characters");
	else if(email == "") alert("email can't be empty");
	else if(!emailValidation(email)) alert("Email is invalid!");
	else if(!one && !two && !three && !four && !five) alert("You must rate this testimonial");
	else if(comment == "") alert("Comment can't be empty");
	else if(comment.length < 15) alert("Comment must be more than 15 words");
	else if(!agree)	alert("You must agree to terms and condition");

	else alert(
		"Submittion succesfull : " + "\n" +
		name + " " + email + " " + one + " " + two + " " + three + " " + four + " " + five + " " + comment + " " + agree
		);
}

function emailValidation(email)
{
	if(!email.endsWith(".com")) return false;
	if(email.includes("@.") || email.includes(".@")) return false;
	if(email.startsWith(".") || email.startsWith("@")) return false;
	if(email.substring(0, email.indexOf("@")).length < 7) return false;
	return true;
}