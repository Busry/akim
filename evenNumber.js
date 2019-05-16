let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function evenCounter(...numbers) {
  let count = 0;

  numbers.forEach(number => {
    if (number % 2 === 0) {
      count = count + 1;
    }
  });

  return count;
}

let counted_even = evenCounter(...numbers);
console.log(counted_even);
console.log(evenCounter(2, 4, 3, 6, 7, 8, 9, 10));

// or this

// function evenCounter(numbers) {
//  let count = 0;

//  numbers.forEach(number => {
//   if (number % 2 === 0) {
//    count = count + 1;
//   }
//  });

//  return count;
// }

// let counted_even = evenCounter(numbers);
// console.log(counted_even);
