function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0; 
  for (let item of array) {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      sum += sumItems(item);
    } else {
      sum += item;
    }
  }
  return sum;
}

module.exports = sumItems;