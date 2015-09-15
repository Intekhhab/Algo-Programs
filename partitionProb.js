function isSubsetSum ( arr,  n,  sum) {
  //console.log(arr, n, sum);
  console.log('Sum = ', sum);
  //console.log(arguments[3]);
   // Base Cases
   if (sum == 0) {
     /*for (var i = 0; i < n; i++) {
      console.log(arr[i]);
     }*/
     return true;
   }
   if (n == 0 && sum != 0)
     return false;
 
   // If last element is greater than sum, then ignore it
   if (arr[n-1] > sum)
     return isSubsetSum (arr, n-1, sum, 'last elemtn is greater than sum');
 
   /* else, check if sum can be obtained by any of the following
      (a) including the last element
      (b) excluding the last element
   */
   return isSubsetSum (arr, n-1, sum, 'firstOrfunction') || isSubsetSum (arr, n-1, sum-arr[n-1], 'secondOrFucntion');
}
 
// Returns true if arr[] can be partitioned in two subsets of
// equal sum, otherwise false
function findPartiion ( arr,  n) {
    // Calculate sum of the elements in array
    var sum = 0;
    for ( i = 0; i < n; i++)
       sum += arr[i];
 
    // If sum is odd, there cannot be two subsets with equal sum
    if (sum%2 != 0)
       return false;
 
    // Find if there is subset with sum equal to half of total sum
    return isSubsetSum (arr, n, sum/2, 'firstTime');
}
 
// Driver program to test above function
function main() {
   var arr = [1, 3, 6, 4, 2];
   var n = arr.length;
  if (findPartiion(arr, n) == true)
     console.log("Can be divided o two subsets of equal sum");
  else
     console.log("Can not be divided o two subsets of equal sum");
}
main();