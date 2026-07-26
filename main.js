// 01 Har number ko double karke naya array banao.
// const numbers = [1, 2, 3, 4, 5];
// const arr = numbers.map((n) => {
//   return n * 2;
//
// });

// console.log(arr);

// 02 Sabhi names ko uppercase me convert karo.

// const names = ["pawan", "rahul", "amit"];
// const arr=names.map((n)=>{
//     return n.toUpperCase()
// })
// console.log(arr)

// 03 Sirf 20 se bade numbers nikalo.
// const numbers = [10, 25, 30, 15, 40];
// const arr=numbers.find((item)=>{
//     return item>20
// })
// console.log(arr)
// 4. filter()
// Sirf adults (18 ya usse bade) nikalo.
// const ages = [12, 18, 25, 15, 30];

// const adults=ages.filter(item => item>=18)
// console.log(adults)
// 5. filter()
// Sirf active users ka array banao.
// const users = [
//   { name: "A", active: true },
//   { name: "B", active: false },
//   { name: "C", active: true }
// ];
// const active=users.filter((item) => item.active)
// console.log(active)
// 6. find()
// 12 ko find karo.
// const numbers = [5, 8, 12, 20];
// const arr=numbers.find((item) =>{
//     return item===12
// })

// console.log(arr)
// 7. find()
// id = 2 wala student find karo.
// const students = [
//   { id: 1, name: "Ram" },
//   { id: 2, name: "Shyam" },
//   { id: 3, name: "Mohan" },
// ];

// const arr = students.find((item) => item.id === 2);
// console.log(arr);
// 8. findIndex()
// "Mango" ka index nikalo.
// const fruits = ["Apple", "Banana", "Mango"];
// const arr = fruits.findIndex((n) => {
//   return n === "Mango";
// });
// console.log(arr);
// 9. includes()
// // Check karo "Blue" exist karta hai ya nahi.
// const colors = ["Red", "Blue", "Green"];
// const arr = colors.includes("Blue");
// console.log(arr);

// 10. some()
// Check karo koi bhi student 75 se jyada marks laya hai ya nahi.
// const marks = [25, 35, 80, 40];
// const arr=marks.some(n=>n>75)
// console.log(arr)

// 11. every()
// Check karo kya sabhi adult hain.
// const ages = [20, 25, 18, 30];
// const arr = ages.every((n) => n >= 18);
// console.log(arr);

// 12. reduce()
// Sabhi numbers ka sum nikalo.
// const numbers = [10, 20, 30, 40];
// const arr=numbers.reduce((a,b)=>{
//     return a+b
// },0)
// console.log(arr)
// 13. reduce()
// Total price calculate karo.
// const prices = [500, 1000, 1500];
// const arr = prices.reduce((a, b) => a + b, 0);
// console.log(arr)

// 14. sort()
// Ascending order me sort karo.
// const numbers = [45, 10, 90, 5];
// const arr=numbers.sort((a,b)=>a-b)
// console.log(arr)

// 15. sort()
// Alphabetically sort karo.
// const names = ["Rahul", "Amit", "Pawan"];

// const arr=names.sort();
// console.log(arr)

// Q1. map()
// Har number ka square nikalo.
// const numbers = [2, 4, 6, 8];
// const arr=numbers.map((n)=>n*2)
// console.log(arr)

// Q2. map()
// Sirf names ka array banao.
// const users = [
//   { name: "Pawan", age: 22 },
//   { name: "Rahul", age: 20 },
//   { name: "Amit", age: 25 },
// ];
// const arr = users.map((item) => item.name);
// console.log(arr);

// Q3. filter()
// 1000 ya usse zyada prices nikalo.
// const prices = [100, 500, 1000, 1500, 200];
// const arr=prices.filter(item => item>=1000)
// console.log(arr)
// Q4. filter()
// Sirf available products nikalo.
// const products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
//   { name: "Mouse", stock: 10 },
// ];
// const arr=products.filter(item => item.stock)
// console.log(arr)

// Q5. find()
// id = 3 wala user find karo.
// const users = [
//   { id: 1, name: "Ram" },
//   { id: 2, name: "Shyam" },
//   { id: 3, name: "Mohan" },
// ];

// const arr = users.find((item) => item.id === 3);
// console.log(arr);
// Q6. findIndex()
// "Black" ka index nikalo.
// const colors = ["Red", "Blue", "Green", "Black"];
// const arr = colors.findIndex((item) => item === "Black");
// console.log(arr);
// Q7. includes()
// Check karo "Mango" hai ya nahi.
// const fruits = ["Apple", "Orange", "Banana"];
// const arr = fruits.includes("Mango");

