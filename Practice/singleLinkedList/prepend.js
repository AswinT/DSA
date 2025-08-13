class node{
  constructor(val){
    this.val=val
    this.next=null
  }
}

class LikedList{
  constructor() {
    this.head=null
    this.size=0
  }
}
isEmpty(){
  return this.size===0
}
prepend(val){
  const node = new Node(val)
  if(isEmpty){
    this.head=node
  }else{
    node.next=this.head
    this.head=node
  }
  this.size++
}