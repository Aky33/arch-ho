import { Router } from 'express';
const router = Router();

import kategorieController from '../controllers/kategorie-controller.js';

router.get('/', kategorieController.nactiVse);
router.post('/', kategorieController.vloz);
router.get('/:id', kategorieController.nactiPodleId);

export default router;