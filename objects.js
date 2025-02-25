//ex 1
// function myFunction(obj) {
//     return obj.country
// }
     
// console.log(myFunction({ continent: 'Asia', country: 'Japan' }))
// // expected: 'Japan' 
// console.log(myFunction({ country: 'Sweden', continent: 'Europe' }))
// // expected: 'Sweden' 

//ex 2
// function myFunction(obj) {
//     return obj['prop-2']
// }
     
// console.log(myFunction({ one: 1, 'prop-2': 2 }))
// // expected: 2 
// console.log(myFunction({ 'prop-2': 'two', prop: 'test' }))
// // expected: 'two' 
    
//ex 3
// function myFunction(obj, key) {
//     return obj[key]
// }
     
// console.log(myFunction({ name: 'Alice', age: 25 }, 'age')) 
// console.log(myFunction({ brand: 'Apple', model: 'iPhone' }, 'brand')) 

//ex 4
// function myFunction(a, b) {
//     return b in a
// }

// console.log(myFunction({ x: 10, y: 20 }, 'x'))
// console.log(myFunction({ a: 1, b: 2 }, 'z'))
// console.log(myFunction({ z: null }, 'z'))

//ex 5
// function myFunction(a, b) {
//     return Boolean(a[b])
// }

// console.log(myFunction({ x: 10, y: 0 }, 'x'))
// console.log(myFunction({ a: null, b: false }, 'a'))
// console.log(myFunction({ c: 'hello' }, 'c'))

//ex 6
// function myFunction(str) {
//     return {key: str}
// }

// console.log(myFunction("hello"))

//ex 7
// function myFunction(a, b) {
//     return {[a]: b}
// }

// console.log(myFunction("color", "blue"))

//ex 8
// function myFunction(a, b) {
//     return Object.fromEntries(a.map((key, index) => [key, b[index]]))
// }

// console.log(myFunction(['a', 'b', 'c'], [1, 2, 3]))

//ex 9
// function myFunction(a) {
//     return Object.keys(a)
// }

// console.log(myFunction({ name: 'Bob', age: 30, city: 'NY' }))

//ex 10
function myFunction(obj) {
    return obj.a?.b
}

console.log(myFunction({ a: { b: 42 } }))
console.log(myFunction({ a: {} }))
console.log(myFunction({}))