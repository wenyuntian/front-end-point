const Category = require('../models/category')

module.exports = {
    
    list: (req, res) => {
        Category.find({}, (error, categoryList) => {
            if(error) {
                return console.log(error)
            }
            res.send({status: 1000, infoemation: null, categoryList: categoryList})
        })
    }
}