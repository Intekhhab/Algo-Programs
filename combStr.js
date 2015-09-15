var originalStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var originalStr = 'MAISNKS';
var length = 5;
subStr('', originalStr, length);
function subStr(str, remain, length) {

	if ((str+remain).length < length) {
		console.log('here');
		return false;
	}

	if (str.length == length) {
		console.log(str);
		return false;
	}

	for (var i = 0; i < remain.length; i++) {
		var st =  remain.charAt(i);
		var rem = remain.substring(0, i) + remain.substring(i+1);
		//console.log(st);
		subStr(st + str, rem, length);
	}
}