import { MongoClient, MongoClientOptions, ServerApiVersion, Db } from 'mongodb';

const uri = 'mongodb+srv://sudama:nlZEA8kGlLDzIEgo@bitsplease.nhu4x.mongodb.net/?retryWrites=true&w=majority&appName=bitsPlease';

// Replace <password> with your actual MongoDB Atlas password
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
} as MongoClientOptions);

let db: Db;

export const connectDB = async (): Promise<Db> => {
    if (db) return db; // Return the existing connection if already connected

    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        db = client.db('bitsplease'); // Replace with your database name
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process if the connection fails
    }
};

export const closeDB = async (): Promise<void> => {
    try {
        await client.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
    }
};