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