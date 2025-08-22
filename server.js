const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/portfolioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const VisitSchema = new mongoose.Schema({
  action: String,       
  timestamp: { type: Date, default: Date.now }
});

const Visit = mongoose.model('Visit', VisitSchema);


app.post('/log', async (req, res) => {
  const { action } = req.body;
  try {
    const visit = new Visit({ action });
    await visit.save();
    res.status(201).json({ message: 'Logged successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Logging failed' });
  }
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
