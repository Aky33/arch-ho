import { Router } from 'express';
const router = Router();

import kategorieController from '../controllers/kategorie-controller.js';

router.get('/', kategorieController.nactiVse);
router.get('/:id', kategorieController.nactiPodleId);

router.post('/', kategorieController.vloz);

export default router;