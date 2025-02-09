import { Router } from 'express';
import { Company } from '../models/company.model';
import { addData, getDataForCompany, getDataForAllCompanies } from '../controller/company.controller';


const router = Router();

router.post('/api/company', addData);
router.get('/api/company/:id', getDataForCompany);
router.get('/api/companies', getDataForAllCompanies);

export default router;