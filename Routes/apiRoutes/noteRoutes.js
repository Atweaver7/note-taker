const router = require('express').Router();
const { db } = require('../../Develop/db/db.json')

router.get('/db', (req, res) => {
    let results = db
    if (req.query) {      
    }
    res.json(results)
})

module.exports = 
    router, 
    db;