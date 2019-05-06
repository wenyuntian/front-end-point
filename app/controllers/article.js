const Article = require('../models/article')

module.exports = {

    allArticle: (req, res) => {
        Article.find({}, (error, articleList) => {
            if(error) {
                return console.log(error);
            }
            res.send({status: 1000, infoemation: null, articleList: articleList})
        })
    }
}