module.exports = templateParams => {
  let files = '['
  templateParams.htmlWebpackPlugin.files.js.forEach(function (item, index, arr) {
    files = files + '\'' + item.split('../').join('') + '\''
    files = index !== arr.length - 1 ? files + ', ' : files
  })
  files = files + ']'
  return `export default ${files}`
}
