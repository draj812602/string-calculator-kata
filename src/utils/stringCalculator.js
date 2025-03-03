export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiters: comma & newline

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEndIndex);

    // Escape special characters
    const escapedDelimiter = customDelimiter.replace(
      /[-[\]{}()*+?.,\\^$|#\s]/g,
      "\\$&"
    );
    delimiter = new RegExp(escapedDelimiter);

    // Remove the first line from numbers string
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  // Split numbers and convert to integers
  const numArray = numbers.split(delimiter).map(Number);

  // Check for negative numbers
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
