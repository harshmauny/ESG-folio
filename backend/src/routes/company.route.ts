import { Router } from 'express';
import { Company } from '../models/company.model';
import { company } from '../controller/company.controller';

const router = Router();

router.post('/api/company', company);

export default router;