const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const firebaseApp = require('./middleware/auth')
const app = express()
// run middleware for firebase login

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")


const middleware = (req, res, next) => {
    var user = firebaseApp.auth().currentUser
    if (req.user == null) {
        req.user = user
        next()
    } else {
        res.redirect('/')
    }
}

app.get('/', (req, res) => {
    res.render("index", {
        title: 'Home'
    })
})

app.get('/welcome', middleware, (req, res) => {
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