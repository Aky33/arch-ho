import { Router } from 'express';
const router = Router();

import { nactiVse, vloz, nactiPodleId } from '../controllers/recept-controller';

router.get('/', nactiVse);
router.post('/', vloz);
router.get('/:id', nactiPodleId);

export default router;