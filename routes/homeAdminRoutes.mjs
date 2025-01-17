// routes/adminHomeRoutes.mjs
import express from 'express';
const router = express.Router();

import { renderDashboardIndex } from '../controllers/admin/dashboardController.mjs';

router.get('/', (req, res) => {
    renderDashboardIndex(req, res);
});

export default router;
