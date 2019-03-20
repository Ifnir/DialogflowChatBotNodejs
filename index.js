const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const auth = require('./middleware/auth')
const app = express()
// run middleware for firebase login

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")

app.get('/', (req, res) => {

    res.render("index", {
        title: 'Home'
    })
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))