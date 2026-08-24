// Mahmoud × Sara — server.js
// A tiny, no-frills Express server that just serves the static site.
// There is no database, no auth, and nothing to configure here.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything inside /public as static files (index.html, style.css, script.js, images, audio)
app.use(express.static(path.join(__dirname, 'public')));

// Health check — useful to confirm the server is alive
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Mahmoud × Sara is up and running.' });
});

// Everything else falls back to the homepage (simple single-page site)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('');
  console.log('  💌  Mahmoud × Sara is running!');
  console.log(`  →   http://localhost:${PORT}`);
  console.log('');
});
