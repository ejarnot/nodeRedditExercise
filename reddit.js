const fetch = require("isomorphic-fetch")
const { join } = require("path")
const fs = require("fs")

const dataPath = join(__dirname, "./popular-articles.json")

fetch("https://reddit.com/r/popular.json", (err, body) => {
    if(err) console.log(err);
    let articles = []

    JSON.parse(body).data.childre.forEach(item => {
        articles.push({
            title: item.data.title,
            url: item.data.url,
            author: item.data.author
        });
    })
    console.log(articles)
    fs.writeFile(dataPath, JSON.stringify(articles))
})