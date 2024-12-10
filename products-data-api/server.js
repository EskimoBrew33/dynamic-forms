const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Path to JSON files
const productConfigPath = path.join(__dirname, 'data', 'product-data.json');
const coverageConfigPath = path.join(__dirname, 'data', 'coverage-data.json');

// GET endpoints
app.get('/api/product-data', async (req, res) => {
    try {
        const data = await fs.readFile(productConfigPath, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: 'Error reading product configuration' });
    }
});

app.get('/api/coverage-data', async (req, res) => {
    try {
        const data = await fs.readFile(coverageConfigPath, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: 'Error reading coverage configuration' });
    }
});

// PUT endpoints for updating configurations
app.put('/api/product-data', async (req, res) => {
    try {
        await fs.writeFile(productConfigPath, JSON.stringify(req.body, null, 2));
        res.json({ message: 'Product configuration updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error updating product configuration' });
    }
});

app.put('/api/coverage-data', async (req, res) => {
    try {
        await fs.writeFile(coverageConfigPath, JSON.stringify(req.body, null, 2));
        res.json({ message: 'Coverage configuration updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error updating coverage configuration' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});