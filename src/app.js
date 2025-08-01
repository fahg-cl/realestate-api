const express = require('express');
const app = express();

const inmuebles = [
	{ id: 1, direccion: 'Calle 123_1', precio: 150000, tipo: 'Apartamento' },
	{ id: 2, direccion: 'Avenida 456_1', precio: 230000, tipo: 'Casa' },
	{ id: 3, direccion: 'Carrera 789_1', precio: 120000, tipo: 'Estudio' }
];

app.get('/api/inmuebles', (req, res) => {
	res.json(inmuebles);
});

module.exports = app;

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}