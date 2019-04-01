const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 3000
const http = require('http').createServer(express)
const io = require('socket.io')(http)
const diarre = require('./dialogflow/init')

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")



io.on('connection', function(socket) {
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);

        diarre(msg).then((dar) => {
            console.log(dar)
        })

      });
    console.log('Client connected...');
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });

      socket.on('disconnect', function(){
        console.log('user disconnected');
      });

     
});

app.get('/', (req, res, next) => {
    res.render("chat", {
        title: 'Chat',
    })
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
http.listen(5000, function() {
    console.log('listen on *:5000')
})
