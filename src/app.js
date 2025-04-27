console.log('starting a new project!');

const express = require('express');

const app = express();

// app.listen(3000);

app.get('/user', (req, res) => {
    res.send({ firstName: 'Vinayak', lastName: 'Hegde' });
});

app.post('/user', (req, res) => {
    res.send('Added user record');
});

app.patch('/user', (req, res) => {
    res.send('updated user record') ;
});

app.delete('/user', (req, res) => {
    res.send('Deleted user record');
});

app.use('/test', (req, res) => {
    res.send('Hello from server!');
});

app.listen(3000, () => {
    console.log('Server is successfully listening at port 3000...');
});

// app.use('/hello', (req, res) => {
//     res.send('Hellow hello hello');
// });

// app.use('/', (req, res) => {
//     res.send('Hello from Dashboard updated!');
// });