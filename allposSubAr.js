var res = [];
var givenArray = [1, 2, 3, 4];
permutation(givenArray);
 
 function permutation(arr) {
  printPermutation(arr, [], 0);
 }

 function printPermutation(arr, permutation, i) {

  if(permutation.length){
   //console.log(arr, permutation);return;
   var arr3 = arr.slice.call(arr);
   res.push(permutation);
   if (i == 1)
    printPermutation(arr3, []);
   if (arr3.length && i > 1) {
    
    for (var i = 0; i < arr3.length; i++) {
      var arr4 = arr3.slice.call(arr3);
      printPermutation([], [permutation[0]].concat(arr4.splice(0, i + 1)));
    }
   }
   return;
  }

  if (arr.length==0) {
    return;
  }

  for (var i = 1; i <= arr.length; i++) {
   var arr2 = arr.slice.call(arr);
   var toAppendToPermutation = arr2.splice(0, i);
   var remaining = arr2;
   printPermutation( remaining, permutation.concat(toAppendToPermutation), i);
  }  
 }
 console.log('****', res);
 var totalSum = 0;
 for (var i = 0; i < givenArray.length; i++) {
  totalSum += givenArray[i];
 }
 var sum;
 for (var i = 0; i < res.length; i++) {
  sum = 0;
  for (var j = 0; j < res[i].length; j++) {
    sum += res[i][j];
  }
  if (sum == totalSum/2) {
    console.log('can be devvided into two parts', res[i]);
    var other = [];
    console.log('second array is ', other);
    break;
  }
 }

 //ABCD
