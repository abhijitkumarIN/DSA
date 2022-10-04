import express from 'express'
/**
 * 
 * 
 */
// bianry searching 




const app = express()
app.listen(3011, () => {
  // sorting has been finished 
  const arr = [90, 33, 0, 56, 788];
  var random = "abbijeekuamr9013&@*@(@(~@##92392abhwqlkgmnsvc#$%&!";

  // suffle algorithm has been finshed 
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomeIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomeIndex]] = [array[randomeIndex], array[i]];

    }
    return array;
  }
// palidrom checker has been finished ;
var abhijeet ="abhijeetright now "
console.log(abhijeet.charAt(9) , Math.random(8, 8)*16);
  console.log(shuffleArray(arr) , 'iti suffle array ');

})