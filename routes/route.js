module.exports = (app) =>{
    const forum = require("../controllers/controller.js")

    app.get('/', forum.index)
    app.get('/api/forum', forum.findAll)
    app.post('/api/forum',forum.create)
    app.get('/api/forum/:forumId', forum.findById)
    app.put('/api/forum/:forumId', forum.update)
    app.delete('/api/forum/:forumId', forum.delete)
}