<script>

    function validation() {
		var fname = document.getElementById("fname").value;
		var lname = document.getElementById("lname").value;
		var phone = document.getElementById("phone").value;
		var office = document.getElementById("office").value;
		var email = document.getElementById("email").value;
		var pswd = document.getElementById("pswd").value;
		var confirm = document.getElementById("confirm").value;
		var month = document.getElementById("month").value;
		var day = document.getElementById("day").value;
		var year = document.getElementById("year").value;
		var gender = document.getElementsByName("gender").value;
		var interest = document.getElementsByName("interest").value;
		var about = document.getElementById("about").value;

// First Name
        if(fname == "") {
                alert("Enter First Name");
                return false;
		}

// Last Name
		if(lname == "") {
                alert("Enter Last Name");
                return false;
		}
		
// Phone Number		
		if(phone == "") {
                alert("Enter Phone Number");
                return false;
		}
		if(isNaN(phone)) {
                alert("Enter only numbers");
                return false;
		}
		if(phone.length != 10) {
				alert("Enter 10 digits");
				return false;
		}
		
// Office Number		
		if(isNaN(office)) {
                alert("Enter only numbers");
                return false;
		}

// Email
        if(email == "") {
                alert("Enter Email");
                return false;
		}
        if(email.indexOf('@') == 0 || email.indexOf('.') == 0 || (email.length-email.indexOf('.') != 3) & (email.length-email.indexOf('.') !=4) || (email.indexOf('.')-email.indexOf('@') == 1) || (email.indexOf('@')-email.indexOf('.') == 1)) {
                alert("Enter Valid Email");
                return false;
		}	

// Password
		if(pswd == "") {
                alert("Enter Password");
                return false;
		}
		if(pswd.length < 8 || pswd.length > 12) {
                alert("Password can only have 8-12 Characters");
                return false;
		}
		var alphaNum = /^[0-9a-zA-Z]+$/;
		if(! pswd.match(alphaNum)) {
				alert("Password can only have alphabets and numbers");
                return false;
		}

// Confirm Password
		if(confirm == "") {
                alert("Enter Password");
                return false;
		}
		if(confirm != pswd) {
                alert("Passwords don't match");
                return false;
		}

// Date of Birth
		if(month == "Month") {
				alert("Select Month");
                return false;
		}
		if(isNaN(day)) {
				alert("Select Date");
                return false;
		}
		if(isNaN(year)) {
				alert("Select Year");
                return false;
		}
		if(month == "Feb" & day > 29) {
				alert("Invalid date");
                return false;
			
		}
		if((month == "April" || month == "June" || month == "Sep" || month == "Nov") & day > 30) {		
				alert("Invalid date");
                return false;
		}
	
// Gender Radio Button
		if(document.getElementById('male').checked) {}
		else if(document.getElementById('female').checked) {}
		else {
			alert('Select Gender');
			return false;
		}

// Interest Chcekbox
		if(document.getElementById('cb1').checked) {}
		else if(document.getElementById('cb2').checked) {}
		else if(document.getElementById('cb3').checked) {}
		else {
			alert('Select at least one Interest');
			return false;
		}

// About You
		if(about == "") {
                alert("Enter something about yourself");
                return false;
		}
	}

	function calculateAge() {
		
		var month = document.getElementById("month").value;
		var day = document.getElementById("day").value;
		var year = document.getElementById("year").value;

		var birth = new Date(year, month, day, 0, 0, 0, 0);
		var d = new Date();
		if(month != "Month" & day != "Date" & year != "Year") {
			document.getElementById("age").value = (d-birth)/1000/60/60/24/365.25 + " years";
		}
	}

	function calculateAge1() {

		var month = document.getElementById("month").value;
		var day = document.getElementById("day").value;
		var year = document.getElementById("year").value;

    	birthDate = new Date(year, month, day, 0, 0, 0, 0);
    	otherDate = new Date();

    	var years = (otherDate.getFullYear() - birthDate.getFullYear());

    	if (otherDate.getMonth() < birthDate.getMonth() || otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        	years--;
    	}

    	if(month != "Month" & day != "Date" & year != "Year") {
			document.getElementById("age").value = years + " years";
		}
	}

</script>