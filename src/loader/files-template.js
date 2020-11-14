module.exports = templateParams => {
  var files = '[';
  templateParams.htmlWebpackPlugin.files.js.map(function (item, index, arr) {
    files = files + '\'' + item.replace('/', '') + '\'';
    files = index !== arr.length - 1 ? files + ', ' : files;
  });
  files = files + ']';
  return `export default ${files};`;
};
