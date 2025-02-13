import { displayArray } from './display-array';

export function sortedSquares(nums: Array<number>): Array<number> {
  const n = nums.length;
  const result: number[] = new Array(n);
  let left = 0;
  let right = n - 1;
  let index = n - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }

  displayArray<number>(result);

  return result;
}
