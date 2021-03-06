const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let result = 1;
      let count = 0;
      for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i]))
        {
          count = 1 + this.calculateDepth(arr[i]);
          if(count > result){
            result = count;
          }
        }
      }
      return result;
  };
}
