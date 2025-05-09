import { Router } from 'express';
const router = Router();

import receptController from '../controllers/recept-controller.js';

router.get('/', receptController.nactiVse);
router.post('/', receptController.vloz);
router.get('/:id', receptController.nactiPodleId);

export default router;