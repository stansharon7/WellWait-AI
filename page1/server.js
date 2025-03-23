const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500', // Replace with your frontend origin
    methods: 'GET,POST,OPTIONS',
    allowedHeaders: 'Content-Type',
}));

const client = new OpenAI({
    baseURL: 'https://api.studio.nebius.com/v1/',
    apiKey: process.env.API_KEY
});

app.use(express.json());

app.post('/getPrediction', async (req, res) => {
    try {
        const response = await client.chat.completions.create({
            model: 'meta-llama/Llama-3.2-1B-Instruct',
            temperature: 0,
            messages: req.body.messages,
        });
        res.json(response);
    } catch (error) {
        console.error("Error interacting with Nebius:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});