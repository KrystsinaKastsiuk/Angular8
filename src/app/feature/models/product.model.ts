export class Product {
    constructor(
        public name: string,
        public category: string,
        public price: number,
        public originCountry: string,
        public description: string,
        public isAvailable: boolean
    ) {
        this.name = name || null;
        this.category = category || '';
        this.price = price || 0;
        this.originCountry = originCountry || '';
        this.description = description || '';
        this.isAvailable = isAvailable || false;
    }
}
