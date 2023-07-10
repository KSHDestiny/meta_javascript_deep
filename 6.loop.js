// * while
// while(condition){        // condition -> statement
//     statement;
// }

var num = 1;

console.log("%cThis is while loop.", "color: red");
while (num <= 10) {
  console.log(num);
  num++;
} // 12345678910

// first loop // 1   // 1+1 = 2
// second loop // 2 // 2+1=3
// third loop // 3 // 3+1 = 4
//...
// final loop // 10 // 10+1 = 11

num = 10;
while (num >= 0) {
  console.log(num);
  num--;
} // 109876543210

num = 5;
while (num < 100) {
  console.log(num);
  num += 5;
} // 5101520253035404550556065707580859095
console.log("<br>");

// * do while
// do {                 // first loop -> condition -> statement
//     statement;
// }while(condition)

num = 100;
do {
  console.log(num);
  num++;
} while (num <= 10); // 100

// * for
// for(declare; condition; increment/decrement){
//     statement;
// }

console.log("%cThis is for loop.", "color: red");
num = 0;
for (i = 10; i > num; i--) {
  console.log(i); // 10987654321
}

var fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grape",
  "Pineapple",
  "Lemon",
  "Lime",
];
for (i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]); // Lime Lemon Pineapple Grape Orange Banana Apple
}

// * for of
// ! for of cannot be used on object directly since objects are not iterable
// for(parameter of array){     array[] -> parameter
//     statement;
// }
console.log("%cThis is for-of loop.", "color: red");
for (fruit of fruits) {
  console.log(fruit); // Apple Banana Orange Grape Pineapple Lemon Lim)e
}

// associative array
var users = [
  { name: "Aung Aung", age: 21, job: "designer" },
  { name: "Hla Hla", age: 24, job: "teacher" },
  { name: "Tun Tun", age: 22, job: "developer" },
];

for (user of users) {
  console.log(user["name"] + " is " + user["age"] + " years old.");
}

// ! for of can be used on object via Object.keys(obj)
var aboutMe = {
  name: "Destiny",
  age: 23,
  job: "Developer",
};
for (info of Object.keys(aboutMe)) {
  console.log(`My ${info} is ${aboutMe[info]}.`);
}

console.log(
  Object.keys(aboutMe), // ['name','age','job']
  Object.values(aboutMe), // ['Destiny',23,'Developer']
  Object.entries(aboutMe) // [['name','Destiny'],['age',23],['job','Developer']]
);

// * for in
console.log("%cThis is for-in loop.", "color: red");

var user = { name: "Aung Aung", age: 21, job: "designer" };
for (key in user) {
  console.log(key + " is " + user[key]);
}

// * break / continue
console.log("%cThis is break & continue.", "color: red");

num = 10;

for (i = 0; i < num; i++) {
  if (i == 5) continue;
  if (i == 8) break;
  console.log(i); // 0123467
}

// * skiped index
array = [];
array[0] = 0;
array[2] = 2;
array[4] = 4;
array[10] = 10;

for (item of array) {
  console.log(item);
}

// * nested loop
console.log("%cThis is nested loop.", "color: red");

storedArray = [];
for (i = 0; i <= 3; i++) {
  for (x = 0; x < 10; x++) {
    if (i == x) continue;
    storedArray[storedArray.length] = i + "" + x;
  }
}

console.log(storedArray);

userInfos = [
  { name: "Destiny", age: 23, job: "developer" },
  { name: "Aung Aung", age: 21, job: "designer" },
  { name: "Hla Hla", age: 24, job: "teacher" },
  { name: "Tun Tun", age: 22, job: "developer" },
];

userEmails = [
  { name: "Hla Hla", email: "hlahla@gmail.com" },
  { name: "Tun Tun", email: "tuntun@gmail.com" },
  { name: "Destiny", email: "destiny@gmail.com" },
  { name: "Aung Aung", email: "aungaung@gmail.com" },
];

users = [];

for (i = 0; i < userInfos.length; i++) {
  for (x = 0; x < userEmails.length; x++) {
    if (userInfos[i]["name"] == userEmails[x]["name"]) {
      // users[] = ["name" => userInfos[i]["name"], "age" => userInfos[i]["age"], "email" => userEmails[x]["email"], "job" => userInfos[i]["job"]];
      users.unshift({
        name: userInfos[i]["name"],
        age: userInfos[i]["age"],
        email: userEmails[x]["email"],
        job: userInfos[i]["job"],
      });
    }
  }
}

console.log(users);

students = [
  { name: "Aung Aung", age: 13, grade: 7 },
  { name: "Hla Hla", age: 14, grade: 8 },
  { name: "Mya Mya", age: 18 },
  { name: "Tun Tun", grade: 9 },
];

finalStudents = [];

for (student of students) {
  if (
    typeof student["name"] == "string" &&
    typeof student["age"] == "number" &&
    typeof student["grade"] == "number"
  ) {
    finalStudents[finalStudents.length] = student;
  }

  // if(!isset(student["name"]) || !isset(student["age"]) || !isset(student["grade"])) continue;
  // finalStudents[] = student;
}

console.log(finalStudents);
