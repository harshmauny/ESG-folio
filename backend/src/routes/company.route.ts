import { Router } from 'express';
import { Company } from '../models/company.model';
import { addData, getDataForCompany, getDataForAllCompanies } from '../controller/company.controller';


const router = Router();

router.post('/addCompany', addData);
router.get('/company/:id', getDataForCompany);
router.get('/companies', getDataForAllCompanies);

export default router;