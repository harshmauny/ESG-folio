import { Router } from 'express';
import { Company } from '../models/company.model';
import { addData, getData } from '../controller/company.controller';

const router = Router();

router.post('/api/company', addData);
router.get('/api/company/:id', getData);

export default router;