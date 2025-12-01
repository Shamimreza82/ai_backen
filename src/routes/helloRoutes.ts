import { Router } from 'express';
import { getHello } from '../controllers/helloController';

const router = Router();

router.get('/hello', getHello);
router.get('/', getHello);

export default router;
