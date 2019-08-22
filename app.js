// D:\OneDrive\GitProjects\myapp
const express = require('express');
const request = require("request-promise")
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/yugioh_card", async (req, res) => {
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://db.ygoprodeck.com/api/v5/randomcard.php",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const yugiohResponse = await request(settings).catch(error => console.log(error));
    res.status(200).send({
        SUCCESS: "true",
        message: "Reached API Successfuly",
        card: yugiohResponse
    });
});

app.get("/yugioh", async (req, res) => {
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://db.ygoprodeck.com/api/v5/cardinfo.php",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const yugiohResponse = await request(settings).catch(error => console.log(error));
    res.status(200).send({
        SUCCESS: "true",
        message: "Reached API Successfuly",
        cards: yugiohResponse
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
