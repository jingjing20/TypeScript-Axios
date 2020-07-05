// 基础类型 boolean number string null undfined void symbol
let count;
count = 20;

// 对象类型 {} class function []
const funchao = (str: string): number => {
  return parseInt(str, 10);
};

const funcjing: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

console.log(funchao('520'));
console.log(funcjing('5201314'));

// 其他

let temp: number | string = 123; //联合类型
temp = '111';
