const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'test@example.com' && password === 'password123') {
        res.send('Login réussi !');
        res.json({ success: true, message: 'Login réussi !' });
        console.log('Success');
    } else {
        res.send('Identifiants invalides. Veuillez réessayer.');
        res.json({ success: false, message: 'Identifiants Invalides !' });
        console.log('Unsuccessful');
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
