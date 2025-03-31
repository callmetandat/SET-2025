function calculateShoppingBudget(list) {
    let sum = 0;
    for(let i = 0; i < list.length; i++) {
        sum += list[i][0] * list[i][1];
    }
    return sum;
}

/*
const list = [ [5, 2], [10, 3], [15, 3], [5, 10] ]; // [quantity, price]
const result = calculateShoppingMoney(list);
console.log(result);
*/

function printSnailMatrix(matrix) {
    const rowStart = 0, rowEnd = matrix.length - 1, columnStart = 0, columnEnd =  matrix[0].length - 1;
    let result = [];
    while(rowStart <= rowEnd && columnStart <= columnEnd) {
        for(let i = columnStart; i <= columnEnd; i++) {
            let tmpRight = matrix[rowStart][i];
            result.push(tmpRight)
        }
        rowStart++;
        for(let i = rowStart; i <= rowEnd; i++) {
            let tmpDown = matrix[i][columnEnd]
            result.push(tmpDown)
        }
        columnEnd--;
        for(let i = columnEnd; i >= columnStart; i--) {
            let tmpLeft = matrix[rowEnd][i]
            result.push(tmpLeft)
        }
        rowEnd--;
        for(let i = rowEnd; i >= rowStart; i--) {
            let tmpUp = matrix[i][columnStart]
            result.push(tmpUp)
        }
        columnStart++;
    }
    return result;  
}

const matrix = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16] ];
const array = printSnailMatrix(matrix);
console.log(array);

function checkSquareNumber(number) {
    const child = ~~(Math.sqrt(number));
    return (child ** 2 == number);
}

//console.log(checkSquareNumber(1));