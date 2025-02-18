// function isEnoughCapacity(products, containerSize) {
//     let quantities = Object.values(products);
    
//     let total = 0;
//     for (let quantity of quantities) {
//       total += quantity;
//     }
    
//     return total <= containerSize;
//   }
  
//   console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); 
//   console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); 
//   console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); 
//   console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); 

// const styles = ['jazz','blues'];
// styles.push('rock-n-roll');
// const newEl = styles.indexOf('blues');
// console.log(newEl);
// styles[1] = 'classic';
// console.log(styles);

// function logItems(array) {
// for (let i = 0; i < array.length; i++) {
//     console.log(`${i+1} - ${array[i]}`)
// }
// }
// logItems(styles);


// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
// let sum = 0;
// let lengthOfArr = 0;
// for(let number of arggs)
//     console.log(typeof number);
// if (Number.isInteger(number)) {
//     sum += number;
//     lengthOfArr += 1;
// }
// }
// console.log(sum / lengthOfArr);
// return sum / lengthOfArr;

// caclculateAverage(13, true, 'hello');


// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  if(!Array.isArray(numbers)){
return 'Sory, it is not an array!';
  } 
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
  }
  return min;
}
numbers = [4, 7, 9, 17, 2, 1, 65, 100];
console.log(findSmallestNumber(numbers));