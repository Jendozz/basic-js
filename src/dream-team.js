const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == null){
    return false
  }
  str = "";
  for (let i = 0; i < members.length; i++){
    if (typeof(members[i]) == typeof(""))
    {
      let arr = members[i].split("")
      for (let k = 0; k < arr.length; k++)
      {
        if (arr[k] != " ")
        {
          str += arr[k]
          break;
        }
      }
    }
  }
  str = str.toUpperCase();
  if (str.length == 0){
    return false;
  }
  else{
    let result = str.split('').sort().join('');
    return result;
  }
};
