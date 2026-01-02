import { buildPrompt } from '../utils/promptBuilder.js';
import { normalizeSchema } from '../utils/schemaNormalizer.js';
import { mockSchema } from '../models/schema.model.js';

export const generateSchemaController = async (req, res) => {
  const { prompt, schema, language } = req.body;

  // 🔒 Safe fallback without OpenAI
  if (!prompt) {
    return res.json(schema || mockSchema());
  }

  // 🧠 Later: replace this with OpenAI call
  const generated = mockSchema(prompt);

  const normalized = normalizeSchema(generated);
  res.json(normalized);
};
