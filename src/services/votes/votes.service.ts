import { StorageService } from "../storage/storage.service";

export class VotesService {
    private storageService = new StorageService();
    private addQuantity = (vote: any, type: string, quantity: number) => {
        if (type === 'like') {
            vote.likes += quantity

        } else if (type === 'dislike') {
            vote.dislikes += quantity
        }
        return vote;
    }

    private getVotes = async () => {
        return new Promise((res, rej) => {
            res(this.storageService.getVotes()); // return
        })
    }
    getVotesByID = async (id: string) => {
        let votes = await this.getVotes() as any; // return
        if (votes) {
            votes = votes[id];
        }
        return votes;
    }
    addVote = async (id: string, type: string, quantity: number) => {
        let votes: any = await this.getVotes() || {};
        if (votes[id]) {
            votes[id] = this.addQuantity(votes[id], type, quantity);
        } else {
            votes[id] = {
                dislikes: 0,
                likes: 0
            }
            votes[id] = this.addQuantity(votes[id], type, quantity);
        }
        this.storageService.addVote(votes)
    }
}
