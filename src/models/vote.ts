export interface Vote {
    id: string;
    name: string;
    date: string;
    type: string;
    description: string;
    image: string;
    votes: {
        likes: number;
        dislikes: number;
    }
    moreInfo: string;
    closing?: string;
}
