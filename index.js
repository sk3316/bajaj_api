const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
//   const user_id = "john_doe_17091999"; // Replace with dynamic user_id logic if needed
//   const email = "john@xyz.com"; // Replace with actual email logic if needed
//   const roll_number = "ABCD123"; // Replace with actual roll number logic if needed

  const user_id = 'shitanshu_priyadarshi_26052004';
  const email = 'sk3316@srmist.edu.in';
  const roll_number = 'RA2111033010107';

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

  res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
