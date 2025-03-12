// for(statement1; statement2; statement3){

// }

function sumNaturalNumber(num) {
    
    let sum = 0;

    for (let i = 1; i <= num; i++ ){
        sum = sum + i;
    }

    return sum;

}

console.log(sumNaturalNumber(10));