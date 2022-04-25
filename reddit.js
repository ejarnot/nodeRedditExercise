const fetch = require("isomorphic-fetch")
const { join } = require("path")
const { writeFile } = require("fs")

const dataPath = join(__dirname, "./popular-articles.json")

fetch("https://reddit.com/r/programmingHumor.json")
    .then((res) => res.json())
    .then(({data: { children }}) =>{
        let articles =  children.map(({ data: { url, author, title } }) => {
            return { url, author, title };
        });

    
        writeFile(dataPath, JSON.stringify(articles), (err) => {
            if (err) {
            console.error(err);
            } else {
            console.log("Successfully wrote to file.");
            }
         });
    })
