const Administrator = require('../models/personal')

module.exports = {
    
    personal: (req, res) => {
        Administrator.findOne({_id: '5cb6e8cf27702821e8558c6e'}, (error, administrator) => {
            if(error) {
                return console.log(error)
            }
            res.send({status: 1000, infoemation: null, personal: administrator})
        })
    }
}