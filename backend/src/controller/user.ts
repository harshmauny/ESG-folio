import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername } from '../services/user';

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await findUserByUsername(username);
        if (existingUser) {
            res.status(400).json({
                success: false,
                message: 'Username already exists',
            });
            return; // Ensure the function exits after sending the response
        }

        // Create a new user
        const newUser = await createUser(username, password);

        // Generate a JWT token for the new user
        const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', {
            expiresIn: '1h',
        });

        res.status(201).json({
            success: true,
            message: 'User registered successfully!',
            token: token,
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
