export class Nodo{
    constructor(
        public data: number,
        public prev: Nodo | null = null,
        public next: Nodo | null = null
    ){}
    }