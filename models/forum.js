const mongoose = require('mongoose')
const ForumSchema = mongoose.Schema(
    {
        Name: String,
        Message: String,
        Forumid: Number
    },
    {
        versionKey: false
    }
)
module.exports = mongoose.model('forum',ForumSchema)