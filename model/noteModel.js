const mongoose = require("mongoose");

const notesSchema = {
      country: String,
     rating: Number, 
     nimi: String,
    palaute: String
    
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;