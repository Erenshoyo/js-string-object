const school = "Safi uddin sarker academy and college";

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// Uppercase: ABCD EFG
// Lowercase: abcd efg

const subject = "Chemistry";
const book = "chemistry";

if (subject.toLowerCase() == book.toLowerCase()) {
  console.log("I am reading chemistry.");
} else {
  console.log("I am not reading chemistry.");
}

// trim() --> to remove white space (start and end, not in between whitespaces).

const drink = "water";
const liquid = "  water  ";

if (drink.trim() == liquid.trim()) {
  console.log("Panir opor nam jibon");
} else {
  console.log("Somudre pani ase khaite pari na");
}
