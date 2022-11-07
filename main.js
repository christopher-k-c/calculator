

// Main Variables 
const gridContainer = document.querySelector('.gridContainer');
const calculatorContainer = document.querySelector('.window');
const sideButtonsContainer = document.querySelector('.sideButtons');
const topButtonsContainer = document.querySelector('.topButtons');
const removeNumber = document.getElementById('number')
let allOperators = document.getElementsByClassName('eval')
let currentSum = [];



// Create a 3 by 3 grid of numbers 
const numberGrid = () => {
    for (let index = 9; index >= 0; index--) {
        let cell = document.createElement('button');
        // Append index content of div 
        cell.textContent = index
        cell.setAttribute('id', index)
        cell.classList.add("box", "nums")
        cell.setAttribute("onClick", "evaluationFunctions(this.id)")
        gridContainer.appendChild(cell)

        if(index === 0 ){
            let dot = document.createElement('button');
            dot.textContent = ".";
            dot.setAttribute('id', ".")
            dot.classList.add("box")
            dot.setAttribute("onClick", "evaluationFunctions(this.id)")
            gridContainer.appendChild(dot)
        }  
    }    
}
numberGrid()

// Populate the top and side bar with operator buttons.
const rightOperators = () => {

    const symbols = ["*", "-", "+", "="];

    for(let index = 0; index < symbols.length; index++){
        let cell = document.createElement('button');
        cell.textContent = symbols[index];
        cell.setAttribute('id', symbols[index])
        cell.classList.add("box", "eval")
        cell.setAttribute("onClick", "evaluationFunctions(this.id)")
        sideButtonsContainer.appendChild(cell)   
    }
}
rightOperators()

const topOperators = () =>{

    const symbols = ["AC", "%", "/"];

    for(let index = 0; index < symbols.length; index++){
        let cell = document.createElement('button');
        cell.textContent = symbols[index];
        cell.setAttribute('id', symbols[index])
        cell.classList.add("box", symbols[index], "eval")
        if(symbols[index].match("AC")){
            // sets the AC button to the reset function
            cell.setAttribute("onClick", "resetFunc(this.id)")
        } else {
            // Sets all other buttons to the sum function
            cell.setAttribute("onClick", "evaluationFunctions(this.id)")
        }

        topButtonsContainer.appendChild(cell)
    }
}
topOperators()

function evaluationFunctions(id){

    if(id === "="){
        // If id is equal to "=" convert currentSum array to a string and pass result to returnSum function
        let equation = currentSum.join('');
        console.log(equation)
        currentSum = []
        returnSum(equation)

    } else if (Number(id) == id){
        // Push id to array and set disabled attribute on all operator buttons to false
        currentSum.push(id)
        for(var i = 0; i < allOperators.length; i++) {
            allOperators[i].disabled = false;
            // console.log(allOperators[i])    
        }
        // console.log(id, "number output")

    } else if (Number(id) != id){
        // Push id to array and set disabled attribute on all operator buttons to true
        currentSum.push(id)
        for(var i = 0; i < allOperators.length; i++) {
            allOperators[i].disabled = true;
            // console.log(allOperators[i])    
        }
        // console.log(id, "operator output")
    }

}

function returnSum(equation){
    // returns results to the console
    let sum = eval(equation)

    calculatorContainer.innerHTML = sum
    console.log(sum, "sum")
}

const resetFunc = () => {

    // Reset the equation array 
    currentSum = [];

    // Reset the displayed result to zero
    calculatorContainer.innerHTML = "0"
    console.log(currentSum)
}



