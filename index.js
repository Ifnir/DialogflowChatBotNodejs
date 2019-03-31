const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()

// run middleware for firebase login

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")

const server = require('http').createServer(express)
const io = require('socket.io')(server)

// io.on('connection', function(socket){
//     console.log('a user connected' + socket);
// })
/**
 * https://itnext.io/building-a-node-js-websocket-chat-app-with-socket-io-and-react-473a0686d1e1
 * 
 * make a new serverbackend for socket
 */

app.get('/', (req, res) => {
    res.render("chat", {
        title: 'Chat',
    })
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
