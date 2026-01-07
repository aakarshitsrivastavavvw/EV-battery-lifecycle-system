import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/battery', (_req, res) => {
  res.json({
    id: 'BAT-001',
    chemistry: 'LFP',
    capacityKWh: 75,
    stateOfHealth: 68,
    warrantyEligible: true
  });
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});