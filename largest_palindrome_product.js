/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var numbahsHere = [];

  function createReverseString(str){
    return str.split('').reverse().join('');
  }


  function palindromeCheck(){
    for (var i = 9801; i >= 10; i--) {
      // var possibleNumber = i;
      var strNum = i.toString();
      var reversedString = createReverseString(strNum);
      if(strNum === reversedString){
        numbahsHere.push(strNum);
      }
    }
  }
  palindromeCheck();
  console.log(numbahsHere);



  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};