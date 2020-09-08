const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const server = express();

server.use(express.urlencoded({extendes: true}))
server.use(express.json())
// server.use(express.static(path.join(process.cwd(), 'img/view/view2' )))

server.set('view engine', '.hbs');
server.engine('.hbs', expressHandlebars({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'viw'))

server.get('/', (req, res) => {
    // console.log(req);
    // res.write('sdkmksfmd k')
    // res.end(' aaaaaaa')
  // res.json('From JSON')
  //   res.status(400).end('ds')
// res.sendStatus(401)


res.render('main')
})

server.get('/users', (req, res) => {

    res.end();
})

server.post('/users', (req, res) => {
    console.log(req.body.hi)
    res.end('Users create!');
})

server.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('port 5000 work')
})
