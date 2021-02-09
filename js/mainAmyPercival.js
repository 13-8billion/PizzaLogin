//variables for function 'calcPizza' set to null
var total =0;
var quant =0;
var discount=0;

//function to calculate value from form fields and display total
function calcPizza(){
	
//if selected option value is equals to "5" return total as 5
	if(document.getElementById("dropdown").value==="5"){

		total = 5;
	}

	else if(document.getElementById("dropdown").value==="7"){

		total = 7;
	}

	else if(document.getElementById("dropdown").value==="17"){

		total = 17;
	}

	else {
		total = 0;
	}

// boolean to calculate and add 10% discount if 'extracheese' in input into form field 
	var discount=document.forms["pizzaForm"]["discount"].value;
		if (discount === "extracheese"){ //if string equals to 'extracheese'
 		discount = total * 10 / 100; // 10% discount calculation
		total = total - discount; //result of calculation
 		}else if (discount ==""){ //if discount field empty, do nothing
 		}else{
  		return false;
  	
  		}
// statement to read quantity input and place in variable 'quant'
	quant = document.getElementById("quantity").value;

//to display the result of calculations after the html element 'totalNow'
	document.getElementById("totalNow").innerHTML = ("&nbsp;&nbsp;&nbsp;&nbsp;TOTAL: &euro;" + total * quant);
}
	
//function for dropdown option select "supersize" alert with jQuery effect
function super1()
	{
   	if(document.getElementById('dropdown').value ==="17"){
   	//jQuery alert plugin1
    jAlert('<em>The World Cancer Research Fund (WCRF)</em> says <strong>SUPERSIZED</strong> meal offers encourage people to eat too much. <u>Health experts warn that being seriously overweight can lead to cancer or heart disease.</u>');
    }
	}

//function to validate the form with various parameters using boolean expressions
function validateForm() 
	{

//username validation 
	var username=document.forms["pizzaForm"]["username"].value;
	if (username ==null || username=="") //if username is null or blank
 	{
  	alert("You must enter a username");		
  	return false;
 	}	

//password min 7 characters validation
	var password=document.forms["pizzaForm"]["password"].value;
	if (password.length <7 || password=="") //if password less than 7 characters or blank
	{
 	alert("Password must be seven characters in length");
  	return false;
  	}

//numerical quantity validation
  	var quantity=document.forms["pizzaForm"]["quantity"].value;
	if (isNaN(quantity) || quantity=="") //if quantity value is not numerical or blank
	{
 	alert("Quanity must be numerical");
  	return false;
  	}

//string equality for discount validation
  	var discount=document.forms["pizzaForm"]["discount"].value;
	if (discount === "extracheese"){ //if discount string equals to 'extracheese'
 	jAlert("10% DISCOUNT APPLIED");//jQuery alert plugin1
 	}else if (discount ==""){ //if discount field empty, do nothing
 	}else {
 	alert("DISCOUNT NOT VALID") //all other inputs in field false/invalid
  	return true;
  	}
}