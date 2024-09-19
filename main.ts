import { DoubleLinkedList } from "./doublelist";

let lista: DoubleLinkedList = new DoubleLinkedList()

lista.insert(Math.floor(Math.random() * (9 - 1)))
lista.insert(Math.floor(Math.random() * (9 - 1)))
lista.insert(Math.floor(Math.random() * (9 - 1)))
lista.insert(Math.floor(Math.random() * (9 - 1)))
lista.insert(Math.floor(Math.random() * (9 - 1)))

console.log(lista.print())
