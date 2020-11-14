module.exports = templateParams => {
  let files = '['
  templateParams.htmlWebpackPlugin.files.js.forEach((item, index, arr) => {
    const last = index === arr.length - 1
    files = files + `'${item}'${!last ? ', ' : ''}`
  })
  files = files + ']'
  return `export default ${files}`
}
