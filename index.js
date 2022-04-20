function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    // console.log(i)
    // console.log(word[i])
    const j = word.length - 1 - i;
    // console.log(j)
    if (word[i] !== word[j]) return false;
  }
  return true;
}
isPalindrome('racecar')
/* 
  Add your pseudocode here.
  Iterate over the data set with a for loop
    If data(i)=data(-i)
    return data

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
