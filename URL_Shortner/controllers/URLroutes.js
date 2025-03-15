const URL = require("../models/url");
const shortid = require("shortid");

async function getAllurls(req, res) {
  const allURLs = await URL.find({});

  if (!allURLs) return res.status(404).json({ msg: "no user in database" });

  return res.status(200).json(allURLs);
}

async function addUser(req, res) {
  
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "incomplete information" });

  const SHORTID = shortid();
  await URL.create({
    shortID: SHORTID,
    redirectURL: body.url,
    visitedHistory: [],
    createdBy :  req.user._id
  });
  return res.render("home",{
    msg : "new entry created"
  })
  // return res.status(200).json({ msg: "new entry created" });
}

async function getUserAnalyticsByID(req,res) {
    const shortid = req.params.shortID;
    const result = await URL.findOne({shortid})  
    return res.json({
      totalClicks : result.visitedHistory.length,
      analytics : result.visitedHistory
    })
}

async function getUserWithID (req, res){
  const shortID = req.params.id;
  const entry = await URL.findOneAndUpdate(
    { shortID: shortID }, 
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true } 
  );

  if (!entry) {
    
    return res.status(404).send("Short URL not found");
  }

  return res.redirect(entry.redirectURL); 
}



module.exports = {
  addUser,
  getAllurls,
  getUserAnalyticsByID,
  getUserWithID
};
