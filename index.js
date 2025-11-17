const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const skills = [
  { categoria: 'Lenguajes', items: ['Python', 'Javascript', 'Typescript', 'Java', 'PHP', 'Kotlin'] },
  { categoria: 'Frameworks y Entornos', items: ['React', 'Django', 'Angular', 'Next', 'Node.js', 'Express'] },
  { categoria: 'Bases de datos', items: ['MySQL', 'MongoDB'] },
  { categoria: 'Desarrollo Web', items: ['HTML', 'CSS', 'Bootstrap'] },
  { categoria: 'Herramientas', items: ['Visual Studio Code', 'Android Studio', 'GitHub', 'AWS', 'Google Cloud'] },
  { categoria: 'Idiomas', items: ['Español (Nativo)', 'Inglés (Avanzado)'] }
];

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});