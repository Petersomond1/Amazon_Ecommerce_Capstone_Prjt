import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'amazon_ecommerce_mysqldb'
});

db.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// POST endpoint
app.post('/api/products', (req, res) => {
    const product = req.body;
    const query = 'INSERT INTO products SET ?';
    db.query(query, product, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

// PUT endpoint
app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const query = 'UPDATE products SET ? WHERE id = ?';
    db.query(query, [product, id], (error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

// DELETE endpoint
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, id, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000'); // shows at the server/console
});





app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'server.js'));
    // res.send('Server is ready'); // shows at the desktop/browser
});

