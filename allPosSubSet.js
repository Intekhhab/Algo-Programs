var arr = [];
permutation("ABCD");
 
 function permutation(string) {
  printPermutation(string, "", 0);
 }

 function printPermutation(string, permutation, i) {

  if(permutation.length){
   //console.log(permutation);
   //console.log('remain = ', string);
   arr.push(permutation);
   if (i == 1)
    printPermutation(string, '');
   if (string.length && i > 1) {
    for (var i = 0; i < string.length; i++) {
      printPermutation('', permutation[0] + string.substring(0, i + 1));
    }
   }
   return;
  }

  if (string.length==0) {
    return;
  }

  for (var i = 1; i <= string.length; i++) {
   var toAppendToPermutation = string.substring(0, i);
   var remaining = string.substring(i, string.length);
   printPermutation( remaining, permutation + toAppendToPermutation, i);
  }  
 }
 console.log('****', arr);

 //ABCD
