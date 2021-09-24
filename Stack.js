class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        var newNode = new Node(value);
        if(this.size===0){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop(){
        if(this.size===0) return null;
        var poppedNode = this.first;
        if(this.first===this.last){
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return poppedNode.value;
    }
}
