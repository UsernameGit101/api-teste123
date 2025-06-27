
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // importante para o Render
app.get('/api/businesses', (req, res) => {
  res.json([{ id: 1, name: 'Cervejaria da avenida' }]);
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP ativo na porta ${PORT}`);
});