import express from "express"
import bodyParser from "body-parser"
import fs from "fs"

const server = express();

// Api url
const apiUrl = "https://api.ultitv.fdnd.nl/api/v1"
const postUrl = "https://api.ultitv.fdnd.nl/api/v1/players"

const questionData = await dataFetch(`${apiUrl}/questions`)

// Load json files
const gameData = fs.readFileSync('./public/api/game/943.json')
// Parse data to json object
const parsedData = JSON.parse(gameData)

server.set("view engine", "ejs")
server.set("views", "./views")
server.set("port", process.env.PORT || 8000)

server.use(express.static("public"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.get("/", async (req, res) => {
    const data = parsedData

    // Check if game has statistics
    if (data.hasStatistics === true) {
        let gameStats = fs.readFileSync(`./public/api/game/${data.gameId}/statistics.json`)
        let parsedStats = JSON.parse(gameStats)

        // Lowercase country codes for flag API
        data.team1CountryISO2Code = data.team1CountryISO2Code.toLowerCase()
        data.team2CountryISO2Code = data.team2CountryISO2Code.toLowerCase()

        // Form with request data
        if (!req.query.playerId) {
            res.render('index', {data, parsedStats})
        }else{
            const playerId = req.query.playerId
            // console.log(playerId)
    
            const fileData = fs.readFileSync(`./public/api/facts/Player/${playerId}.json`)
            const parsedPlayerData = JSON.parse(fileData);
    
            // console.log(parsedPlayerData)
            res.render('index', {data, parsedStats, parsedPlayerData})
        }
    } else {
        res.render('index', {data})
    }    
})

server.get("/teams", async (req, res) => {
    res.render('teams')
})

server.get("/players", async (req, res) => {
    res.render('players')
})

server.get("/player", async (req, res) => {
    res.render('player')
})

server.get("/addplayer", async (req, res) => {
    res.render('./modules/forms/playerFact', {questions: questionData.questions})
})

server.post("/addplayer", async (req, res) => {
    req.body.answers = 
    [
        {
            content: req.body.content,
            questionId: req.body.question
        }
    ]

    postJson(postUrl, req.body).then((data) => {
        let newPlayer = req.body

        if (data.succes) {
            res.redirect("/players")
        } else{
            const errMsg = `${data.message}: Creating new player failed.`
            const newplayer = {error: errMsg, values: newPlayer}
            res.render('./modules/forms/playerFact', {questions: questionData.questions, newplayer})
        }
    })
})

server.listen(server.get("port"), () => {
    console.log(`Application started on http://localhost:${server.get("port")}`)
})

// Api call function
async function dataFetch(url) {
    const data = await fetch(url)
        .then((response) => response.json())
        .catch((error) => error)
    return data
}

/**
 * postJson() is a wrapper for the experimental node fetch api. It fetches the url
 * passed as a parameter using the POST method and the value from the body paramater
 * as a payload. It returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @param {*} body the payload to send along
 * @returns the json response from the api endpoint
 */
export async function postJson(url, body) {
	console.log(2, JSON.stringify(body))
    return await fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.json())
    .catch((error) => error)
}