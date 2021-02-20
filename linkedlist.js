class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Linkedlist {
    head;

    constructor(head = null) {
        this.head = head
    }

    // head elem - lista eleje
    get head() {
        return this.head;
    }

    //elem beszúrása
    insert(newNode) { //
        if (this.head !== null) {
            newNode.next = this.head;
        }
        this.head = newNode;
    }

    // remove LIFO - Last In First OUT - mindig az utojára betett elemet adja visszathis.#head = ListNode {data: 3,
    // next: ListNode}
    removeFirst() {
        let removedNode = this.head;
        this.head = this.head.next;

        return removedNode;
    }

    getSize() {
        let size = 0;
        let node = this.head;

        while (node) {
            size++;
            node = node.next;
        }

        return size;
    }

    search(listNode) {
        let node = this.head;
        let index = 0;
        while (node) {
            if (listNode.data === node.data) {
                return index;
            }
            index++;
            node = node.next;
        }
        return -1;
    }

    valueOf(indexNode) {
        let node = this.head;
        let index = 0;
        while (node) {
            if (index === indexNode) {
                return node;
            }
            index++;
            node = node.next;
        }
        throw TypeError(`no additional item with the given index ${indexNode}`)
    }
}


let linkedList = new Linkedlist()

linkedList.insert(new ListNode(1))
linkedList.insert(new ListNode(2))
linkedList.insert(new ListNode(3))
linkedList.insert(new ListNode(4))

linkedList.removeFirst()


console.log(linkedList)
console.log(linkedList.getSize())
let newNode = new ListNode(1)

console.log(linkedList.search(newNode))
console.log(linkedList.valueOf(2))