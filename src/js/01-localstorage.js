// const user = {
//   name: 'Mango',
//   age: 2,
// };

// console.log(JSON.stringify(user));

// const savedUserData = '{"name":"Mango","age":2}';

// console.log(JSON.parse(savedUserData));
// -----------------------------------------------
console.log(localStorage);

localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

const savedData = localStorage.getItem('my-data');
console.log(savedData);

const parsedData = JSON.parse(savedData);
console.log(parsedData);
// --------------------------------------------
