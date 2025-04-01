function clearData() {
  document.getElementById("usernameInput").value="";
document.getElementById("emailInput").value="";
 document.getElementById("passwordInput").value="";
  document.getElementById("cpassword").value="";

}

function formValidate() {
  let username = document.getElementById("usernameInput").value;
  let email = document.getElementById("emailInput").value;
  let password = document.getElementById("passwordInput").value;
  let cpassword = document.getElementById("cpassword").value;



  let isvalidate = true;

  let nameRegex = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;

  if (!nameRegex.test(username)) {
    alert("Please enter username in correct formate.");
    return false;
  }

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter email in correct formate.");
    isvalid = false;
  }

  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!passwordRegex.test(password)) {
    alert("Please enter password in correct formate.");
    isvalid = false;
  }

  if (password != cpassword) {
    cpassword.value = "";
    alert("Enter same password!");
    isvalidate = false;
    }
    
    if (isvalidate) {
          clearData();
    }

  return isvalidate;
}
