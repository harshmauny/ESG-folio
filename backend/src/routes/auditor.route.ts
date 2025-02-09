import { Router, Request, Response } from 'express';
import { getPendingCompanies } from '../controller/auditor.controller';

const router = Router();

// Get all pending companies
router.get('/pending-companies', getPendingCompanies);

// Update company status
//router.post('/api/auditor/company/:id', updateCompanyStatus);

export default router;