
exports.min = function min (array) {
  if (!array || array.length == 0) {
    return 0;
  }
  else {
     return Math.min(...array);
  }
}

exports.max = function max (array) {
  if (!array || array.length == 0) {
     return 0;
  }
  else {
     return Math.max(...array);
  }
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) {
    return 0;
  }
  else {
    var sum = 0;
    for (var i = 0, j = array.length; i < j; i++) {
        sum += arr[i];
    }
    return sum / array.length;
  }
    
}
