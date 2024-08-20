const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

// Define the path to the JSON file
const jsonFilePath = path.join(__dirname, 'src', 'dashboardData.json');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

// Function to read JSON data from the file
const readJsonFile = () => {
    try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        throw error;
    }
};

// Function to write JSON data to the file
const writeJsonFile = (data) => {
    try {
        fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing to JSON file:', error);
        throw error;
    }
};

// Endpoint to handle adding a new widget
app.post('/add-widget', (req, res) => {
    const newWidget = req.body;

    try {
        // Read current data from JSON file
        const dashboardData = readJsonFile();

        // Find the correct category and add the new widget
        let category = dashboardData.categories.find(cat => cat.id === newWidget.categoryId);
        if (!category) {
            return res.status(400).json({ error: 'Category not found' });
        }
        category.widgets.push({ id: Date.now(), ...newWidget });

        // Write the updated data back to the JSON file
        writeJsonFile(dashboardData);

        res.json({ success: true });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Error updating the dashboard data.' });
    }
});

app.post('/remove-widget', (req, res) => {
    const { categoryId, widgetId } = req.body;

    try {
        // Read current data from JSON file
        const dashboardData = readJsonFile();

        // Find the correct category and remove the widget
        const category = dashboardData.categories.find(cat => cat.id === categoryId);
        if (!category) {
            return res.status(400).json({ error: 'Category not found' });
        }

        // Filter out the widget
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);

        // Write the updated data back to the JSON file
        writeJsonFile(dashboardData);

        res.json({ success: true });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Error updating the dashboard data.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});