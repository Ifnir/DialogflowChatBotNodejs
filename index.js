const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) =>
res.render('index', {
    title: 'Home'
    // add module to
}))

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))