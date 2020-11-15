module.exports = templateParams => {
  const files = templateParams.htmlWebpackPlugin.files
  const assets = files.js.concat(files.css)
  return `export default ${JSON.stringify(assets)}`
}
