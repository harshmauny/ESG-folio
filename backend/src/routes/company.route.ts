import { Router } from 'express';
import { Company } from '../models/company.model';
import { addData, getDataForCompany, getDataForAllCompanies, getAISuggestions } from '../controller/company.controller';
import { verifyToken } from '../utils/utils';


const router = Router();

router.post('/api/company', addData);
router.get('/api/company/:id', getDataForCompany);
router.get('/companies', verifyToken,getDataForAllCompanies);
router.get('/analyze',getAISuggestions)

export default router;