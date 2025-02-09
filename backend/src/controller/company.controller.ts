import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Company } from '../models/company.model';
import { findCompanyById } from '../services/company.services';
import { connectDB } from '../db/connection';
import { getAIResponse } from '../utils/ai';

export const addData = async (req: Request, res: Response): Promise<void> => {
    const { name,esg,environment,sociaal,governance,year,e,s,g } = req.body;

    try {
        const db = await connectDB();
        const newCompany = {
            name,
            esg,
            environment,
            sociaal,
            governance,
            year,
            e,
            s,
            g,
        };

        await db.collection("company").insertOne(newCompany);

        res.status(201).json({
            success: true,
            message: 'Company data added successfully',
            data: newCompany,
        });
    } catch (error) {
        console.error('Error during data addition:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export const getDataForCompany = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const db = await connectDB();

        const companyData = await findCompanyById(id);

        if (!companyData) {
            res.status(404).json({
                success: false,
                message: 'Company not found',
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: companyData,
        });
    } catch (error) {
        console.error('Error fetching company data:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

export const getDataForAllCompanies = async (req: Request, res: Response) => {
    try {
        const db = await connectDB();

        const companies = await db.collection("company").find({}).toArray();

      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching companies' });
    }
  };

  export const getAISuggestions = async (req: Request, res: Response) => {
    try {
        const db = await connectDB();
        console.log(req.params);
        const companies = await db.collection("company").find({name:req.query.name}).toArray();
        console.log(companies);
        const aiResponse=await getAIResponse(companies[0])
      res.status(200).json(aiResponse);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching companies' });
    }
  };  


