import { Db } from 'mongodb';
import { hashPassword } from '../utils/utils';
import { connectDB } from '../db/connection';

export const findCompanyById = async (id: string): Promise<any | null> => {
    const db = await connectDB();

    //ToDo
};

