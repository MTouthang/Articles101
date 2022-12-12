const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const calculate = (radius, logic) => {
  const output = [];
  for (let index = 0; index < radius.length; index++) {
    output.push(logic(radius[index]));
  }
  return output;
};

console.log(`Area - ${calculate(radius, area)}`);
console.log(`diameter - ${calculate(radius, diameter)}`);
