export class Quote {
    descriptionVisible: boolean;
    votes: number;
    downvotes:number;
    upvotes: number;
    constructor(public id: number, public quoteAuthor: string, public quotePoster: string, public quoteText: string, public entryDateTime: Date){
        this.descriptionVisible=false;
        this.votes=0;
        this.downvotes=0;
        this.upvotes=0;
    }
}
