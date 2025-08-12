const arr = [1,2,2,3,3,3,4]

//remove duplicates

for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length-1;j++){
    if(arr[i]==arr[j]){
      arr.splice(i,1)
    }
  }
}

console.log(arr)