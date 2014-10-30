/*jslint indent: 2*/
/*global require: true, module: true*/
(function () {
  'use strict';

  module.exports = function (rolledDice, value) {
    var result = [],
      i,
      sorted = rolledDice.sort(function (a, b) {
        return b - a;
      });
    for (i = 0; i < sorted.length && i < (value / 1); i = i + 1) {
      result.push(sorted[i]);
    }
    return result;
  };

}());
