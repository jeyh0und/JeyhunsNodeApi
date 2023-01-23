const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const https = require("https")


const instrument = {
    instruments: [{ "name": "Guitarr", "kind": "String instrument" },
    { "name": "Piano", "kind": "PlingPlong instrument" },
    { "name": "violin", "kind": "Stroke instrument" }]
}

app.get("/joke", (req, res) => {
    https.get("https://api.chucknorris.io/jokes/random", (response) => {
        response.on("data", (data) => {
            res.send(JSON.parse(data))
        })
    }).on("Error", (err)=>{
        console.log("There was an error " + err.message)
    })
})

app.get("/", (req, res) => {
    res.send(instrument)
})



app.listen(PORT, () => {
    console.log("Listening to port " + PORT)
})