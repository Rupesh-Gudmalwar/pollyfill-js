"use strict";

export function polyFilter(cbFunction) {
  Array.prototype.myFilter = function (cbFunction) {
    const outputArray = [];

    for (let i = 0; i < this.length; i++) {
      if (cbFunction(this[i])) {
        outputArray.push(this[i]);
      }
    }
    return outputArray;
  };
}

// module.export = polyFilter;
