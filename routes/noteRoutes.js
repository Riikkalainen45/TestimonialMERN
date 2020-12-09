const express = require("express");
const router = express.Router();
const Note = require("../model/noteModel");

router.route("/create").post((req, res)=>{
    const nimi = req.body.nimi;
    const country = req.body.country;
    const rating = req.body.rating; 
    const palaute = req.body.palaute;
    const newPalaute = new Note({
        nimi,
        country,
        rating, 
        palaute
    });
    newPalaute.save();
})

router.route("/notes").get((req, res) =>{
    Note.find()
    .then(foundNotes => res.json(foundNotes))
})

module.exports = router;