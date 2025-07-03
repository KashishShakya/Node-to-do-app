import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todoController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.use(requireAuth); // All routes below require token

router.post('/todos', createTodo);       // Create TODO
router.get('/todos', getTodos);          // Get all TODOs
router.put('/todos/:id', updateTodo);    // Update TODO
router.delete('/todos/:id', deleteTodo); // Delete TODO

export default router;
