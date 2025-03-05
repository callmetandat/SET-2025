/*
1. Difference(s) between == and ===?
    - Operator "==" is equality comparision betweens two values x and y.
    - Operator "===" is equality comparision betweens not only two values x and y but also their types (int, float, string, etc...).
    Ex: 1 == "1" -> True because they equal to each other value.
        1 === "1" -> False because they just equal to each other value not their types (int != string).

2. Compare let, const, and var
                var           let             const
Scope        Function        Block            Block
Reassign        Yes           Yes               No
Redefine        Yes            No               No
Hoisting        Yes            No               No

*/

// 3. Use variables and operators to:
// a. Calculate BMI (Body Mass Index)
function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        console.log("Height or weight parameter must not be less or equal than 0");
        return 0;
    }
    else
        return Math.round(weight / (height ** 2) * 100) / 100;
}

/*
let a = 70, b = 1.7;
let res = calculateBMI(a, b);
console.log("Your Body Mass Index is: ", res);
*/

// b. Calculate Simple Interest (principal * rate * time)
function calculateSimpleInterest(principal, rate, time){
    return principal * rate * time;
}

/*
let principal = 100000;
let rate = 0.1;
let time = 5;
let res = calculateSimpleInterest(principal, rate, time);
console.log("Your total inrterest is: " + res);
*/

// c. Convert Currency (USD to local currency)
function convertCurrency(usd) {
    return usd * 25.559;
}

/*
let money = 5;
let res = convertCurrency(money);
console.log("The amount of " + money + "$ = " + res + " VND");
*/


// d. Calculate Time (hours:minutes:seconds)
function calculateTime(time) {
    let h = ~~(time / 3600);
    let m = ~~((time % 3600) / 60);
    let s = time % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/*
let time = 3601;
let res = calculateTime(time);
console.log("The time is: " + res);
*/
