import express from 'express';
import { Schema } from '../models/Schema.js';

const router = express.Router();

// Save a schema
router.post('/save-schema', async (req, res) => {
  try {
    const { name, description, tables, relations, dialect, userId } = req.body;

    if (!name || !tables) {
      return res.status(400).json({ error: 'Name and tables are required' });
    }

    const schema = new Schema({
      name,
      description,
      tables,
      relations,
      dialect,
      userId: userId || 'anonymous',
    });

    await schema.save();
    res.status(201).json({
      success: true,
      message: 'Schema saved successfully',
      schemaId: schema._id,
      schema,
    });
  } catch (error) {
    console.error('Error saving schema:', error);
    res.status(500).json({ error: 'Failed to save schema', details: error.message });
  }
});

// Get all schemas (dashboard)
router.get('/schemas', async (req, res) => {
  try {
    const { userId } = req.query;
    const filter = userId ? { userId } : {};

    const schemas = await Schema.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: schemas.length,
      schemas,
    });
  } catch (error) {
    console.error('Error fetching schemas:', error);
    res.status(500).json({ error: 'Failed to fetch schemas' });
  }
});

// Get single schema by ID
router.get('/schema/:id', async (req, res) => {
  try {
    const schema = await Schema.findById(req.params.id);

    if (!schema) {
      return res.status(404).json({ error: 'Schema not found' });
    }

    res.status(200).json({
      success: true,
      schema,
    });
  } catch (error) {
    console.error('Error fetching schema:', error);
    res.status(500).json({ error: 'Failed to fetch schema' });
  }
});

// Update schema
router.put('/schema/:id', async (req, res) => {
  try {
    const { name, description, tables, relations, dialect } = req.body;

    const schema = await Schema.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        tables,
        relations,
        dialect,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!schema) {
      return res.status(404).json({ error: 'Schema not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Schema updated successfully',
      schema,
    });
  } catch (error) {
    console.error('Error updating schema:', error);
    res.status(500).json({ error: 'Failed to update schema' });
  }
});

// Delete schema
router.delete('/schema/:id', async (req, res) => {
  try {
    const schema = await Schema.findByIdAndDelete(req.params.id);

    if (!schema) {
      return res.status(404).json({ error: 'Schema not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Schema deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting schema:', error);
    res.status(500).json({ error: 'Failed to delete schema' });
  }
});

export default router;
