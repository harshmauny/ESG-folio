export class User {
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;

    constructor(name: string, email: string, password: string, role:string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.createdAt = new Date();
    }
}