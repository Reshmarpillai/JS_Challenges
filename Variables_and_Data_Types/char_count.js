// Medium: Create a function that takes a string and returns the count of each character.

function CharCounter(string) {
  CountArray = string.split("");
  console.log(CountArray);
  let CharCount = {};

  CountArray.forEach((item) => {
    if (CharCount[item]) {
      CharCount[item] +=1;
    } else {
      CharCount[item] = 1;
    }
  });
  console.log(CharCount);
}
CharCounter("hello");
