// routes/documentationRoutes.mjs
import express from 'express';
const router = express.Router();

import { renderDocumentationIndex } from '../controllers/documentationController.mjs';

router.get('/', (req, res) => {
    renderDocumentationIndex(req, res);
});

export default router;
