const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:false}));

app.get('/user', (req, res) => {

    console.log(req.query);
    let name = req.query.name;
    let surname = req.query.surname;

    res.send('Name: ' + name + ', Surname: ' + surname);
})

app.get('/user2/:name/:surname', (req, res) => {

    console.log(req.params);
    let name = req.params.name;
    let surname = req.params.surname;

    res.send('Name: ' + name + ', Surname: ' + surname);
})

app.post('/user', (req, res)=>{
    console.log(req.body);
    res.send("Hello", req.body);

    let name = req.body.name;
    let surname = req.body.surname;

    res.send('Name: ' + name + ', Surname: ' + surname)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});