class Voting {
    constructor(user, vote){
        this.user = user;
        this.vote = vote;
    }

    static getMaxCandidates(){
        return 3;
    }
}

console.log(Voting.getMaxCandidates()); //3

//Note that you won't be able to call
//.getMaxCandidates() on the result of new Voting
// because it's a static method. It can only be called on the class.(Voting.getMaxCandidates())


/* Another Example  */

class User{

    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    static getVotingAge(){
        return 18;
    }
    canVote(){
        return this.age >= User.getVotingAge();
    }
}

//sample usage
const jennifer = new User("Jennifer", "Doe", 20);
console.log(User.getVotingAge());
console.log(jennifer.canVote());