let a=[34,'er','hi',true]
// a.push(34)  ye ending me add karta hai
// a.pop()   ye end se remove karne me kaam aata hai
// a.shift()      ye starting me se remove karne me kaam aata hai
// a.unshift




// console.log(a)




let b=[34,56,2,3,78,9]
// for(let i=0;i<b.length;i++){
//     if(b[i]==78){
//         console.log(i)
//     }
// }

// for(let i in b){
//     console.log(i,b[i])
// }

// for(let i of b){
//     console.log(i)    //iske andaer i kaa mtlb element hai
// }


// for(let i in b){
//     if(b[i]==78){
//         console.log(i)
//     }
// }


// b.splice(1,2)     //iska matlb delete karne mee aaya hai from index 1 and number of element is 2
// console.log(b)




// b.splice(1,0,90,34,54,23)
// console.


// for(let i=0;i<b.length;i++){
//     for(let j=0;j<b.length-i-1;j++){
//         if(b[j]>b[j+1]){
//             let temp=b[j];
//             b[j]=b[j+1];
//             b[j+1]=temp;
//         }
        
//     }
// }
// console.log(b)


// let c=b.find((value,index,array)=>{
//     return value>34
// })
// console.log(c)
let sum=0;
b.forEach((value,index,array)=>{
    sum=sum+value; 
})
console.log(sum)