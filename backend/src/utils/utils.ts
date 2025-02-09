import bcrypt from 'bcrypt';


import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    // Get the token from the request headers
    const token = req.headers['authorization']?.split(' ')[1]; // Format: "Bearer <token>"

    if (!token) {
        res.status(401).json({
            success: false,
            message: 'Access denied. No token provided.',
        });
        return;
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, 'your-secret-key') as { userId: string };


        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Invalid or expired token.',
        });
    }
};
const SALT_ROUNDS = 10;

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, SALT_ROUNDS);
};

