export class CardModel {
    public name: string
    public posterImage: string

    constructor(name: string, posterImage: string) {
        this.name = name;
        this.posterImage = "./assets/images/" + posterImage;
    }
}