let data = ['sdf', 35, 'a', true, 'nsu', 453, 3, null, {a: 123}, undefined]
let method = ['boolean', 'number', 'string', 'undefined', 'object', 'null']

function sort(arrayWithData, sortMethod) {
  return arrayWithData.sort((a, b) => {
    if (sortMethod.indexOf(typeof a) === sortMethod.indexOf(typeof b)) {
      return a - b;
    }
    return sortMethod.indexOf(typeof a) > sortMethod.indexOf(typeof b) ? 1 : -1;
  })
}

const result = sort(data, method);
console.log(result)