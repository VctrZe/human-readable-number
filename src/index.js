module.exports = function toReadable (number) {
  
  const exceptArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'] 
  const exceptTens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let quotient = Math.trunc(number / 10); 
  let remainder = number % 10;
  let hun = Math.trunc(number / 100);
  let tens = Math.trunc((number % 100) / 10);
  let ones = number % 10;
  let one = Math.floor((number % 100) / 10);
  let teens = (number % 100)

  let result;

  if ((number !== undefined) && (number >= 0)) {
    if (!(number <= 19)) {         
      if ((number % 10) !== 0) {
        if (quotient <= 9) {
          result = exceptTens[quotient] + ' ' + exceptArray[remainder];  // 25 35 45 ..... 95
        }
        else if (one == 1) {   
          result = exceptArray[hun] + ' ' + 'hundred' + ' ' + exceptArray[teens];    // 113 217 712 
        }
        else if (one == 0) { 
          result = exceptArray[hun] + ' ' + 'hundred' + ' ' + exceptArray[ones]; // 705 509 108
        }
        else { result = exceptArray[hun] + ' ' + 'hundred' + ' ' + exceptTens[tens] + ' ' + exceptArray[ones]; } // 745 391  
      }
      else {
        if ((number % 100) == 0 && (number % 10) == 0) {  // 600
          result = exceptArray[number / 100] + ' ' + 'hundred';
          console.log('dddd')
        }
        else if ( hun !== 0 && tens !== 0 && (number % 10) == 0)  {  // 650
          result = exceptArray[hun] + ' ' + 'hundred' + ' ' + exceptTens[tens];
        }
        else { result = exceptTens[quotient] }  //     20
      }
    }
    else { result = exceptArray[number]; }    
  }
  else return ('Enter valid number!'); 

  return result;
}
