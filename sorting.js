let data = ['cd', true, null, undefined, "snfso", 35, false,'a', true, true, false, 'bss', 453, 3, null, {a: 123}, undefined]
let method = ['undefined', 'boolean', 'number', 'null', 'string', 'object']

function sort(arrayWithData, sortMethod) {
  const undef = {};

  function helper(a) {
    if (a === null) {
      return "null";
    } 
    if (a === undef) {
      return "undefined";
    } else {
      return typeof a;
    }
  }

  const newArray = arrayWithData.map(element => {
    return element === undefined ? element = undef : element;
  })
  .sort((a, b) => {
    if (sortMethod.indexOf(helper(a)) === sortMethod.indexOf(helper(b))) {
      if (helper(a) && helper(b) === "boolean") {
        return a ? -1 : 1;
      }
      return a > b ? 1 : -1;
    }
    return sortMethod.indexOf(helper(a)) > sortMethod.indexOf(helper(b)) ? 1 : -1;
    })
  .map(element => {
    return element === undef ? element = undefined : element;
    })
    
  return newArray;
}

const result = sort(data, method);
console.log(result)
