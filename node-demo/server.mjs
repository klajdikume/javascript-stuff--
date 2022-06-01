import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/public/')));

const db = []

app.post('/todo', (req, res) => {
    const newToDo = {
        id: Date.now(),
        text: req.body.text
    }

    db.push(newToDo);

    res.json(newToDo);
})

app.get('/todo', (req, res) => {
    res.json(db);
});

app.get('/', (req, res) => {
    res.send('Hello from my app');
})

app.listen(8000, () => {
    console.log('Server on 8000!')
})

