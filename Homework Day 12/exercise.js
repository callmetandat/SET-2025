function calculateShoppingBudget(list) {
    let sum = 0;
    for(let i = 0; i < list.length; i++) {
        sum += list[i][0] * list[i][1];
    }
    return sum;
}

/*
let list = [ [5, 2], [10, 3], [15, 3], [5, 10] ]; // [quantity, price]
let res = calculateShoppingMoney(list);
console.log(res);
*/

function printSnailMatrix(matrix) {
    let h1 = 0, h2 = matrix.length - 1, c1 = 0, c2 =  matrix[0].length - 1;
    let arr = [];
    while(h1 <= h2 && c1 <= c2) {
        for(let i = c1; i <= c2; i++) {
            //console.log(a[h1][i]);
            temp = matrix[h1][i];
            arr.push(temp)
            //console.log('h1 ' + temp);
        }
        h1++;
        for(let i = h1; i <= h2; i++) {
            temp = matrix[i][c2]
            arr.push(temp)
            //console.log('c2 ' + temp);
        }
        c2--;
        for(let i = c2; i >= c1; i--) {
            temp = matrix[h2][i]
            arr.push(temp)
            //console.log('h2 ' + temp)
        }
        h2--;
        for(let i = h2; i >= h1; i--) {
            temp = matrix[i][c1]
            arr.push(temp)
            //console.log('c1 ' + temp)
        }
        c1++;
    }
    return arr;  
}

let m = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16] ];
let res = printSnailMatrix(m);
console.log(res);

function checkSquareNumber(n) {
    let child = ~~(Math.sqrt(n));
    return (child ** 2 == n);
}

//console.log(checkSquareNumber(1));