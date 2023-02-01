const mongoose = require('mongoose')

const ForumSchema = mongoose.Schema(
    {
        ForumId:    Number,
        FullName:   String,
        Message:    String
    },
    {
        versionKey: false
    }
)
module.exports = mongoose.model('Forum',ForumSchema)