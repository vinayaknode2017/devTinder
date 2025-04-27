console.log('starting a new project!');

const express = require('express');

const app = express();

// app.listen(3000);

app.use('/', (req, res) => {
    res.send('Hello from Dashboard updated!');
});

app.use('/hello', (req, res) => {
    res.send('Hellow hello hello');
});

app.use('/test', (req, res) => {
    res.send('Hello from server!');
});

app.listen(3000, () => {
    console.log('Server is successfully listening at port 3000...');
});