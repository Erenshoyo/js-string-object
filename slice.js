const address = "Borshikura";

const part = address.slice(6, 10);

console.log(part);

const sentence = "I am a good and hardworking person.";
console.log(sentence.split(" "))

const friendstr = 'Rahim, Kahim, Dahim, Fahim, Sahim';
const friends = friendstr.split(',');
console.log(friends);

const realFriend = ['Rahim', 'Kahim', 'Dahim', 'Fahim', 'Sahim'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
