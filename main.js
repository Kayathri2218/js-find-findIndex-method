//5. Find () and FindIndex () used

document.write('<br>');
document.write('<br>');

document.write("4. Find Method and FindIndex Method used");

document.write('<br>');

const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
];

const john = employees.find(employee => employee.name === "John Cena");
const johnIndex = employees.findIndex(employee => employee.name === 'John Cena');

console.log(john);
console.log(johnIndex);
document.write(john);
document.write("Position:" + johnIndex);

document.write('<br>');
document.write('<br>');
