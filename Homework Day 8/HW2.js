function printMultiplicationTable(n) {
    for (let i = 1; i < n + 1; i++) {
        console.log("Multiplication of " + i);

        for (let j = 1; j < 11; j++) {
            mul = i * j;
            console.log(i + " x " + j + " = " + mul);
        }
    }
}

//printMultiplicationTable(5)

function basicArray(arr) {
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (let a of arr) {
        if (a > max) max = a;
        if (a < min) min = a;
        sum += a;
    }
    return {
        first: sum / arr.length,
        second: max,
        third: min,
    } 
}

let arr = [1, 2, 3];
res = basicArray(arr)
let avg = res.first;
let max = res.second;
let min = res.third;

//console.log("Max: " + max + "\nMin: " + min + "\nAverage: " + avg);

function guessNumber() {
    let answer = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(answer)
    while(number != answer) {
        var number = prompt("Enter your guess number from 1 to 100");
        if (number < 0) break;
        if (number > answer) console.log("Bet lower");
        else if (number < answer) console.log("Bet higher");
        else console.log("That's correct!");
    }
}


//guessNumber()

