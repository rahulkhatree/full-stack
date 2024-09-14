const prompt=require("prompt-sync")()
// let n=prompt('enter a number')
// let i=0;
// while(i<=10){
//     console.log(n,"x",i,"=",n*i)
//     i++;
// }


// while(n>0){
//     let rem=n%10;
//     n=n-rem;
//     n=n/10;
//     // n=parseInt(n)
//     i++
// }
// console.log(i)


// for(let i=1;i<=n;i++)
// {

//     if(i%3==0 || i%5==0){
//         if (i%3==0 && i%5==0){

//             console.log("fizzbuzz")
//         }
//         else if(i%3==0){
//             console.log("-fizz")
//         }
//         else if(i%5==0){
//             console.log("-buzz")
//         }
//     }
//     else{
//         console.log(i)
//     }

    //  let month=parseInt(prompt('enter the number'))
    //  switch(month){
    //     case 1:
    //         console.log('January')
    //         break
    //     case 2:
    //         console.log('February')
    //         break
    //     case 3:
    //         console.log('March')
    //         break
    //     case 4:
    //         console.log('April')
    //         break
    //     case 5:
    //         console.log('May')
    //         break
    //     case 6:
    //         console.log('June')
    //         break        
    //     case 7:
    //         console.log('July')
    //         break     
    //     case 8:
    //         console.log('August')
    //         break
    //     case 9:
    //         console.log('September')
    //         break
    //     case 10:
    //         console.log('October')
    //         break
    //     case 11:
    //         console.log('November')
    //         break
    //     case 12:
    //         console.log('December')
    //         break
    //     default:
    //         console.log('Invalid')
            
    //  }


    for(let i=200;i<=300;i++){
        if(i%2==0 || i%3==0){
            continue
        }
        console.log(i)
    }
    
   
    

