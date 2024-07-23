function makingMatrix(nor, noc) {
    let matrix = [];
    for (let i = 0; i < nor; i++) {
        matrix[i] = [];
        for (let j = 0; j < noc; j++) {
            matrix[i][j] = parseInt(prompt(`Enter entry for matrix at ${i + 1} row & ${j + 1} column`));
        }
    }
    return matrix;
};

let norMatrix1 = parseInt(prompt(`Enter number of rows for matrix 1`));;
let nocMatrix1 = parseInt(prompt(`Enter number of column for matrix 1`));;
let matrix1 = makingMatrix(norMatrix1, nocMatrix1);
document.getElementById("firstMatrix").innerHTML = `First Matrix : [${matrix1}]`;

let norMatrix2 = parseInt(prompt(`Enter number of rows for matrix 2`));;
let nocMatrix2 = parseInt(prompt(`Enter number of column for matrix 2`));;
let matrix2 = makingMatrix(norMatrix2, nocMatrix2);
document.getElementById("secondMatrix").innerHTML = `Second Matrix :[${matrix2}]`;

function addingMatrix(matrix1, matrix2) {
        let matrix = [];
        for (let i = 0; i < matrix1.length; i++) {
            matrix[i] = [];
            for (let j = 0; j < matrix1[0].length; j++) {
                matrix[i][j] = matrix1[i][j] + matrix2[i][j]
            }
        }
        return matrix;
    }
    if (matrix1.length == matrix2.length && matrix1[0].length == matrix2[0].length) {

document.getElementById("resultMatrix").innerHTML = `Result Matrix [${addingMatrix(matrix1, matrix2)}]`;
    }else {
        document.getElementById("resultMatrix").innerHTML = "Order of matrixes are not equal"
    }