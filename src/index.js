module.exports = function reverse (n) {
  if (n > 0) {
    let str = n.toString().split('').reverse().join('').toString();
    return Number(str);
  } else {
      let str = n.toString().substr(1).split('').reverse().join('').toString();
      return Number(str);
    }
}
