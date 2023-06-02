// complete t given function
function checkPalindrome(str) {
	str=str.toLowerCase();
  return str == str.split('').reverse().join('');
}
module.exports = palindrome
