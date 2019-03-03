const express = require('express');
const app = express();
const userController = require('./controllers/userController');

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('welcome to the home page');
});

app.use('/user', userController);

app.listen(3000, () => {
    console.log(`listening to port 3000...`);
});