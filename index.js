const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const diarre = require('./dialogflow/init')
// run middleware for firebase login

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")

var text = diarre().then((text) => {
console.log(text)
})



app.get('/', (req, res) => {
    
    res.render("chat", {
        title: 'Chat',
        prop: text
    })
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))