// console.log(arr);
// Q8. some()
// Check karo kya kisi ki salary 50000 se jyada hai.
// const salary = [10000, 15000, 60000, 25000];
// const arr = salary.some((item) => item > 50000);
// console.log(arr);
// Q9. every()
// Check karo kya sabhi students 60 ya usse jyada marks laye hain.
// const marks = [80, 90, 75, 65];
// const arr = marks.every((item) => item >= 60);
// console.log(arr);

// Q10. reduce()
// Total marks nikalo.
// const marks = [80, 90, 70, 60];
// const arr = marks.reduce((a, b) => {
//   return a + b;
// });
// console.log(arr);

// Q11. reduce()
// Shopping cart ka total price nikalo.
// const cart = [{ price: 100 }, { price: 500 }, { price: 1000 }];
// const arr = cart.reduce((a, b) => {
//   return a + b.price;
// }, 0);
// console.log(arr);
// Q12. sort()
// Descending order me sort karo.
// const numbers = [100, 25, 7, 50, 3];
// const arr = numbers.sort((item1, item2) => item2 - item1);
// console.log(arr);
// Q13. sort()
// Alphabetical order me sort karo.
// const names = ["Pawan", "Amit", "Rahul", "Ankit"];
// const arr=names.sort()

// console.log(arr)
// Q14. reverse()
// Array reverse karo.
// const city = ["Delhi", "Mumbai", "Jaipur"];
// const arr = city.reverse();
// console.log(arr);

// Q15. slice()
// 30 se 50 tak ka naya array banao.
// const data = [10, 20, 30, 40, 50, 60];
// const arr = data.slice(2, 5);
// console.log(arr);

// Q16. splice()
// "Mango" remove karo.
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const arr = fruits.splice(2, 1);
// console.log(arr);
// console.log(fruits);

// Q17. concat()
// Teenon arrays ko merge karo.
// const a = [1, 2];
// const b = [3, 4];
// const c = [5, 6];
// const arr = a.concat(b, c);
// console.log(arr);

// Q18. forEach()
// Print karo:
// const students = ["Ram", "Shyam", "Mohan"];

// students.forEach((student) => {
//   console.log(`Welcome ${student}`);
// });
// Welcome Ram
// Welcome Shyam
// Welcome Mohan
// Q19. Flat Challenge
// const arr = [1, 2, [3, 4], [5, [6, 7]]];

// Array ko completely flat karo.

// Q20. Real Interview Challenge ⭐
// const employees = [
//   { id: 1, name: "Pawan", salary: 25000, active: true },
//   { id: 2, name: "Rahul", salary: 45000, active: false },
//   { id: 3, name: "Amit", salary: 55000, active: true },
//   { id: 4, name: "Neha", salary: 35000, active: true },
// ];

// Q1. map()
// Har number me 10 add karke naya array banao.
// const numbers = [5, 10, 15, 20];
// const arr = numbers.map((n) => {
//   return n + 10;
// });
// console.log(arr);

// Q2. map()
// Sirf cities ka array banao.
// const users = [
//   { name: "Pawan", city: "Delhi" },
//   { name: "Rahul", city: "Jaipur" },
//   { name: "Amit", city: "Mumbai" },
// ];

// const arr = users.map((item) => item.city);
// console.log(arr);

// Q3. filter()
// Sirf 18 se kam age wale nikalo.
// const ages = [12, 18, 25, 17, 30, 16];
// const arr = ages.filter((item) => item < 18);
// console.log(arr);

// Q4. filter()
// Sirf 30000 se kam salary wale employees nikalo.
// const employees = [
//   { name: "A", salary: 25000 },
//   { name: "B", salary: 50000 },
//   { name: "C", salary: 15000 },
// ];
// const arr = employees.filter((item) => item.salary < 30000);
// console.log(arr);
// Q5. find()
// id = 102 wala product find karo.
// const products = [
//   { id: 101, name: "Laptop" },
//   { id: 102, name: "Mouse" },
//   { id: 103, name: "Keyboard" },
// ];

// const arr = products.find((item) => (item.id = 102));
// console.log(arr);

// Q6. findIndex()
// "Mumbai" ka index nikalo.
// const cities = ["Delhi", "Jaipur", "Mumbai", "Pune"];
// const arr = cities.findIndex((item) => item === "Mumbai");
// console.log(arr);
// Q7. includes()
// Check karo "Node.js" present hai ya nahi.
// const skills = ["HTML", "CSS", "JavaScript", "React"];
// const arr = skills.includes("Node.js");
// console.log(arr);

// Q8. some()
// Check karo kya koi temperature 40 se jyada hai.
// const temperatures = [25, 30, 41, 28];
// const arr = temperatures.some((n) => n > 40);
// console.log(arr);
// Q9. every()
// Check karo kya sabhi numbers even hain.
// const numbers = [2, 4, 6, 8, 10];
// const arr = numbers.every((n) => n % 2 === 0);
// console.log(arr);

