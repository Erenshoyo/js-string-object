const college = {
    name: 'GSC',
    class: ['11', '12'],
    events: ['science fair', 'victory day'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(college.unique.color);
console.log(college.unique.result.merit);
college.events[1] = '16th December'
console.log(college.events[1]);

delete college.class;
console.log(college);

