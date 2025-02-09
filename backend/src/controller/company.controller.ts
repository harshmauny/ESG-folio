import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Company } from '../models/company.model';
import { findCompanyById } from '../services/company.services';

export const addData = async (req: Request, res: Response): Promise<void> => {
    const { e_carbonEmmissions, e_energyEfficiency,e_waterUsage, e_wasteManagement, 
        e_biodiversityImpact, s_employeeDiversityRatio, s_laborPracticesScore, 
        s_workplaceInjuryRate,s_communityInvestment, s_customerSatisfaction, 
        g_boardDiversityRatio, g_executivePayRatio,g_corruptionIncidents,  
        g_shareholderRightsScore, g_dataPrivacyCompliance } = req.body;

    try {
        //ToDo
        
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
      const companies = await Company.find();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching companies' });
    }
  };


