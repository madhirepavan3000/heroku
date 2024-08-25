const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// POST /bfhl Endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Separate numbers and alphabets
    let numbers = data.filter(item => !isNaN(item));
    let alphabets = data.filter(item => isNaN(item));
    let highestLowercaseAlphabet = alphabets.filter(item => /^[a-z]$/.test(item)).sort().slice(-1);

    // Construct the response
    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.status(200).json(response);
});

// GET /bfhl Endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
