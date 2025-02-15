const sentence = "I am learning web development";

let reverse = "";
for (const letter of sentence) {
  //console.log(letter);
  reverse = letter + reverse;
}
console.log(reverse);

let reverse2 = "";
for (let i; i < sentence.length; i++) {
  //console.log(letter);
  const letter = sentence[i]; 
  reverse2 = letter + reverse2;
}
console.log(reverse);

// Shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);