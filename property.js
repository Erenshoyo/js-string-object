const person = {
    name: 'Tauhid',
    age: 23,
    profession: 'সার্টিফাইড বেকার',
    salary: 'বেকারের আবার বেতন!!!',
    married: false,    
    'fav places':['Bandorban', 'Saint-martin', 'Kuakata']
}

// dot notation --> ডট দিয়ে অবজেক্টের প্রোপার্টি এর ভ্যালু এক্সেস করা
console.log(person.name);
const income = person.salary;
console.log(income);

// bracket notation --> থার্ড ব্র্যাকেট দিয়ে এক্সেস করা।
console.log(person['age']);
const age = person['age'];
console.log(age);
console.log(person['fav places']);
