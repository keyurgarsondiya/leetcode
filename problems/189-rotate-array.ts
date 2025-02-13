import { displayArray } from './display-array';

const reverseArray = (arr: number[], start: number, end: number) => {
  while (start < end) {
    // [arr[start], arr[end]] = [arr[end], arr[start]];
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

export function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;

  reverseArray(nums, 0, n - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, n - 1);

  displayArray<number>(nums);
}
