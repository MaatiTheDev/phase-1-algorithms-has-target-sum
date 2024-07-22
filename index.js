function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
function hasTargetSum(nums, target) {
  let seenNumbers = {};

  for (let num of nums) {
      let complement = target - num;
      if (seenNumbers[complement]) {
          return true;
      }
      seenNumbers[num] = true;
  }

  return false;
}

// Additional test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)); // true
console.log(hasTargetSum([1, 2, 3, 4, 5], 10)); // true
console.log(hasTargetSum([], 5)); // false

