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
            initCustomer();
        });
    }).catch(err=>{
        console.log('Connot Connect to MongoDB')
        process.exit()
    })

app.use(cors())
require('./routes/route.js')(app);

const server = app.listen(process.env.PORT || 3000, ()=>{
    console.log('Run')
})
//const server = app.listen(3000, ()=>{
//    let port = server.address().port;
//    console.log('Run at http://localhost:%s', port)
//})

function initCustomer(){
    let data = [
        {
            CustomerId: 1001,
            FullName: "Krisada",
            Address: "Nonthaburi"
        },
        {
            CustomerId: 1002,
            FullName: "Ton",
            Address: "Bangkok"
        },
        {
            CustomerId: 1003,
            FullName: "Dread",
            Address: "Chiangmai"
        },
    ]
    for(let i = 0; i < data.length; i++){
        const c = new Customer(data[i]);
        c.save()
    }
    console.log('Create Customer Complete')
}

/*
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/static/main.html")
})
app.get('/home', (req, res)=>{
    res.sendFile(__dirname + "/static/home.html")
})
app.get('/about', (req, res)=>{
    res.sendFile(__dirname + "/static/about.html")
})
app.get('/help', (req, res)=>{
    res.sendFile(__dirname + "/static/help.html")
})
app.get('*',(req, res)=>{
    res.sendFile(__dirname + "/static/404.jpg")
})
*/
/*
app.listen(2002, ()=>{
    let port = server.address().port
    console.log("Start Server Port [2002]")
    console.log('Run at http://localhost:%s', port)   
})
*/