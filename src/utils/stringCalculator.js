export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiters: comma & newline

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEndIndex); // Extract custom delimiter

    // Escape special characters in the delimiter
    const escapedDelimiter = customDelimiter.replace(
      /[-[\]{}()*+?.,\\^$|#\s]/g,
      "\\$&"
    );
    delimiter = new RegExp(escapedDelimiter);

    // Remove the first line from numbers string
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  // Split using dynamic delimiter and convert to numbers
  const numArray = numbers.split(delimiter).map(Number);

  return numArray.reduce((sum, num) => sum + num, 0);
}
