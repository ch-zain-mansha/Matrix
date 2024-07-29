window.addEventListener('load', loadMatrices);

let rowFirstMatrix, colFirstMatrix, rowSecondMatrix, colSecondMatrix;

document.getElementById("rows_first_matrix").addEventListener("input", (event) => {
    rowFirstMatrix = parseInt(event.target.value);
    console.log(rowFirstMatrix);
});

document.getElementById("cols_first_matrix").addEventListener("input", (event) => {
    colFirstMatrix = parseInt(event.target.value);
    console.log(colFirstMatrix);
});

document.getElementById("rows_second_matrix").addEventListener("input", (event) => {
    rowSecondMatrix = parseInt(event.target.value);
    console.log(rowSecondMatrix);
});

document.getElementById("cols_second_matrix").addEventListener("input", (event) => {
    colSecondMatrix = parseInt(event.target.value);
    console.log(colSecondMatrix);
});

function createMatrices(row, col) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        for (let j = 0; j < col; j++) {
            matrix[i][j] = parseInt(prompt(`Enter entry for matrix at row ${i + 1} & col ${j + 1}`));
        }
    }
    return matrix;
}

function writingMatrixinTable(matrix) {
    let html = '<table border="1" class="table_for_matrix" id="table">';
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

function displayFirstMatrix(){
    if (rowFirstMatrix && colFirstMatrix) {
        let matrix1 = createMatrices(rowFirstMatrix, colFirstMatrix);
        localStorage.setItem('firstMatrix', JSON.stringify(matrix1));
        document.getElementById("firstMatrix").innerHTML = `First Matrix: <br>${writingMatrixinTable(matrix1)}`;
    }
}

function displaySecondMatrix() {
    if(rowSecondMatrix && colSecondMatrix){
        let matrix2 = createMatrices(rowSecondMatrix, colSecondMatrix);
        localStorage.setItem('secondMatrix', JSON.stringify(matrix2));
        document.getElementById("secondMatrix").innerHTML = `Second Matrix: <br>${writingMatrixinTable(matrix2)}`;
    }
}

function displayResultMatrix(){
    if (rowFirstMatrix === rowSecondMatrix && colFirstMatrix === colSecondMatrix) {
        let firstMatrix = JSON.parse(localStorage.getItem('firstMatrix'));
        let secondMatrix = JSON.parse(localStorage.getItem('secondMatrix'));
        let resultMatrix = matrixAddition(firstMatrix, secondMatrix);
        localStorage.setItem('resultMatrix', JSON.stringify(resultMatrix));
        document.getElementById("resultMatrix").innerHTML = `Result Matrix: <br>${writingMatrixinTable(resultMatrix)}`;
        console.log(resultMatrix)
        document.getElementById("resultMatrix").style.display = "block";
    } else {
        document.getElementById("resultMatrix").innerHTML = "Order of matrices are not equal";
    }
}

function matrixAddition(matrix1, matrix2) {
    let matrix = [];
    for (let i = 0; i < matrix1.length; i++) {
        matrix[i] = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            matrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return matrix;
}

function loadMatrices() {
    let firstMatrix = JSON.parse(localStorage.getItem('firstMatrix'));
    let secondMatrix = JSON.parse(localStorage.getItem('secondMatrix'));
    let resultMatrix = JSON.parse(localStorage.getItem('resultMatrix'));

    if (firstMatrix) {
        document.getElementById("firstMatrix").innerHTML = `First Matrix: <br>${writingMatrixinTable(firstMatrix)}`;
    }
    if (secondMatrix) {
        document.getElementById("secondMatrix").innerHTML = `Second Matrix: <br>${writingMatrixinTable(secondMatrix)}`;
    }
    if (resultMatrix) {
        document.getElementById("resultMatrix").innerHTML = `Result Matrix: <br>${writingMatrixinTable(resultMatrix)}`;
    }
}

document.getElementById("first_matrix_form").style.display = "none";
document.getElementById("second_matrix_form").style.display = "none";

document.getElementById("create_new_first_matrix").addEventListener("click",()=>{
    document.getElementById("create_new_first_matrix").style.display = "none";
    document.getElementById("first_matrix_form").style.display = "block";
})

document.getElementById("create_new_second_matrix").addEventListener("click",()=>{
    document.getElementById("create_new_second_matrix").style.display = "none";
    document.getElementById("second_matrix_form").style.display = "block";
})

document.getElementById("edit_first_matrix").addEventListener("click",()=>{
    alert("Click the value of the first matrix you want to change");
    let firstMatrixElement = document.getElementById("firstMatrix");
    let tds = firstMatrixElement.querySelectorAll("td");
    tds.forEach(td => {
        td.addEventListener("click", (event) => {
            let clicked_td = event.target;
            let current_value = clicked_td.innerHTML;
            let new_td_value = prompt("Enter new entry");
            if (!isNaN(new_td_value) && new_td_value !== null && new_td_value.trim() !== '') {
                clicked_td.innerHTML = parseInt(new_td_value);
                let firstMatrix = JSON.parse(localStorage.getItem('firstMatrix'));
                let row = Array.from(clicked_td.parentNode.parentNode.children).indexOf(clicked_td.parentNode);
                let col = Array.from(clicked_td.parentNode.children).indexOf(clicked_td);
                firstMatrix[row][col] = parseInt(new_td_value);
                localStorage.setItem('firstMatrix', JSON.stringify(firstMatrix));
            } else {
                alert("Invalid input. Please enter a valid number.");
                clicked_td.innerHTML = current_value;
            }
        });
    });
});

document.getElementById("edit_second_matrix").addEventListener("click",()=>{
    alert("Click the value of the second matrix you want to change");
    let secondMatrixElement = document.getElementById("secondMatrix");
    let tds = secondMatrixElement.querySelectorAll("td");
    tds.forEach(td => {
        td.addEventListener("click", (event) => {
            let clicked_td = event.target;
            let current_value = clicked_td.innerHTML;
            let new_td_value = prompt("Enter new entry");
            if (!isNaN(new_td_value) && new_td_value !== null && new_td_value.trim() !== '') {
                clicked_td.innerHTML = parseInt(new_td_value);
                let secondMatrix = JSON.parse(localStorage.getItem('secondMatrix'));
                let row = Array.from(clicked_td.parentNode.parentNode.children).indexOf(clicked_td.parentNode);
                let col = Array.from(clicked_td.parentNode.children).indexOf(clicked_td);
                secondMatrix[row][col] = parseInt(new_td_value);
                localStorage.setItem('secondMatrix', JSON.stringify(secondMatrix));
            } else {
                alert("Invalid input. Please enter a valid number.");
                clicked_td.innerHTML = current_value;
            }
        });
    });
});
