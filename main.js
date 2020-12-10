function calculator(x, y){
  this.x = x;
  this.y = y;
};


calculator.prototype.addition = function() {
  return  this.x + this.y;
};
calculator.prototype.difference = function() {
  return  this.x - this.y;
};
calculator.prototype.division = function() {
  return  this.x / this.y;
};
calculator.prototype.product = function() {
  return  this.x * this.y;
};
calculator.prototype.module = function() {
  return  this.x % this.y;
};
calculator.prototype.power = function() {
  return  this.x ** this.y;
};

let calculation;


calcForm.onsubmit = (evt) => {
  evt.preventDefault();

  let elinputX = Number(inputX.value);
  let elSelectOperation = selectOperation.value;
  let elinputY= Number(inputY.value);
  let elResult = solution;

  if (elinputY === 0) {
    alert('Be carefull. Fill field truly')
  }

  calculation = new calculator(elinputX,elinputY);

  switch (elSelectOperation) {
    case 'addition':
      console.log(calculation.addition());
      elResult.textContent = calculation.addition();
      break;
    case 'division':
      console.log(calculation.division());
      elResult.textContent = calculation.division();
      break;
    case 'product':
       console.log(calculation.product());
       elResult.textContent = calculation.product();
      break;
    case 'difference':
      console.log(calculation.difference());
      elResult.textContent(calculation.difference());
      break;
    case 'module':
      console.log(calculation.module());
      elResult.textContent = calculation.module();
      break;
    case 'power':
      console.log(calculation.power());
      elResult.textContent = calculation.power();
      break;
  };

};
