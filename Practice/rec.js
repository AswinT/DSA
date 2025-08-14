// function countdown(num){
//   if(num<=0){
//     console.log("All tasks done!")
//     return;
//   }
//   console.log(num)
//   num--
//   countdown(num)
// }
// countdown(5)



// function reverseString(str) {
//   if (str === "") {
//     return str;
//   }
//   return reverseString(str.substring(1)) + str[0];
// }

// console.log(reverseString("hello"));


//remove a char

function rmvachar(str,char){
    if(str.length===0) return ""
    let frst=str[0]
    let rest=rmvachar(str.slice(1),char)
    if(frst===char){
        return rest
    }else{
        return frst+rest
    }
}
console.log(rmvachar("hello","l"))