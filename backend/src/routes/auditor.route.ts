import { Router } from 'express';
import { getPendingCompanies, updateCompanyStatus } from '../controller/auditor.controller';

const router = Router();

// Get all pending companies
router.get('/api/auditor/pending-companies', getPendingCompanies);

// Update company status
router.post('/api/auditor/company/:id', updateCompanyStatus);

export default router;