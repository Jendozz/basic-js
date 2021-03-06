const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  turns = 2**disksNumber - 1;
  oneTurnInSec = 1/(turnsSpeed/3600);
  seconds = turns * oneTurnInSec;
  seconds = Math.floor(seconds);
  let hanoi ={
    turns: turns,
    seconds: seconds,
  }
  return hanoi;
};
