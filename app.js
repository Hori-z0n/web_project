const express = require('express')
const socketio = require('socket.io')
const app = express();
const port = 3000;

app.set('view engine', "ejs");
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render("home");
})
app.get('/home', (req, res)=>{
    res.render("home");
})
app.get('/about', (req, res)=>{
    res.render("about");
})
app.get('/help', (req, res)=>{
    res.render("help");
})
app.get('/room', (req, res)=>{
    res.render("index");
})
app.get('/login', (req, res)=>{
    res.render("login");
})
app.get('/register', (req, res)=>{
    res.render("register");
})
const server = app.listen(process.env.PORT||port, ()=>{
    console.log("server is runing...")
})

const io = socketio(server);

io.on('connection', socket =>{
    console.log("New user connected")

    socket.username = "Anonymous"
    socket.on("charnge_username", data=>{
        socket.username = data.username
    })

    socket.on("new_message", data=>{
        console.log("new message");
        io.sockets.emit("receive_message", {message:data.message , username: socket.username})
    })
    socket.on('typing', data=>{
        socket.broadcast.emit('typing', {username: socket.username})
    })
})