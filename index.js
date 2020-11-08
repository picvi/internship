let data = ['cd', 35, 'a', true, 'bss', 453, 3, null, {a: 123}, undefined]
let method = ['boolean', 'number', 'string', 'undefined', 'object', 'null']

function sort(arrayWithData, sortMethod) {
  const undef = {};

    const newArray = arrayWithData.map(element => {
      return element === null ?  'null' : element === undefined ? element = undef : element;
    })
    .sort((a, b) => {
      if (a === 'null') {
        return sortMethod.indexOf('null') > sortMethod.indexOf(typeof b) ? 1 : -1;
      }
      if (a === undef) {
        return sortMethod.indexOf('undefined') > sortMethod.indexOf(typeof b) ? 1 : -1;
      }
      return sortMethod.indexOf(typeof a) > sortMethod.indexOf(typeof b) ? 1 : -1;
    })
    .map(element => {
      return element === 'null' ? null  : element === undef ? element = undefined : element;
    })
    
  return newArray;
}

const result = sort(data, method);
console.log(result)
