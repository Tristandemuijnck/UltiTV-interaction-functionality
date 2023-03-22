import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'

const server = express()

server.set('view engine', 'ejs')
server.set('views', './views')
server.set('port', process.env.PORT || 8000)

server.use(express.static('public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {



    res.render('index')
})

server.listen(server.get('port'), () => {
    console.log(`Application started on http://localhost:${server.get('port')}`);
})

// Api call function
async function dataFetch(url){
    const data = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)

    return data
}