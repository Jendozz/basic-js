const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;
module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != typeof('') || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY){
    return false;
  }
  
  if (isNaN(Number(sampleActivity)) || Number(sampleActivity) == 0){
    return false;
  }
  
  const RATE = LN2 / HALF_LIFE_PERIOD;
  age = (Math.log(MODERN_ACTIVITY/sampleActivity))/RATE;
  age = Math.ceil(age);
  return age;
};
