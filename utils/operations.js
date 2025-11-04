export function add(numbers) {
   {return numbers.reduce((sum, num) => sum + num, 0);}
}

export function subtract(numbers) {
  {return numbers.reduce((firstNum, num) => firstNum - num);}
}

export function multiply(numbers) {
  {return numbers.reduce((firstNum, num) => firstNum * num);}
}

export function divide(numbers) {
  {
    if (num ==0) {throw new Error ("cannot divide by zero")}
    return numbers.reduce((firstNum, num) => firstNum / num);
  }
}

