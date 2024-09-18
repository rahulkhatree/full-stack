function cube(a){
    // return a*a*a
    return a**3
}
console.log(cube(5))

// function sumofnaturalnumber(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i
//     }
//     return sum;

// }
//function expression
 let sumofnaturalnumber= function(n){
    let sum=0
    for(let i=1;i<=n;i++){
        sum=sum+i
    }
    return sum;

}
console.log(sumofnaturalnumber(10))

//arrow function
let si=(p,t,r)=>{
    return (p*t*r)/100
}
console.log(si(10,10,10))

let square=a=>a**2
console.log(square(36))

let multiplyBy5AndAdd=(n,fn)=>{
    let s=n*5
    return fn(s)
}
let add10=function(a){return a+10}

let sumofarray=function(arr){
    let sum=0;
    for(let i of arr ){
        sum=sum+i;
    }
    return sum;
}
let arr=[1,2,3,4,5,6]
let average=sumofarray(arr)/arr.length;
console.log(average)