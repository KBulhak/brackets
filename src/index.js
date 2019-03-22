module.exports = function check(str, bracketsConfig) {
  
    let stack = [];
    str.split('').forEach(element => {
      if (stack.length > 0 && searchForKeyValue(stack[stack.length -1], bracketsConfig) ==  element) {
        stack.pop();
        return;
      }
      stack.push(element);
    });
    return stack.length == 0;

  function searchForKeyValue(key, bracketsConfig) {
     let result = bracketsConfig.find(element => element[0]==key);
    return result ? result[1]:null;
  }
}


    