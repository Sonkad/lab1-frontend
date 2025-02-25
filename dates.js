//ex 1
// function myFunction(a, b) {
//     return a.getTime() === b.getTime()
// }

// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
// // expected: false 
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
// // expected: true 
// console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
// // expected: false 

//ex 2
// function myFunction(a, b) {
//     return Math.abs((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
// }

// console.log(myFunction(new Date('2024-02-25'), new Date('2024-02-20')))
// console.log(myFunction(new Date('2023-12-31'), new Date('2024-01-01')))
// console.log(myFunction(new Date('2022-05-10'), new Date('2022-05-15')))

//ex 3
// function myFunction(a, b) {
//     return a.getFullYear() === b.getFullYear() &&
//            a.getMonth() === b.getMonth() &&
//            a.getDate() === b.getDate()
// }

// console.log(myFunction(new Date('2024-02-25 08:00:00'), new Date('2024-02-25 23:59:59')))
// console.log(myFunction(new Date('2023-12-31 23:59:59'), new Date('2024-01-01 00:00:00')))
// console.log(myFunction(new Date('2022-05-10 12:00:00'), new Date('2022-05-10 14:00:00')))

//ex 4
// function myFunction(a, b) {
//     return Math.abs(a.getTime() - b.getTime()) <= 3600000
// }

// console.log(myFunction(new Date('2024-02-25 08:00:00'), new Date('2024-02-25 08:45:00')))
// console.log(myFunction(new Date('2024-02-25 08:00:00'), new Date('2024-02-25 09:00:00')))
// console.log(myFunction(new Date('2024-02-25 08:00:00'), new Date('2024-02-25 09:01:00')))

//ex 5
function myFunction(a, b) {
    return a.getTime() < b.getTime()
}

console.log(myFunction(new Date('2024-02-24'), new Date('2024-02-25')))
console.log(myFunction(new Date('2024-02-25 08:00:00'), new Date('2024-02-25 07:59:59')))
console.log(myFunction(new Date('2023-12-31'), new Date('2023-01-01')))