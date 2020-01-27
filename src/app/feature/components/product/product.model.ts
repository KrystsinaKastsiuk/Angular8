export class ProductModel {
    constructor(
        // можно сразу задать дефолтное значение
        public name: string = null,
        public category: string = '',
        public price: number = 0,
        public originCountry: string = '',
        public description: string = '',
        public isAvailable: boolean = false
    ) {
        // this.name = name || null;
        // this.category = category || '';
        // this.price = price || 0;
        // this.originCountry = originCountry || '';
        // this.description = description || '';
        // this.isAvailable = isAvailable || false;
    }
}
