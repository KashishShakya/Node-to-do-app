// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';

dotenv.config();               // 1️⃣ Load environment variables

const app = express();
app.use(express.json());        // 2️⃣ Parse JSON bodies

// 3️⃣ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 4️⃣ Basic Health Check
app.get('/', (_, res) => res.send('API is running 🚀'));

// 5️⃣ Routes
app.use('/api', authRoutes);        // /api/register  &  /api/login
app.use('/api', protectedRoutes);   // /api/profile (protected)

// 6️⃣ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});