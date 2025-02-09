import { User } from "./user.model";

export class Investor extends User {
    rewardPoints: number;

    constructor(id: number, name: string, email: string, password: string) {
        super(id, name, email, password, 'investor');
        this.rewardPoints = 0;
    }
}