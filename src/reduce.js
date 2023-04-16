Array.prototype.myReduce = function (cbFunction, initialValue) {
  const output = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (output !== undefined) {
      output = cbFunction(this[i]);
    } else {
      output = this[i];
    }
  }
};

const arr = [1, 2, 4];

const asd = arr.reduce((acc, curr) => {
  return (acc = curr * acc);
}, []);

const asd2 = arr.myReduce((acc, curr) => {
  return (acc = curr * acc);
}, []);

console.log(asd, asd2, "asdas");
