class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }
    
    deleteNode(index){
        if(index < 0 || index >= this.size){
            console.log("invalid index")
            return
        }
        
     
        if(index === 0){
            this.head = this.head.next;
            this.size--;
            console.log(`Item deleted from index 0`);
            return;
        }
        
    
        let current = this.head;
       
        for(let i = 0; i < index - 1; i++){
            current = current.next;
        }
        
        let deleteItem = current.next;
        current.next = deleteItem.next;
        this.size--;
        console.log(`Item deleted from index ${index}`); 
    }
}

const linkedList = new linkedlist()
