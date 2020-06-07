
export class StorageService {
    key = '_user_votes'
    addVote = (votes: any) => {
        localStorage.setItem(this.key, JSON.stringify(votes));
    }

    getVotes = () => {
        let votes = JSON.parse(localStorage.getItem(this.key) as any) || {}; // return
        return votes;
    }
}
