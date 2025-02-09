import { Router, Request, Response } from 'express';
import { getPendingCompanies, updateCompanyStatus } from '../controller/auditor.controller';

const router = Router();

// Get all pending companies
router.get('/pending-companies', getPendingCompanies);

// Update company status
router.post('/company/:id', updateCompanyStatus);

export default router;