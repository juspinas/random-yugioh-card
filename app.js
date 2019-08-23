// D:\OneDrive\GitProjects\random-yugioh-card
const express = require('express');
const path = require("path");
const request = require("request-promise")
const app = express();
const port = process.env.PORT || 3000;
app.use("/static", express.static(path.join(__dirname, "public")));
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
    const yugiohResponseObj = JSON.parse(yugiohResponse);
    res.status(200).send({
        name: yugiohResponseObj[0].name,
        type: yugiohResponseObj[0].type,
        image_url: yugiohResponseObj[0].card_images[0].image_url
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
