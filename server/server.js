const { writeFile, readFile } = require("fs")
const { join } = require("path");

const dataPath = join(__dirname, "../chirps.json")

const chirps = [
    
    {author: "Westley", body: "As you wish" },
    {author: "Vizzini", body: "Never cross a Sicillian when death is on the line!"},
    {author: "Humperdink", body: "You always think everything's a trap. That's why I'm still alive." },
    {author: "Fessik", body: "Anybody want a peanut?"},
    {author: "Inigo", body: "My name is Inigo Montoya. You killed my father, prepare to die." },
    
];

writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if(err) console.log(err);
});

readFile(
    dataPath,
    () => {
        chirps.forEach(post => {
            console.log(`${post.body} \n -${post.author} \n`)
        })
    }
)