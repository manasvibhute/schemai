import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import schemaRoutes from './routes/schema.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/schema', schemaRoutes);

app.get('/', (_, res) => {
  res.send('SchemaAI Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
