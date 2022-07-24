import { Product } from "./product";

export class User {
    constructor (
        public id: number = 0,
        public name: string = '',
        public address: string = '',
        public credit: number = 0,
        public products: Product[] = [],
        public totalPaid: number = 0) {
            //
    }
}

