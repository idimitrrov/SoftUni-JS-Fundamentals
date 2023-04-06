/*  03 - Extract File https://judge.softuni.org/Contests/Practice/Index/1706#0

Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension.

*/

function extractFile(string) {
  let fileNameStart = string.lastIndexOf("\\") + 1;
  let fileNameEnd = string.lastIndexOf(".") + 1;
  console.log(`File name: ${string.slice(fileNameStart, fileNameEnd - 1)}`);
  console.log(`File extension: ${string.slice(fileNameEnd)}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
