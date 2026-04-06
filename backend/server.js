const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const PORT = 3000;
const instanceId = uuidv4();

let items = [];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const item = {
        id: uuidv4(),
        name: req.body.name
    };
    items.push(item);
    res.status(201).json(item);
});

app.get('/stats', (req, res) => {
    res.json({
        count: items.length,
        instance: instanceId
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});