// const numbers = [5, 10, 15, 20];

// const sum = numbers.reduce((a, b) => a + b, 0);

// const average = sum / numbers.length;

// console.log(average);

// Q11. reduce()
// Total quantity calculate karo.
// const cart = [
//   { item: "Pen", qty: 2 },
//   { item: "Book", qty: 5 },
//   { item: "Pencil", qty: 3 },
// ];
// const arr = cart.reduce((a, b) => a + b.qty, 0);
// console.log(arr);
// Q12. sort()
// Descending order me sort karo.
// const marks = [85, 60, 95, 40, 75];
// const arr = marks.sort((a, b) => b - a);
// console.log(arr);

// Q13. sort()
// Alphabetically sort karo.
// const names = ["Zoya", "Ankit", "Rahul", "Aman"];
// const arr = names.sort();
// console.log(arr);

// Q14. reverse()
// Array reverse karo.
// const letters = ["A", "B", "C", "D", "E"];
// const arr = letters.reverse();
// console.log(arr);
// Q15. slice()
// Sirf [300, 400, 500] ka naya array banao.
// const data = [100, 200, 300, 400, 500, 600];
// const arr = data.slice(2, 5);
// console.log(arr);
// Q16. splice()
// "Banana" remove karke uski jagah "Kiwi" insert karo.
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const arr = fruits.splice(1, 1);
// console.log(arr);
// console.log(fruits);

// Q17. concat()
// Teeno arrays ko merge karo.
// const frontend = ["HTML", "CSS"];
// const backend = ["Node.js", "Express"];
// const database = ["MongoDB"];
// const arr = frontend.concat(backend, database);
// console.log(arr);

// Q18. forEach()
// Hello Pawan
// Hello Rahul
// Hello Amit
// const users = ["Pawan", "Rahul", "Amit"];

// users.forEach((user) => {
//   console.log(`Hello ${user}`);
// });

// Print karo:

// Q19. flat()
// Array ko completely flat karo.
// const arr = [1, [2, 3], [4, [5, 6]]];
// const newarr = arr.flat(2);
// console.log(newarr);

// Q20. 🔥 Ultimate Interview Challenge
// const employees = [
//   { id: 1, name: "Pawan", salary: 25000, active: true },
//   { id: 2, name: "Rahul", salary: 45000, active: false },
//   { id: 3, name: "Amit", salary: 55000, active: true },
//   { id: 4, name: "Neha", salary: 35000, active: true },
//   { id: 5, name: "Karan", salary: 60000, active: false },
// ];

// const arr1 = employees.filter((n) => {
//   return n.active === true;
// });
// console.log(arr1);

// const arr2 = employees.find((item) => item)((n) => {
//   return n.name;
// });
// console.log(arr2);
// Is array par ye sab solve karo:

// Active employees nikalo.
// Sirf names ka array banao.
// salary >= 50000 wale employees nikalo.
// Total salary calculate karo.
// Average salary nikalo.
// id = 4 employee find karo.
// Rahul ka index find karo.
// Check karo kya koi salary 70000 se jyada hai.
// Check karo kya sabhi employees active hain.
// Salary ascending sort karo.
// Salary descending sort karo.
// Sabhi names uppercase me convert karo.

// Q1. map()
// Har number ka cube nikalo.
// const numbers = [1, 2, 3, 4, 5];
// const arr = numbers.map((item) => item ** item);

// console.log(arr);
// Q2. map()
// Har object me ek nayi property adult: true add karo.
// const users = [
//   { name: "Pawan", age: 22 },
//   { name: "Rahul", age: 20 },
//   { name: "Amit", age: 25 },
// ];
// const arr=users.map((item )=>{
//     return{...item,adult:true}
// })
// console.log(arr)

// Q3. filter()
// Sirf pass marks (>= 50) nikalo.
// const marks = [95, 45, 67, 32, 88, 76];
// const arr = marks.filter((item) => item >= 50);
// console.log(arr);

// Q4. filter()
// Sirf IT department wale employees nikalo.
// const employees = [
//   { name: "A", department: "IT" },
//   { name: "B", department: "HR" },
//   { name: "C", department: "IT" },
// ];
// const arr = employees.filter((item) => item.department === "IT");
// console.log(arr);

// Q5. find()
// Title "React" wali book find karo.
// const books = [
//   { id: 1, title: "JavaScript" },
//   { id: 2, title: "React" },
//   { id: 3, title: "Node.js" },
// ];

// const arr = books.find((item) => item.title === "React");
// console.log(arr);

// Q6. findIndex()
// "Green" ka index nikalo.
// const colors = ["Red", "Blue", "Green", "Yellow"];
// const arr = colors.findIndex((item) => item === "Green");
// console.log(arr);

