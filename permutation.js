var arr = [];
permutation("ABC");
 
 function permutation(string) {
  printPermutation(string,"");
 }

 function printPermutation(string, permutation) {
  
  if(string.length==0){
   //console.log(permutation);
   arr.push(permutation);
   return;
  }
  
  for (var i = 0; i < string.length; i++) {
   var toAppendToPermutation = string.charAt(i);
   var remaining = string.substring(0, i) + string.substring(i + 1);
   console.log(remaining, permutation + toAppendToPermutation);
   printPermutation( remaining,  permutation + toAppendToPermutation);
  }  
 }
 console.log('****', arr);

 //ABCD
