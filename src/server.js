const proffys =[
    {
        name:"teste", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" 
    },
    {
        name:"teste", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" 
    },
    {
        
    }
]


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html",{proffys})
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}





const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


//configurar nunjucks
nunjucks.configure('src/views/',{
    express: server,
    noCache: true,
})

server
//configurar arquivos estáticos (css, scripts, imagens )
.use(express.static("public"))
// toas de aplicação 
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500 )



























/*

.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})

.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})



 */
