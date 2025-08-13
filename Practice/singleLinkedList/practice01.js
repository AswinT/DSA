//append

// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null
//   }
// }
// class Linkedlist{
//   constructor(){
//     this.head = null
//     this.size = 0
//   }
// }
// isEmpty(){
//   return this.size ===0
// }
// append(val){
//   const node = new Node(val)
//   if(isEmpty()){
//     this.head = node
//   }else{
//     let current = this.head
//     while(current.next){
//       current = current.next;
//     }
//     current.next = node
//   }
//   this.size++
// }




class node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }
}
isEmpty(){
  return this.size === 0
}
append(val){
  const node = new Node
  if(isEmpty){
    this.haed = node
  }else{
    let current = this.head
    while(current.next){
      current = current.next
    }
    current.next = node
  }
  this.size++
}