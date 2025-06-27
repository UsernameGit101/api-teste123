const express = require('express');
const cors = require('cors');

const app = express();

// Habilita CORS para todas as origens (ideal para desenvolvimento)
app.use(cors());

// Para permitir apenas uma origem específica (exemplo: produção)
// app.use(cors({ origin: 'https://api-teste123-frontend.onrender.com' }));

app.use(express.json());

// Rota de exemplo
app.get('/api/businesses', (req, res) => {
  res.json([{ id: 1, name: 'Cervejaria da avenida' }]);
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});