let data = ['cd', 35, 'a', true, 'bss', 453, 3, null, {a: 123}, undefined]
let method = ['boolean', 'number', 'string', 'undefined', 'object', 'null']

function sort(arrayWithData, sortMethod) {
  for (let i = 0; i< arrayWithData.length; i++) {
    arrayWithData[i] === undefined ? arrayWithData[i] = "" : arrayWithData[i]
  }

  arrayWithData.sort((a, b) => {
    if (sortMethod.indexOf(typeof a) === sortMethod.indexOf(typeof b)) {
      return a > b ? 1 : -1;
    }
    if (a === "") {
      return sortMethod.indexOf("undefined") > sortMethod.indexOf(typeof b) ? 1 : -1
    }

    return sortMethod.indexOf(typeof a) > sortMethod.indexOf(typeof b) ? 1 : -1;
  })

  for (let i = 0; i< arrayWithData.length; i++) {
    arrayWithData[i] === "" ? arrayWithData[i] = undefined : arrayWithData[i]
  }
  return arrayWithData;
}

const result = sort(data, method);
console.log(result)
