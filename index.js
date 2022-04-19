console.log("working");

//Q1.
let studentRecords = [{ name: "Radha", id: 123, marks: 90 },
    { name: "Krishna", id: 103, marks: 33 },
    { name: "Balram", id: 204, marks: 77 },
    { name: "Vishnu", id: 155, marks: 85 }
];

let arr = studentRecords.map(x => x.name.toUpperCase());
console.log(arr);


//Q2.

let arr1 = studentRecords.filter(x => x.marks > 50);
console.log(arr1);

//Q3.
let arr2 = studentRecords.filter((x) => x.marks > 50 && x.id > 120);
console.log(arr2);

//Q4.

let arr3 = studentRecords.reduce((accu, curr) => accu + curr.marks, 0);
console.log(arr3);

//Q5.
let arr4 = studentRecords.filter(x => x.marks > 50);
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i].name);
}

//Q6.
let arr5 = studentRecords.filter(x => x.id > 120);
let arr6 = arr5.reduce((accu, curr) => accu + curr.marks, 0);
console.log(arr6);

//Q7.

for (let x of studentRecords) {
    if (x.marks < 50) {

        x.marks = x.marks + 15;
    }
}

let arr7 = studentRecords.filter(x => x.marks > 50);
let arr8 = arr7.reduce((accu, curr) => accu + curr.marks, 0);
console.log(arr8);


//Q8.

let student1 = {
    name: "Vishal; singh",
    class: 12,
    roll_no: 2022101
}

let student2 = {
    name: "Anand singh",
    class: 12,
    roll_no: 2022102
}
let student3 = {
    name: "Rahul Singh",
    class: 12,
    roll_no: 2022103
}

let student4 = {
    name: "Abhishek singh",
    class: 11,
    roll_no: 2022104
}
let student5 = {
    name: "Ankit Singh",
    class: 11,
    roll_no: 2022105
}

let student6 = {
    name: "Aman singh",
    class: 11,
    roll_no: 2022106
}
let student = [{...student1 }, {...student2 }, {...student3 }, {...student4 }, {...student5 }, {...student6 }];
console.log(student);