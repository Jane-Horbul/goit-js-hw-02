function formatString(string, maxLength = 40) {
  let newSequel = [0];
  let newLine = "";
  const sequel = ["..."];
  if (string.length < 40) {
    newLine = string.substr(0, 40);
  } else if (string.length > 40) {
    newSequel = string.substr(0, 40);
    newLine = newSequel.concat(sequel);
  }
  return newLine;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
