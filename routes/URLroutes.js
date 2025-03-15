const express = require('express')
const router = express();
const {getAllurls, addUser, getUserAnalyticsByID, getUserWithID} = require('../controllers/URLroutes')

router.get("/",getAllurls)

router.get("/:id",getUserWithID)

router.post("/",addUser)

router.get("/analytics/:id",getUserAnalyticsByID)

module.exports = router;