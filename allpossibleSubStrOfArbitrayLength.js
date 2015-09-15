/*
Program to print all possible substring of a string of arbitrary length
*/


//var originalStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var originalStr = 'MAISNKS';// This is the original string
var length = 5;// This is the arbitrary length of what you want to make substring
main(originalStr, length);// call main function by passing original string and arbitray length
function main(str, length) {
	if (str.length < length) {// show error and return false if string length is less than arbitray length
		console.log('Provided string is less than the length of what you want to make substring');
		return false;
	}

	subStr('', originalStr, length);
}
function subStr(str, remain, length) {

	if (str.length == length) {
		console.log(str);
		return false;
	}

	for (var i = 0; i < remain.length; i++) {
		var st =  remain.charAt(i);
		var rem = remain.substring(0, i) + remain.substring(i+1);
		subStr(st + str, rem, length);
	}
}