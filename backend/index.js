const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Helper function to separate numbers and alphabets
function processData(data) {
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length > 0 
        ? [alphabets.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1).pop()]
        : [];
    return { numbers, alphabets, highestAlphabet };
}

// POST route to process data
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input format' });
    }

    const { numbers, alphabets, highestAlphabet } = processData(data);

    const response = {
        is_success: true,
        user_id: "shitanshu_priyadarshi_26052004", 
        email: "sk3316@srmist.edu.in",
        roll_number: "RA2111033010107",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    };

    res.json(response);
});

// GET route to return the operation code
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
