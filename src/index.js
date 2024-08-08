module.exports = function towelSort (matrix) {
  if (matrix) {
    arr = []
    matrix = matrix.map((el, index) => (index % 2 != 0) ? el.reverse() : el)
    matrix.forEach(el => {
      for (let i = 0; i < el.length; i++) {
        arr.push(el[i])
      }
    })
    return arr
  } else {
    return [];
  }
}
