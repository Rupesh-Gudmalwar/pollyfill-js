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

// const myReduce = function (cbFunction, initialDataType) {
Array.prototype.myReduce = function (cbFunction, initialDataType) {
  // const newDT = Array.isArray(initialDataType);
  // const output = new Array();
  // console.log(newDT);
  // return { newDT, output };

  const output = [];

  
  for (let i = 0; i < this.length; i++) {
    output.push(this(output, this[i]));
  }

  return output;
};

const arr = [1, 2, 3, 4];
const asd = arr.reduce((acc, curr) => {
  return (acc = [...acc, curr * 2]);
}, []);
const asd2 = arr.reduce((acc, curr) => {
  return (acc = [...acc, curr * 2]);
}, []);

console.log("asd", asd, asd2);
