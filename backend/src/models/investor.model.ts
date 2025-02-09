import { User } from "./user.model";

export class Investor extends User {
    rewardPoints: number;

    constructor(name: string, email: string, password: string) {
        super( name, email, password, 'investor');
        this.rewardPoints = 0;
    }
}