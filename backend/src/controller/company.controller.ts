import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const company = async (req: Request, res: Response): Promise<void> => {

    try {
        
    } catch (error) {
        console.error('Error during data addition:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
