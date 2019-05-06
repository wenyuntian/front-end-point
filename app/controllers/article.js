const Article = require('../models/article')

module.exports = {
    
    add: (req, res) => {
        Article.find({}, (error, articleList) => {
            res.send({name: articleList})
        })
    }
}