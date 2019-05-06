const Carousel = require('../models/carousel')

module.exports = {
    
    list: (req, res) => {
        Carousel.find({type: 1}, (error, carouselList) => {
            if(error) {
                return console.log(error)
            }
            res.send({status: 1000, infoemation: null, carouselList: carouselList})
        })
    }
}