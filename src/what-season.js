const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

if (date == null){
  return 'Unable to determine the time of year!'
}
if(date.hasOwnProperty('getMonth')){
  throw new TypeError();
}
if(date.getMonth >= 0 || date.getMonth() < 2 || date.getMonth() == 11){
return 'winter';
}
else if(date.getMonth >= 2 || date.getMonth() < 5){
  return 'spring';
}

else if(date.getMonth >= 5 || date.getMonth() < 8){
  return 'summer';
}
else (date.getMonth >= 8 || date.getMonth() < 11)
{
  return 'autumn';
}

};
