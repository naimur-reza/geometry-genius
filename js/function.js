
//take value from input
function getValueFromInput(id){
    const mainId = document.getElementById(id);
    const inputValueString = mainId.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

//set value function
function setValueInText (id,returnValue){
    const mainId = document.getElementById(id)
    mainId.innerText = returnValue;
}
//set value in formula
function setValueFormula (input1,input2,setValue1,setValue2){
    const formulaA = document.getElementById(input1);
    const formulaB = document.getElementById(input2);
    if(isNaN(setValue1) || isNaN(setValue2)){
        alert("Enter a valid number")
        return;
    }
    formulaA.innerText = setValue1;
    formulaB.innerText = setValue2;
}

//new element adder 
let value = 0;
function newElementAdd (area , areaName){
    const areaContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    let fixedArea = area.toFixed(2);
    value = value + 1;
    tr.innerHTML = `
    <td>${value}</td>
    <td class="pl-2 text-sm w-8">${areaName}</td>
    <td class="px-2 text-sm">${fixedArea}</td>
    <td><button class="btn-primary">Convert to M<sup>2</sup></button></td>
    
    `
    if(isNaN(area)){
        return;
    }
    areaContainer.appendChild(tr);
}

//random color generate

randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}