//triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
  const firstValue = getValueFromInput("triangle-first");
  const secondValue = getValueFromInput("triangle-second");
  const area = 0.5 * firstValue * secondValue;
  setValueFormula("tri-a", "tri-b", firstValue, secondValue);
  //add new element to area
  newElementAdd(area, "Triangle");
});



//rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const firstValue = getValueFromInput("rectangle-first");
  const secondValue = getValueFromInput("rectangle-second");
  const area = firstValue * secondValue;
  setValueFormula("rec-a", "rec-b", firstValue, secondValue);
  newElementAdd(area, "Rectangle");
});



//parallelogram calculation
document
  .getElementById("para-btn")
  .addEventListener("click", function () {
    const firstValue = getValueFromInput("para-first");
    const secondValue = getValueFromInput("para-second");
    const area = firstValue * secondValue;
    setValueFormula("par-a", "par-b", firstValue, secondValue);
    newElementAdd(area, "Parallelogram");
  });



//rhombus calculation
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const firstValue = getValueFromInput('rhombus-first');
    const secondValue = getValueFromInput('rhombus-second');
    const area = 0.5 * firstValue * secondValue;
    setValueFormula('rom-a','rom-b',firstValue,secondValue);
    newElementAdd(area, "Rhombus");

})


//pentagon calc
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const firstValue = getValueFromInput('pentagon-first');
    const secondValue = getValueFromInput('pentagon-second');
    const area = 0.5 * firstValue * secondValue;
    setValueFormula('pen-a','pen-b',firstValue,secondValue);
    newElementAdd(area, "Pentagon");

})


//ellipse calc
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const firstValue = getValueFromInput('ellipse-first');
    const secondValue = getValueFromInput('ellipse-second');
    const area = 3.1416 * firstValue * secondValue;
    setValueFormula('ell-a','ell-b',firstValue,secondValue);
    newElementAdd(area, "Ellipse");

})


//blog button 

document.getElementById('blog').addEventListener('click',function(){
window.location.href = 'blog.html'
})
