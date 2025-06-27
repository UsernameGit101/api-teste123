const express = require('express');
const cors = require('cors');

const app = express();

// Habilita CORS para todas as origens (ideal para dev, não produção)
app.use(cors());

// origem específica:
// app.use(cors({ origin: 'https://api-teste123-frontend.onrender.com' }));


app.use(express.json());

// rotas
app.get('/api/businesses', (req, res) => {
  res.json([{ id: 1, name: 'Cervejaria da avenida' }]);
});