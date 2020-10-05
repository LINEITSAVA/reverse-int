module.exports = function reverse (n) {
  var nN = n.toString().split("").reverse().join("");
  var num = parseInt(nN)

  return num;
}
