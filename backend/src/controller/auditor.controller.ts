import { Request, Response } from 'express';
import { connectDB } from '../db/connection';
import { Company } from '../models/company.model';

export const getPendingCompanies = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const db = await connectDB();
        const pendingCompanies = await db.collection('company').find({ 'status': 'pending' }).toArray();
        
        res.status(200).json({
            success: true,
            data: pendingCompanies
        });
    } catch (error) {
        console.error('Error fetching pending companies:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};


export const updateCompanyStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const companyId = req.params.id;
        const { status } = req.body;
        const db = await connectDB();
        
        // Convert string ID to MongoDB ObjectId
        const { ObjectId } = require('mongodb');
        const objectId = new ObjectId(companyId);

        const result = await db.collection('company').findOneAndUpdate(
            { _id: objectId },
            { $set: { status: status } },
            { returnDocument: 'after' }
        );

        if (!result) {
            res.status(404).json({
                success: false,
                message: 'Company not found'
            });
        }

        res.status(200).json({
            success: true,
            message: `Company status updated to ${status}`,
            data: result
        });

    } catch (error) {
        console.error('Error updating company status:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};