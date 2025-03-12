// function checkNumber(num) {

//     if (num > 0) {
//        console.log("Positive Number!")
//     }
//     else if (num < 0) {
//          console.log("Negative Number!");
//     } else {
//         console.log("Nutral Number!")
//     }

// }

// let num = parseInt(prompt("Enter Number :"));

// checkNumber(num);

function checkNumber() {

    const inputBox = parseInt(document.getElementById("input-box").value);
    
    const data = document.getElementById("answer");
    
    if (inputBox > 0) {
      
        data.innerHTML = `<i>Positive Number!</i>`;
        
    } else if (inputBox < 0) {
        
        data.innerHTML = `<i>Negative Number!</i>`;
        
    } else {
        
        data.innerHTML = `<i>Nutral Number!</i>`;
     }
}
