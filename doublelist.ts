import { Nodo } from "./node";

export class DoubleLinkedList{
    private head: Nodo | null = null;
    private tail: Nodo | null = null;

    public insert(data: number): void{
        const newNode = new Nodo(data);
        if (!this.tail){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    public print(): string{
        if (!this.head) return "-----";
        let result: string = "";
        let current: Nodo | null = this.head;

        while (current){
            if (current.next == null){
                result += current.data;
            }
            else{
                result += current.data + " || ";
            }
            current = current.next;
        }
        return result;
    }
}