// Q7. includes()
// Check karo "Guest" exist karta hai ya nahi.
// const roles = ["Admin", "User", "Editor"];
// const arr = roles.includes("Gruest");
// console.log(arr);

// Q8. some()
// Check karo kya kisi ki salary 60000 se jyada hai.
// const salaries = [20000, 30000, 45000, 70000];
// const arr = salaries.some((n) => n > 60000);
// console.log(arr);
// Q9. every()
// Check karo kya sabhi users 18 ya usse bade hain.
// const ages = [21, 25, 18, 30];
// const arr = ages.every((n) => n >= 18);
// console.log(arr);

// Q10. reduce()
// // Sabhi numbers ka product (multiplication) nikalo.
// const numbers = [2, 4, 6, 8];
// const arr = numbers.reduce((a, b) => a * b);
// console.log(arr);
// Q11. reduce()
// Total bill calculate karo.
// const cart = [
//   { name: "Pen", price: 20 },
//   { name: "Book", price: 100 },
//   { name: "Bag", price: 500 },
// ];
// const arr = cart.reduce((a, b) => a + b.price,0);
// console.log(arr);
// Q12. sort()
// Ascending order me sort karo.
// const numbers = [15, 2, 100, 45, 7];
// const arr=numbers.sort((a,b)=>a-b)
// console.log(arr)

// Q13. sort()
// Alphabetically sort karo.
// const cities = ["Delhi", "Agra", "Mumbai", "Chennai"];
// const arr = cities.sort();
// console.log(arr);

// Q14. reverse()
// Reverse order me print karo.
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const arr = months.reverse();
// console.log(arr);

// Q15. slice()
// Sirf [15, 20, 25] ka naya array banao.
// const data = [5, 10, 15, 20, 25, 30];
// const arr=data.slice(2,5)
// console.log(arr)
// Q16. splice()
// "Orange" remove karke uski jagah "Grapes" insert karo.
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const arr = fruits.splice(3, 1);
// console.log(arr);
// console.log(fruits);
// Q17. concat()
// Teeno arrays ko merge karo.
// const html = ["HTML"];
// const css = ["CSS"];
// const js = ["JavaScript"];
// const arr = html.concat(css, js);
// console.log(arr);

// Q18. forEach()
// Print karo:
// const students = [
//   { name: "Ram", marks: 90 },
//   { name: "Shyam", marks: 80 },
//   { name: "Mohan", marks: 70 },
// ];
// const result = students.map((student) => {
//   return `${student.name} Score ${student.marks}`;
// });

// console.log(result);

// Ram scored 90
// Shyam scored 80
// Mohan scored 70
// Q19. flat()
// Array ko completely flat karo.
// const arr = [1, [2, [3, [4, [5]]]]];
// const newarr=arr.flat(Infinity)
// console.log(newarr)

// Q20. ⭐ Ultimate Interview Challenge
const employees = [
  { id: 1, name: "Pawan", salary: 25000, active: true, department: "IT" },
  { id: 2, name: "Rahul", salary: 45000, active: false, department: "HR" },
  { id: 3, name: "Amit", salary: 55000, active: true, department: "IT" },
  { id: 4, name: "Neha", salary: 35000, active: true, department: "Sales" },
  { id: 5, name: "Karan", salary: 60000, active: false, department: "IT" },
];

// Is array par ye sab solve karo:

// Sirf active employees nikalo.
// const arr = employees.filter((item) => item.active === true);
// console.log(arr);
// Sirf IT department wale employees nikalo.
// const arr = employees.filter((item) => item.department === "IT");
// console.log(arr);
// Sirf names ka array banao.
// const arr = employees.map(item => item.name);
// console.log(arr)
// Total salary calculate karo.
// const arr = employees.reduce((a, b) => a + b.salary, 0);
// console.log(arr);
// Average salary nikalo.
// const arr = employees.reduce((a, b) => a + b.salary, 0)/employees.length;
// console.log(arr)

// // Highest salary nikalo (reduce()).
// const highestSalary = employees.reduce((max, employee) => {
//   return employee.salary > max ? employee.salary : max;
// }, 0);

// console.log(highestSalary);
// // Lowest salary nikalo (reduce()).
// const lowestSalary = employees.reduce((min, employee) => {
//   return employee.salary < min ? employee.salary : min;
// }, employees[0].salary);

// console.log(lowestSalary);
// id = 4 employee find karo.
// "Rahul" ka index find karo.
// Check karo kya koi salary 80000 se jyada hai.
// Check karo kya sabhi employees active hain.
// Salary ascending sort karo.
// Salary descending sort karo.
// Names uppercase me convert karo.
// Method chaining: Active employees → IT department → Names uppercase → Alphabetically sort.
