// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors()); // Enable CORS
// app.use(bodyParser.json()); // Parse JSON bodies

// const user_id = 'shitanshu_priyadarshi_26052004';
// const email = 'sk3316@srmist.edu.in';
// const roll_number = 'RA2111033010107';

// app.post('/bfhl', (req, res) => {
//     try {
//         const data = req.body.data;
//         if (!Array.isArray(data)) {
//             throw new Error('Invalid data format');
//         }

//         const numbers = data.filter(item => !isNaN(item) && item.trim() !== '').map(item => Number(item));
//         const alphabets = data.filter(item => typeof item === 'string' && /^[a-zA-Z]+$/.test(item));

//         const uniqueAlphabets = [...new Set(alphabets)].sort((a, b) => a.localeCompare(b));


//         const highest_alphabet = uniqueAlphabets.length > 0 ? [uniqueAlphabets[uniqueAlphabets.length - 1]] : [];

//         res.json({
//             is_success: true,
//             user_id,
//             email,
//             roll_number,
//             numbers,
//             alphabets: uniqueAlphabets,
//             highest_alphabet
//         });
//     } catch (error) {
//         console.error('Error processing request:', error.message);
//         res.status(500).json({
//             is_success: false,
//             message: error.message
//         });
//     }
// });

// app.get('/bfhl', (req, res) => {
//     res.json({ operation_code: 1 });
// });

// module.exports = app;



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

const user_id = 'shitanshu_priyadarshi_26052004';
const email = 'sk3316@srmist.edu.in';
const roll_number = 'RA2111033010107';

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        if (!Array.isArray(data)) {
            throw new Error('Invalid data format');
        }

        const numbers = data.filter(item => !isNaN(item) && item.trim() !== '').map(item => Number(item));
        const alphabets = data.filter(item => typeof item === 'string' && /^[a-zA-Z]+$/.test(item));

        const uniqueAlphabets = [...new Set(alphabets)].sort((a, b) => a.localeCompare(b));
        const highest_alphabet = uniqueAlphabets.length > 0 ? [uniqueAlphabets[uniqueAlphabets.length - 1]] : [];

        res.json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets: uniqueAlphabets,
            highest_alphabet
        });
    } catch (error) {
        console.error('Error processing request:', error.message);
        res.status(500).json({
            is_success: false,
            message: error.message
        });
    }
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
