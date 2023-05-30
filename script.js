// complete the given function

function palindrome(str){
     var word = str.spilit("");
	var firstLetter = word.shift();
	var lastLetter = word.pop();

	if(firstLetter! == lastLetter){
		console.log("false");
	}
	else {
		console.log("true");
	}
}
module.exports = palindrome
