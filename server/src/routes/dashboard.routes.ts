import { Router } from 'express';
import { getDashboardMetricts } from '../controllers/dashboard';

const router = Router();

router.get('/', getDashboardMetricts);

export default router;
