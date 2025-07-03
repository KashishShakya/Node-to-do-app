import express from 'express';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/profile', requireAuth, (req, res) => {
  res.json({ message: `Welcome, ${req.user.email}` });
});

export default router;