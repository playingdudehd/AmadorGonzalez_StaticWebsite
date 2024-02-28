//Collect login and password and email. Have optional fields for street, city, state, zip, email, phone.

function validateForm(event) {
	event.preventDefault();
  // Required fields
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  // Optional fields
  var street = document.getElementById("street").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var phone = document.getElementById("phone").value;

  // Validation
  if (username === "" || password === "" || email === "") {
    alert("Username, password, and email are required fields.");
  } else {
    // Additional validation for optional fields if provided
    if (street !== "" && city !== "" && state !== "" && zip !== "" && email !== "" && phone !== "") {
      alert("Form Completed" + "\n" + username + "\n"+ password + "\n"+ email+"\n" + street + "\n"+ city + "\n"+ state+ "\n" + zip + "\n"+ email + "\n"+ phone);
		window.location.href = "shop.html";
		
      // You can submit the form here 
    } else {
      alert("Form Submitted Successfully Without Optional Fields"+ "\n" + username + "\n"+ password + "\n"+ email);
		window.location.href = "shop.html";
    }
  }
}

function myFunction(event) {
	event.preventDefault();
	
	var usern = document.getElementById("usern").value;
	var passw = document.getElementById("passw").value;
	if(usern === "" || passw === ""){
		alert("Username and Password are required fields.");
	}
	else{
		alert("Login Successful");
		
		window.location.href = "shop.html";	
	}
}
function myCart(event){
	event.preventDefault();
	
	var quantityItem = document.getElementById("quantityItem").value;
	var priceElement = document.getElementById("price");
	
	var priceValue = priceElement.textContent || priceElement.innerText;
	
	var x = quantityItem * priceValue;
	alert("Total items Added: "+quantityItem+"\n"+"Price Per Item: "+priceValue+"\n"+"Total: "+x);
	
}