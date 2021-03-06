const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  chain: [],

  getLength() {
    let length = this.chain.length
    return length;
  },
  addLink(value) {
      this.chain.push(`( ${value} )`)
      return this;
      
  },
  removeLink (position) {
    if (isNaN(position) || !Number.isInteger(position) || position < 0 || position > this.chain.length - 1){
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position -1, 1)
    return this;
  },
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
    let strChain = this.chain.join('~~')
    this.chain = [];
    
  return strChain;
  }
};
module.exports = chainMaker;
