const Article = require('../app/controllers/article');
const Carousel = require('../app/controllers/carousel');
const Personal = require('../app/controllers/personal');
const Category = require('../app/controllers/category');

module.exports = function(app) {

  app.use('/api/display/carouselList', Carousel.list)


  app.use('/api/display/personalInformation', Personal.personal)


  app.use('/api/display/categoryList', Category.list)


  app.use('/api/display/allArticle', Article.allArticle)
}
