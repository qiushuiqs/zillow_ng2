export class Property {
    address: string;
    price: string;
    originalPrice: string;
    id: string;
    mediaUrl: string;
    
    constructor(address: string, price: string, originalPrice: string, id: string, mediaUrl: string) {
        this.address = address;
        this.price = price;
        this.originalPrice = originalPrice;
        this.id = id;
        this.mediaUrl = mediaUrl;
    }
}
