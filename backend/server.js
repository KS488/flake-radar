require('dotenv').config({ path: '../.env.local' });;
// Debugging: log the environment variables to ensure they are loaded
console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY);
console.log('SLACK_WEBHOOK_URL:', process.env.SLACK_WEBHOOK_URL);
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/report-flake', async (req, res) => {
  const { testName, error, repo } = req.body;

  // Log to Supabase
  await axios.post(`${process.env.SUPABASE_URL}/rest/v1/flaky_tests`, {
    test_name: testName,
    error,
    repo,
    timestamp: new Date().toISOString()
  }, {
    headers: {
      apikey: process.env.SUPABASE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  // Send Slack alert
  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    text: `⚠️ Flaky test detected: *${testName}*\nRepo: ${repo}\nError: ${error}`
  });

  res.send({ status: 'ok' });
});

app.listen(3001, () => {
  console.log('Backend running on port 3001');
});
