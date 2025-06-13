const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_FILE = path.join(__dirname, 'data.json');

app.use(express.json());
app.use(express.static(__dirname));

function loadData() {
  if (fs.existsSync(DATA_FILE)) {
    try {
      const content = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(content);
    } catch (err) {
      console.error('Error reading data.json:', err);
    }
  }
  // If no data file, load default from defaultData.json if exists
  const defaults = require('./defaultData.json');
  return defaults;
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/data', (req, res) => {
  const data = loadData();
  res.json(data);
});

app.post('/api/data', (req, res) => {
  const { workDays, completedItems } = req.body;
  if (!Array.isArray(workDays) || typeof completedItems !== 'object') {
    return res.status(400).json({ error: 'Invalid data format' });
  }
  saveData({ workDays, completedItems });
  res.json({ status: 'ok' });
});

app.post('/api/reset', (req, res) => {
  const defaults = require('./defaultData.json');
  saveData(defaults);
  res.json({ status: 'reset' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
