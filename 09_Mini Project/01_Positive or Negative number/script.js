function checkNumber() {
  // Get the input value and parse it as a number
  const inputBox = document.getElementById("input-box").value;

  // Check if the input is a valid number
  if (isNaN(inputBox) || inputBox.trim() === "") {
    document.getElementById("answer").innerHTML =
      "<i>Please enter a valid number.</i>";

    return;
  }

  const num = parseInt(inputBox);

  // Get the answer element to update the result
  const data = document.getElementById("answer");

  // Logic to check the type of number
  if (num > 0) {
    data.innerHTML = "<i>Positive Number!</i>";
  } else if (num < 0) {
    data.innerHTML = "<i>Negative Number!</i>";
  } else {
    data.innerHTML = "<i>Neutral Number!</i>"; 
  }
}
