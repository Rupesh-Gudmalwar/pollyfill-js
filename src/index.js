"use strict";

import { polyFilter } from "./filter.js";

function pollyfils() {
  const pollyMapper = (cbFunction) => {
    return (Array.prototype.pollyMap = function (cbFunction) {
      const outputArray = [];
      for (let i = 0; i < this.length; i++) {
        outputArray.push(cbFunction(this[i], i, this));
      }
      return outputArray;
    });
  };
  polyFilter(); //function which is invoked will add new prototype of Array.
}
