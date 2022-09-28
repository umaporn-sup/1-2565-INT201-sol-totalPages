const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (rowsPerPage === 0 || rowsPerPage === undefined || rowsPerPage === null)
    return 1
  if (arrayItems === null || arrayItems === undefined) return undefined
  return Math.ceil(arrayItems.length / rowsPerPage)
}
module.exports = totalPages
