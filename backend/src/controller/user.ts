import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername } from '../services/user';
import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, password , role} = req.body;

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
        const newUser = await createUser(username, password,role);

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


export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await findUserByUsername(username);

        if (!user) {
            res.status(401).json({
                success: false,
                message: 'Invalid username or password',
            });
            return;
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({
                success: false,
                message: 'Invalid username or password',
            });
            return;
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
            expiresIn: '1h',
        });

        res.status(200).json({
            success: true,
            message: 'Login successful!',
            token: token,
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
