const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8001

const notes = ["These are os notes" , "these are cn notes"];

app.get("/notes" , (req , res , next) =>{
    res.json(notes)
})

app.get("/notes/:id" , (req , res , next) =>{
    try{
        const idx = Number(req.params.id);

        if(isNaN(idx)){
            throw new Error("ID must be a valid Number");
        }

        const note = notes[idx];

        if(!note){
            throw new Error("Note not found");
        }

        res.json({note:note});
    }
    catch(err){
        res.status(400).json({
            error : err.message
        })
    }
})

app.post("/notes",(req , res , next) =>{
    const new_notes = req.body.note;
    notes.push(new_notes);
    res.send("New notes are appended to the array")
})

app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    // Directly remove 1 item at position 'id'
    notes.splice(id, 1);

    res.send(`Note at index ${id} has been deleted.`);
});


app.listen(PORT,() =>{
    console.log(`server is reponding on http://localhost:${PORT}/notes`)
})