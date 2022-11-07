

// Main Variables 
const gridContainer = document.querySelector('.gridContainer');
const calculatorContainer = document.querySelector('.window');
const sideButtonsContainer = document.querySelector('.sideButtons');
const topButtonsContainer = document.querySelector('.topButtons');
const removeNumber = document.getElementById('number')

let currentSum = [];

// const calculator = (operator,x,y) => {
//     // Return error message if operator parameters contain, letters, spaces...
//     // Have to use backslash on the minus/hyphen; escaping it. 
//     // Otherwise the hyphen is not registered as a symbol you want to sort by.
//     const regex = /[|+|\-|*|/|%|]/g;
//     //  If parameter contains anything other the operators in the regex string return error
//     if(!operator.match(regex)){
//         return "Error, you have not entered a valid operator";
//     } else {
//         // Evaluate the equation 
//         let sum = eval(`${x}${operator}${y}`)
//         let newDivOne = document.createElement('div');
//         newDivOne.setAttribute('id', "number")
//         newDivOne.textContent = sum;
//         calculatorContainer.appendChild(newDivOne)
//     }       
// }
// calculator('+',2.5,2.5)

// Create a 3 by 3 grid of numbers 
const numberGrid = () => {
    for (let index = 9; index >= 0; index--) {
        let cell = document.createElement('button');
        // Append index content of div 
        cell.textContent = index
        cell.setAttribute('id', index)
        cell.classList.add("box", "nums")
        cell.setAttribute("onClick", "myFunc(this.id)")
        gridContainer.appendChild(cell)

        if(index === 0 ){
            let dot = document.createElement('button');
            dot.textContent = ".";
            dot.setAttribute('id', 10)
            dot.classList.add("box")
            dot.setAttribute("onClick", "myFunc(this.id)")
            gridContainer.appendChild(dot)
        }  
    }    
}
numberGrid()



function myFunc(id){

    if(id === "="){
        let equation = currentSum.join('');
        console.log(equation)
        test(equation)
    } else {
        currentSum.push(id)
    }
}

function test(equation){
    let sum = eval(equation)
    // console.log(eval(equation), "log")
    // let sum = eval(equation)
    console.log(sum, "sum")
}





// Populate the top and side bar with operator buttons.
const rightOperators = () => {

    const symbols = ["x", "-", "+", "="];

    for(let index = 0; index < symbols.length; index++){
        let cell = document.createElement('button');
        cell.textContent = symbols[index];
        cell.setAttribute('id', symbols[index])
        cell.classList.add("box")
        cell.setAttribute("onClick", "myFunc(this.id)")
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
        cell.classList.add("box", symbols[index])
        cell.setAttribute("onClick", "myFunc(this.id)")
        topButtonsContainer.appendChild(cell)
    }
}
topOperators()









// $(".nums").click(function(){
//     calculator('+',2.5,2.5)
//     console.log(event.target.id, )
// })

// $(".AC").click(function(){
//     removeNumber.remove()
// })
 
