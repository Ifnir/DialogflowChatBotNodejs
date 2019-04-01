const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 3000

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")

const server = require('http').createServer(express)
const io = require('socket.io')(server)

io.on('connection', function(client) {
    console.log('Client connected...');
    
    client.on('join', function(data) {
    	console.log(data);
    });

});

app.get('/', (req, res, next) => {
    res.render("chat", {
        title: 'Chat',
    })
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
