function linearSearch(searchTerm, arr) {
  let output = undefined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchTerm) {
      output = i
      return output
    }
  }
}

function globalLinearSearch(searchTerm, arr) {
  let indices = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchTerm) {
      indices.push(i)
    }
  }
  return indices
}

module.exports = { linearSearch, globalLinearSearch };
