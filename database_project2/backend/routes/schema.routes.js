import express from 'express';
import { generateSchemaController } from '../controllers/schema.controller.js';

const router = express.Router();

router.post('/generate', generateSchemaController);

export default router;
