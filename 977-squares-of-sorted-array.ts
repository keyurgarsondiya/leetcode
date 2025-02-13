function sortedSquares(nums: Array<number>): Array<number> {
  nums.sort((a: number, b: number) => Math.abs(a) - Math.abs(b));
  nums.forEach((num) => num * num);
  return nums;
}
