"use strict";

const MIN_NUMBER = 1;
const MAX_NUMBER = 100000;

function solution(x, y) {
  if (
    x >= MIN_NUMBER &&
    x <= MAX_NUMBER &&
    y >= MIN_NUMBER &&
    y <= MAX_NUMBER
  ) {
    const getResultY = (y * (y + 1)) / 2;
    let sum = 0;
    let z = y;
    for (let i = 0; i < x - 1; i++) {
      sum += z++;
    }
    const id = String(getResultY + sum);
    return id;
  } else {
    throw new Error("Should be from 1 to 100000");
  }
}

console.log(solution(1, 1)); // 1
console.log(solution(3, 2)); // 8
console.log(solution(2, 3)); // 9
console.log(solution(10, 5)); // 96
