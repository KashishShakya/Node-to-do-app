import Todo from '../model/Todo.js';

export const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({ task: req.body.task, user: req.user.id });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: 'Error creating todo' });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching todos' });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { task: req.body.task, completed: req.body.completed },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating todo' });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting todo' });
  }
};
