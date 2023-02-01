var forum = require('../models/forum.js')

exports.index = (req, res)=>{
    res.send('<h1>Webbord Application</h1><hr><a href = "/api/forum">List</a>')
}
exports.findAll = (req, res)=>{
    forum.find().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).send({
            msg: err.message
        })
    })
}
exports.create = (req, res) =>{
    const f = new forum(req.body)

    c.save().then(data=>{
        res.json(data)
    }).catch(err=>{
        return res.status(500).json({
            msg:"Can not add data bacause" + err.message
        })
    })
}

exports.findById = (req, res)=>{
    forum.findById(req.params.forumId).then(data =>{
        if(!data){
            return res.status(404).json({
                msg: "Not find Record code : " + req.params.forumId
            })
        }
        res.json(data)
    }).catch(err=>{
        return res.status(500).json({
            msg: "Error because : " + err.message
        })
    })
}

exports.update = (req, res) =>{
    forum.findByIdAndUpdate(req.params.ForumId, {$set: req.body}, {new: true})
    .then(data=>{
        if(!data){
            return res.status(404).json({
                msg: "Not find Record code : " + req.params.forumId
            })
        }
        res.json(data)
    }).catch(err=>{
        return res.status(500).json({
            msg: "Can not updata data because : " + err.message
        })
    })
}
exports.delete = (req, res)=>{
    forum.findByIdAndDelete(req.params.forumId)
    .then(data=>{
        if(!data){
            return res.status(404).json({
                msg: "Not find Record code : " + req.params.forumId
            })
        }
        res.json(data)
    }).catch(err=>{
        return res.status(500).json({
            msg: "Can not updata data because : " + err.message
        })
    })
}