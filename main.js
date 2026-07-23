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
