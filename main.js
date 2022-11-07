

// Main Variables 
const gridContainer = document.querySelector('.gridContainer');
const calculatorContainer = document.querySelector('.window');
const sideButtonsContainer = document.querySelector('.sideButtons');
const topButtonsContainer = document.querySelector('.topButtons');
let allOperators = document.getElementsByClassName('eval')
let currentSum = [];


// Create a 3 by 3 grid of numbers 
const numberGrid = () => {

    for (let index = 9; index >= 0; index--) {
        let cell = document.createElement('button');
        // Append index content of div 
        cell.textContent = index
        cell.setAttribute('id', index)
        cell.classList.add("box", "nums", "btn", "btn-warning")
        cell.setAttribute("onClick", "evaluationFunctions(this.id)")
        gridContainer.appendChild(cell)

        if(index === 0 ){
            let dot = document.createElement('button');
            dot.textContent = ".";
            dot.setAttribute('id', ".")
            dot.classList.add("box", "btn", "btn-warning")
            dot.setAttribute("onClick", "evaluationFunctions(this.id)")
            gridContainer.appendChild(dot)
        }  
    }    

}

numberGrid()

// Populate the top bar with operator buttons.
const rightOperators = () => {

    const symbols = ["*", "-", "+", "="];

    for(let index = 0; index < symbols.length; index++){
        let cell = document.createElement('button');
        cell.textContent = symbols[index];
        cell.setAttribute('id', symbols[index])
        cell.classList.add("box", "eval", "btn", "btn-warning")
        cell.setAttribute("onClick", "evaluationFunctions(this.id)")
        sideButtonsContainer.appendChild(cell)   
    }

}

rightOperators()

// Populate the right-hand-side bar with operator buttons.
const topOperators = () =>{

    const symbols = ["AC", "%", "/"];

    for(let index = 0; index < symbols.length; index++){
        let cell = document.createElement('button');
        cell.textContent = symbols[index];
        cell.setAttribute('id', symbols[index])
        cell.classList.add("box", symbols[index], "eval", "btn", "btn-warning")
        if(symbols[index].match("AC")){
            // sets the AC button to the reset function
            cell.setAttribute("onClick", "resetFunc(this.id)")
            cell.classList.remove("eval")
        } else {
            // Sets all other buttons to the sum function
            cell.setAttribute("onClick", "evaluationFunctions(this.id)")
        }
        topButtonsContainer.appendChild(cell)
    }

}

topOperators()


const clearFunc = (DisableStatus) => {

    // Stops operator buttons being placed into the currentSum array alongside each other
    for(var i = 0; i < allOperators.length; i++) {
        // if(allOperators[i].match())
        allOperators[i].disabled = DisableStatus ? true : false;  
    }

}

// Stops user from passing an operator into the equation function 
// before the currentSum array contains a number 
if(currentSum.length <= 0){

    clearFunc(true)

}

function evaluationFunctions(id){

    if (id === "="){
        // If id is equal to "=" convert currentSum array to a string and pass result to returnSum function
        let equation = currentSum.join('');
        console.log(equation)
        currentSum = []
        returnSum(equation)

    } else if (Number(id) == id){
        // Push id to array and set disabled attribute on all operator buttons to false
        currentSum.push(id)
        calculatorContainer.innerHTML = currentSum.join("");
        clearFunc(false)

        // console.log(id, "number output")

    } else if (Number(id) != id){
        // Push id to array and set disabled attribute on all operator buttons to true
        currentSum.push(id)
        calculatorContainer.innerHTML = currentSum.join("");
        clearFunc(true)
        // console.log(id, "operator output")
    }

}

function returnSum(equation){

    // returns results to the console
    let sum = eval(equation)
    // currentSum = String(sum)
    calculatorContainer.innerHTML = sum
    clearFunc(true)
    console.log(sum, "sum")

}

const resetFunc = () => {

    // Reset the equation array 
    currentSum = [];
    // Reset the displayed result to zero
    calculatorContainer.innerHTML = "0"
    console.log(currentSum)

}





// Animations 


// var tl = new TimelineMax({
//     paused:true
//   });
//   // letter animation
//   tl.fromTo("h1", 8, {
//     width: "0",
//   }, {
//     width: "20.18em", /* same as CSS .line-1 width */
//     ease:  SteppedEase.config(37)
//   }, 0);
//   // text cursor animation
//   tl.fromTo("h1", 0.5, {
//     "border-right-color": "rgba(255,255,255,0.75)"
//   }, {
//     "border-right-color": "rgba(255,255,255,0)",
//     repeat: -1,
//     ease:  SteppedEase.config(37)
//   }, 0);
  
//   tl.play();



