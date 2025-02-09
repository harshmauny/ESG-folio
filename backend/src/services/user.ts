import { Db } from 'mongodb';
import { hashPassword } from '../utils/utils';
import { connectDB } from '../db/connection';

export const createUser = async (username: string, password: string): Promise<any> => {
    const db = await connectDB();
    const hashedPassword = await hashPassword(password);

    const newUser: any = {
        username,
        password: hashedPassword,
    };

    // Fetch the "users" collection
    const usersCollection = db.collection<any>('users');

    // Insert the new user into the collection
    const result = await usersCollection.insertOne(newUser);
    newUser._id = result.insertedId.toString(); // Add the generated _id to the user object
    return newUser;
};




export const findUserByUsername = async (username: string): Promise<any | null> => {
    const db = await connectDB();

    // Fetch the "users" collection
    const usersCollection = db.collection<any>('users');

    // Find a user by username
    return await usersCollection.findOne({ username });
};

