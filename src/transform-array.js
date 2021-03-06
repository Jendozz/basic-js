const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new TypeError();
   }

  let arrCopy = arr.slice()
  let result = [];
  let flag = false;
  for (let i = 0; i < arrCopy.length; i++){
     if (arrCopy[i] == "--discard-next"){
      arrCopy = discardNext(arrCopy, i);
      result = arrCopy;
      flag = true;
    }
    else if(arrCopy[i] == "--discard-prev"){
      arrCopy = discardPrev(arrCopy, i);
      result = arrCopy;
      flag = true;
    }
    else if(arrCopy[i] == "--double-next"){
      arrCopy = doubleNext(arrCopy, i);
      result = arrCopy;
      flag = true;
    }
    else if(arrCopy[i] == "--double-prev"){
      arrCopy = doublePrev(arrCopy, i);
      result = arrCopy;
      flag = true
    }

  }
  if (flag == false)
  {
    return arr;
  }
  else{
    result = cleanArr(result);
    return result
  }
 
  
}


function discardNext(arrfunc, i){
  if(i != arrfunc.length - 1 && arrfunc[i+1] != null){
    arrfunc.splice(i, 1)
    arrfunc[i] = null;
  }
  else{
    arrfunc.splice(i, 1)
  }
  
return arrfunc;
}


function discardPrev(arrfunc, i){
  if (i != 0 && arrfunc[i-1] != null){
    arrfunc.splice(i,1)
    arrfunc[i-1] = null
  }
  else{
    arrfunc.splice(i,1)
  }
  
return arrfunc;
}

function doubleNext(arrfunc, i){
  if(i != arrfunc.length - 1 && arrfunc[i+1] != null){
    arrfunc.splice(i, 1)
    arrfunc.splice(i, 0 , arrfunc[i])
  }
  else{
    arrfunc.splice(i,1)
  }
  return arrfunc;
}

function doublePrev(arrfunc, i){
  if (i != 0 && arrfunc[i-1] != null){
    arrfunc.splice(i,1)
    arrfunc.splice(i, 0, arrfunc[i-1])
  }
  else{
    arrfunc.splice(i, 1)
  }

return arrfunc;
}

function cleanArr(resultArr){
  let clArr = []
  for(let k = 0; k < resultArr.length; k++){

    if (resultArr[k] != null){
      clArr.push(resultArr[k])
    }
    else{
      continue;
    }
  }
  return clArr;
}
