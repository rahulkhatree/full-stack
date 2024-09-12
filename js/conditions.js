const prompt=require('prompt-sync')()
// const num=prompt('enter the number')
// console.log(num)

// let n1=prompt('enter 1 no: ')
// let n2=prompt('enter 2 no: ')
// let n3=prompt('enter 3 no: ')

// if(n%11==0){
//     console.log('divisible by 11')
// }
// else{
//     console.log('not divisible by 11')
// }
// if(n>0){
//     console.log('positive')
// }
// else if(n<0){
//     console.log('negative')
// }
// else{
//     console.log('zero')
// }
// if(n1>n2){
//     if(n1>n3){
//         console.log(n1,'is maximum')
//     }
//     else{
//         console.log(n3,'is maximum')

//     }
// }
// else{
//     if(n2>n3){
//         console.log(n2,'is maximum')
//     }
//     else{
//         console.log(n3,'is maximum')
//     }
// }
// if(n1>n2 && n1>n3){
//     console.log(n1,'is maximum')
// }
// else if(n2>n3){
//     console.log(n2,'is maximum')
// }
// else{
//     console.log(n3,'is maximum')
// }
 let n=prompt('enter percentage ')
 if(n>=0 && n<30){
    console.log('Fail')
 }
 else if(n>=30 && n<50)
 {
    console.log('Grade C')
    
 }
 else if(n>=50 && n<75){
    console.log('Grade B')

 }
 else if(n>=75 && n<85){
    console.log('Grade A')
 }
 else{
    console.log('Grade A+')
 }
