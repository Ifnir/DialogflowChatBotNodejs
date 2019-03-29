const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const diarre = require('./dialogflow/init')
// run middleware for firebase login

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")

console.log(diarre())



app.get('/', (req, res) => {
    res.render("index", {
        title: 'Home'
    })
})

app.get('/welcome', (req, res) => {
    res.render("welcome", {
    title: 'Welcome',
    })
})
    


app.get('/chat', (req, res) => {
    res.render("chat", {
        title: 'Chat'
    })
})


app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))