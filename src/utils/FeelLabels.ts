export function feelLabels(time:number): number[]{
  const arr = []
  for (let i = 0; i < time; i++) {
    arr.push(i+1)
  }
  return arr;
}