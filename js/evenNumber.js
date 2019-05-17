export default function evenCounter(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count += 1;
    }
  }
  return count;
}

// OR this

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

// or this

// function evenCounter(...numbers) {
//   let count = 0;

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       count = count + 1;
//     }
//   });

//   return count;
// }
