// function sumNaturalNumber(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }

//   return sum;
// }

// console.log(sumNaturalNumber(10));



function sumNaturalNumber() {
    const number = document.getElementById("input-box").value;
    const data = document.getElementById("answer");
    
     let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }

    data.innerText = `Sum : ${sum}`

}



