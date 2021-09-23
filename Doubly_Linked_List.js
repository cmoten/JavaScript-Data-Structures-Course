class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift(){
        if(this.length === 0) return undefined;
        var shiftNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = shiftNode.next;
            this.head.prev = null;
            shiftNode.next = null;
        }

        this.length--;
        return shiftNode;
    }

    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2) {
            count = 0;
            current = this.head; 
            while(index !== count){
                current = current.next;
                count++;
            }//end while
        } else{
            count = this.length - 1;
            current = this.tail;
            while(index !== count){
                current = current.prev;
                count--;
            }//end while

        }//end else

        return current;

    }

    set(index, val) {
        var setIndex = this.get(index);
        if(setIndex) {
            setIndex.val = val;
            return true;
        }

        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = list.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index>= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index===this.length-1) return this.pop();

        var removeNode = this.get(index);
        var beforeNode = removeNode.prev;
        var afterNode = removeNode.next;
        
        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        removeNode.prev = null;
        removeNode.next = null;
        this.length--;
        return removeNode;

    }

    

}

list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
// list.push(6)
// list.push(7)
// list.push(8)
// list.push(9)
// list.push(10)