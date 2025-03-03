export function add(numbers) {
  if (numbers === "") return 0;

  // Replace new lines (\n) with commas (,) before splitting
  const numArray = numbers.replace(/\n/g, ",").split(",").map(Number);

  return numArray.reduce((sum, num) => sum + num, 0);
}
