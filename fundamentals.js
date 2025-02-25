    //ex3 fundam
    
    // function myFunction(a) {
    //    return typeof(a)
    // }
     
    // console.log(myFunction(1))
    // // expected: 'number' 
    // console.log(myFunction(false))
    // // expected: 'boolean' 
    // console.log(myFunction({}))
    // // expected: 'object' 
    // console.log(myFunction(null))
    // // expected: 'object' 
    // console.log(myFunction('string'))
    // // expected: 'string' 
    // console.log(myFunction(['array']))
    // // expected: 'object' 
     
    //ex4 fundam

        // function myFunction(a, n) {
        //    return a[n-1]
        // }
         
        // console.log(myFunction('abcd',1))
        // // expected: 'a' 
        // console.log(myFunction('zyxbwpl',5))
        // // expected: 'w' 
        // console.log(myFunction('gfedcba',3))
        // // expected: 'e' 


    //ex5 fundam

        // function myFunction(a) {
        //    return a.slice(3)
        // }
        
        // console.log(myFunction('abcdefg'))
        // // expected: 'defg' 
        // console.log(myFunction('1234'))
        // // expected: '4' 
        // console.log(myFunction('fgedcba'))
        // // expected: 'dcba' 
    

    //ex6 fundam

        // function myFunction(str) {
        //    return str.substring(str.length - 3)
        // }
         
        // console.log(myFunction('abcdefg'))
        // // expected: 'efg' 
        // console.log(myFunction('1234'))
        // // expected: '234' 
        // console.log(myFunction('fgedcba'))
        // // expected: 'cba' 

    //ex7 fundam

        // function myFunction(a) {
        //    return a.slice(0, 3)
        // }
         
        // console.log(myFunction('abcdefg'))
        // // expected: 'abc' 
        // console.log(myFunction('1234'))
        // // expected: '123' 
        // console.log(myFunction('fgedcba'))
        // // expected: 'fge' 

    //ex8 fundam

            // function myFunction(a) {
            // return a.indexOf("is")
            // }
            
            // console.log(myFunction("praise"))
            // // expected: 3 
            // console.log(myFunction("risky"))
            // // expected: 1 
            // console.log(myFunction("paris"))
            // // expected: 3 

    //ex9 fundam

        // function myFunction(a) {
        //    return a.slice(0, Math.floor(a.length / 2))
        // }
         
        // console.log(myFunction('abcdefgh'))
        // // expected: 'abcd' 
        // console.log(myFunction('1234'))
        // // expected: '12' 
        // console.log(myFunction('gedcba'))
        // // expected: 'ged' 
    
    //ex10 fundam

        // function myFunction(a) {
        //    return a.slice(0, (a.length-3))
        // }
         
        // console.log(myFunction('abcdefg'))
        // // expected: 'abcd'
        // console.log(myFunction('1234'))
        // // expected: '1'
        // console.log(myFunction('fgedcba'))
        // // expected: 'fged'

    //ex 11 fundam

        // function myFunction(a, b) {
        //    return (a * b) / 100
        // }
         
        // console.log(myFunction(100, 50))
        // // expected: 50 
        // console.log(myFunction(10, 1))
        // // expected: 0.1 
        // console.log(myFunction(500, 25))
        // // expected: 125 
    
    //ex 12

    // function myFunction(a, b, c, d, e, f) {
    //     return (((a + b) - c) * d / e)**f
    //  }
      
    //  console.log(myFunction(6, 5, 4, 3, 2, 1))
    //  // expected: 10.5
    //  console.log(myFunction(6, 2, 1, 4, 2, 3))
    //  // expected: 2744
    //  console.log(myFunction(2, 3, 6, 4, 2, 3))
    //  // expected: -8
    
    //ex 13

        // function myFunction(a, b) {
        //     return a.endsWith(b[0]) ? a + b.slice() : a + b
        // }
         
        // console.log(myFunction('cheese', 'cake'))
        // console.log(myFunction('lips', 's'))
        // console.log(myFunction('Java', 'script'))
        // console.log(myFunction(' think, therefore I am', 'I'))

    //ex 14

        // function isEven(n) {
        //     return n % 2 == 0
        // }
         
        // console.log(isEven(2))
        // console.log(isEven(5))
        
    //ex 15
        // function myFunction(a, b) {
        //     return b.split(a).length - 1
        // }
         
        // console.log(myFunction("is", "This is a test"))
        // console.log(myFunction("a", "Banana"))

    //ex 16
        // function myFunction(a) {
        //     return a % 1 === 0
        // }
         
        // console.log(myFunction(3.5))
        // console.log(myFunction(-9))

    //ex 17
        // function myFunction(a, b) {
        //     return a < b ? a / b : a * b;
        // }
         
        // console.log(myFunction(2, 3))
        // console.log(myFunction(6, 5))

    //ex 18
        // function myFunction(a) {
        //     return Number(a.toFixed(2))
        // }
         
        // console.log(myFunction(3.555441))
        // console.log(myFunction(4.777865))

    //ex 19
        // function myFunction(a) {
        //     return a.toString().split('').map(Number)
        // }
         
        // console.log(myFunction(123))
        // console.log(myFunction(85648))

    //ex 20
        function myFunction(a) {
            return a.replace('%', '').split('').reverse().join('')
        }
         
        console.log(myFunction("tripcSavaJ%"))
        console.log(myFunction("nwotnwoD%"))