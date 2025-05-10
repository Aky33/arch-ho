import { Router } from 'express';
const router = Router();

import receptController from '../controllers/recept-controller.js';

router.get('/', receptController.nactiVse);
router.get('/nahodne', receptController.nactiNahodne);
router.get('/:id', receptController.nactiPodleId);

router.post('/', receptController.vloz);

export default router;