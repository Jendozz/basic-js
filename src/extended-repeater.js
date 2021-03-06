const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strResult = '';
  if (options.separator == undefined){
    options.separator = '+';
  }
  if (options.additionSeparator == undefined){
    options.additionSeparator = '|'
  }
 
  if (options.additionRepeatTimes == undefined && options.addition != undefined){
    options.additionRepeatTimes = 1;
  }
  if( options.repeatTimes != undefined && options.repeatTimes > 0){
    for ( let i = 0; i < options.repeatTimes; i++)
    {
      strResult += str;
        for(let k = 0; k < options.additionRepeatTimes; k++){
        strResult += options.addition;
        if(k < options.additionRepeatTimes - 1 && options.additionRepeatTimes > 0)
        strResult += options.additionSeparator
        }
        if(i < options.repeatTimes -1){
        strResult += options.separator
        }
      }
    }
    else if (options.repeatTimes == undefined ){
      strResult+=str;
      if (options.addition != undefined){
      strResult+=options.addition;
      }
    }
  return strResult; 

};
  