class Voting {
    constructor(user, vote){
        this.user = user;
        this.vote = vote;
    }

    static getMaxCandidates(){
        return 3;
    }
}