let rowFirstMatrix, colFirstMatrix, rowSecondMatrix, colSecondMatrix;
document.getElementById("rows_first_matrix").addEventListener("input", (event) => {
    rowFirstMatrix = parseInt(event.target.value)
    console.log(rowFirstMatrix)
})

document.getElementById("cols_first_matrix").addEventListener("input", (event) => {
    colFirstMatrix = parseInt(event.target.value)
    console.log(colFirstMatrix)
})
document.getElementById("rows_second_matrix").addEventListener("input", (event) => {
    rowSecondMatrix = parseInt(event.target.value)
    console.log(rowSecondMatrix)
})
document.getElementById("cols_second_matrix").addEventListener("input", (event) => {
    colSecondMatrix = parseInt(event.target.value)
    console.log(colSecondMatrix)
})

function createMatrices(row, col) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = []
        for (let j = 0; j < col; j++) {
            matrix[i][j] = parseInt(prompt(`Enter entry for matrix at row ${i + 1} & col ${j + 1}`));
        }
    }
    return matrix
}


function writingMatrixinTable(matrix) {
    let html = '<table border="1" class="table_for_matrix">';
    for (let i = 0; i < matrix.length; i++) {
        html += '<tr>';
        for (let j = 0; j < matrix[i].length; j++) {
            html += `<td>${matrix[i][j]}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    return html;
}



function displayMatrices() {
    if (rowFirstMatrix && colFirstMatrix && rowSecondMatrix && colSecondMatrix) {
        let matrix1 = createMatrices(rowFirstMatrix, colFirstMatrix);
        document.getElementById("firstMatrix").innerHTML = `First Matrix: <br>${writingMatrixinTable(matrix1)}`;

        let matrix2 = createMatrices(rowSecondMatrix, colSecondMatrix);
        document.getElementById("secondMatrix").innerHTML = `Second Matrix: <br>${writingMatrixinTable(matrix2)}`;

        if (rowFirstMatrix === rowSecondMatrix && colFirstMatrix === colSecondMatrix) {
            let resultMatrix = matrixAddition(matrix1, matrix2);
            document.getElementById("resultMatrix").innerHTML = `Result Matrix: <br>${writingMatrixinTable(resultMatrix)}`;
        } else {
            document.getElementById("resultMatrix").innerHTML = "Order of matrices are not equal";
        }
    }
}

function matrixAddition(matrix1, matrix2) {
    let matrix = [];
    for (let i = 0; i < matrix1.length; i++) {
        matrix[i] = []
        for (let j = 0; j < matrix1[0].length; j++) {
          matrix[i][j] = matrix1[i][j] + matrix2[i][j]
        }
    }
    return matrix;
}

document.getElementById("display_matrices").addEventListener("click",displayMatrices)