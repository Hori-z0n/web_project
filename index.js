const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dbConfig = require('./config/mongodb.config.js')
const Customer = require('./models/forum.js')

const cors = require('cors')
const app = express();

var app = require('express')
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
    .then(()=>{
        Customer.deleteMany({},(err)=>{
    if(err){
        process.exit();
            }
            console.log("Remove Collection of Customer")
            initForum();
        });
    }).catch(err=>{
        console.log('Connot Connect to MongoDB')
        process.exit()
    })

app.use(cors())
require('./routes/route.js')(app);

var server_port = process.env.PORT||3000
http.listen(server_port)
const server = app.listen(3000, ()=>{
    let port = server.address().port
    console.log('Run at http://localhost:%s', port)
})
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/The_project.html")
})
app.get('/home', (req, res)=>{
    //res.send("Home page")
    res.sendFile(__dirname + '/home.html')
})
app.get('/about', (req, res)=>{
    res.sendFile(__dirname + "/about.html")
})
app.get('/help', (req, res)=>{
    res.sendFile(__dirname + "/help.html")
})
app.get('/board',(req, res)=>{
    res.sendFile(__dirname + "/web_board2.html")
})
app.get('*',(req, res)=>{
    res.send('404 error')
    //res.sendFile(__dirname + "404.jpg")
})


function initForum(){
    let data = [
        {
            ForumId: 1001,
            FullName: "Krisada",
            Message: "Hello"
        },
        {
            ForumId: 1002,
            FullName: "Ton",
            Message: "Konichiwa"
        },
        {
            ForumId: 1003,
            FullName: "Dread",
            Message: "What Happen"
        },
    ]
    for(let i = 0; i < data.length; i++){
        const c = new Customer(data[i]);
        c.save()
    }
    console.log('Create Customer Complete')
}

/*
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dbConfig = require('./config/mongodb.config.js')
const Forum = require('./models/forum.js')

const cors = require('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
    .then(()=>{
        Customer.deleteMany({},(err)=>{
    if(err){
        process.exit();
            }
            console.log("Remove Collection of Customer")
            initforum();
        });
    }).catch(err=>{
        console.log('Connot Connect to MongoDB')
        process.exit()
    })

app.use(cors())
require('./routes/route.js')(app);

const server = app.listen(3000, ()=>{
    let port = server.address().port
    //console.log("Start Server Port [3000]")
    console.log('Run at http://localhost:%s', port)   
})
function initforum(){
    let data = [
        {
            Forumid: 1001,
            Name: "Krisada",
            Message: "What happen"
        },
        {
            Forumid: 1001,
            Name: "Felix",
            Message: "Not thing"
        },
        {
            Forumid: 1001,
            Name: "Mical",
            Message: "OK"
        },
    ]
    for(let i = 0; i < data.length; i++){
        const c = new Forum(data[i]);
        c.save()
    }
    console.log('Create Message Complete')
}
//const server = app.listen(process.env.PORT || 3000, ()=>{
//    console.log('Run')
//})
//const server = app.listen(3000, ()=>{
//    let port = server.address().port;
//    console.log('Run at http://localhost:%s', port)
//})
/*



*/