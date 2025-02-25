//ex 1
// function myFunction(a, n) {
//     return a[n-1]
// }
     
// console.log(myFunction([1,2,3,4,5], 3))
// // expected: 3 
// console.log(myFunction([10,9,8,7,6], 5))
// // expected: 6 
// console.log(myFunction([7,2,1,6,3], 1))
// // expected: 7 
    
//ex 2
// function myFunction(a) {
//     return a.slice(3)
// }
     
// console.log(myFunction([1,2,3,4]))
// // expected: [4] 
// console.log(myFunction([5,4,3,2,1,0]))
// // expected: [2,1,0] 
// console.log(myFunction([99,1,1]))
// // expected: [] 

//ex 3
// function myFunction(a) {
//     return a.slice(-3)
// }
     
// console.log(myFunction([1,2,3,4]))
// console.log(myFunction([5,4,3,2,1,0]))
// console.log(myFunction([99,1,1]))


//ex 4
// function myFunction(a) {
//     return a.slice(0, 3)
// }
     
// console.log(myFunction([1,2,3,4]))
// console.log(myFunction([5,4,3,2,1,0]))
// console.log(myFunction([99,1,1]))


//ex 5
// function myFunction(a, n) {
//     return a.slice(-n)
// }
     
// console.log(myFunction([1,2,3,4], 2))
// console.log(myFunction([5,4,3,2,1,0], 4))
// console.log(myFunction([99,1,1], 1))

//ex 6
// function myFunction(a, b) {
//     return a.filter(element => element !== b)
// }
     
// console.log(myFunction([1,2,3,4,2,5], 2))
// console.log(myFunction([5,4,3,2,1,4,0,4], 4))
// console.log(myFunction([99,1,1], 1))

//ex 7
// function myFunction(a) {
//     return a.length
// }
     
// console.log(myFunction([1,2,3,4]))
// console.log(myFunction([5,4,3,2,1,0]))
// console.log(myFunction([99,1,1]))

//ex 8
// function myFunction(a) {
//     return a.filter(n => n < 0).length
// }
     
// console.log(myFunction([-1,2,3,-4]))
// console.log(myFunction([-5,4,-3,-2,-1,0]))
// console.log(myFunction([99,-1,1]))

//ex 9
// function myFunction(a) {
//     return a.slice().sort()
// }
     
// console.log(myFunction([1,2,3,4]))
// console.log(myFunction([5,4,3,2,1,0]))
// console.log(myFunction([99,1,1]))

//ex 10
function myFunction(a) {
    return a.slice().sort((x, y) => y - x)
}
     
console.log(myFunction([4, 1, 3, 2]))
console.log(myFunction([3, 2, 1, 5, 0, 4]))
console.log(myFunction([1, 99, 52, 42]))