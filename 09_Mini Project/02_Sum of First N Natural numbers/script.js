function sumNaturalNumber() {
  const inputBox = document.getElementById("input-box").value;
  const data = document.getElementById("answer");

  // Convert input to an integer
  const number = parseInt(inputBox);

  // Check if the input is a valid number and a positive integer
  if (isNaN(number) || number <= 0) {
    data.innerText = "Please enter a valid positive number.";
  } else {
    let sum = 0;

    // Calculate the sum of the first 'number' natural numbers
    for (let i = 1; i <= number; i++) {
      sum += i;
    }

    // Display the result
    data.innerText = `Sum: ${sum}`;
  }
}
