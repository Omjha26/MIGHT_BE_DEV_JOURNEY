const express = require("express");
const notesRouter = express.Router();
const notesfromdb = require('../services/Notes_services')
const authenticateToken = require('../middleware/auth');


//==================deprecated==============================
// const fs = require('fs').promises;


// const path = require('path')

// const NOTES_FILE = path.join(__dirname , '..' ,'data', 'notes.json');

// notesRouter.get("/" , async (req , res) =>{
//     try{
//         const notes = await fs.readFile(NOTES_FILE,'utf8');
//         const data = JSON.parse(notes);
//         res.send(data);
//     }catch(error){
//         res.status(500).send("Error reading the file");
//     }
// })

// notesRouter.get("/:id" , async (req , res) =>{
//     try{
//         const id = Number(req.params.id);
//         const notes = await fs.readFile(NOTES_FILE , 'utf8');
        
//         // res.json(notes.id); this wont work. because after readFile the notes are still string
//         // and still the notes doesnt have a .id property.
//         const array = JSON.parse(notes);
//         // if(array[id]){
//         //     const single_note = array[id];
//         //     res.json(single_note);
//         // }else{
//         //     res.status(404).send("Notes not found");
//         // }

//         // after adding the auto generating id using Date.now()
//         // the above code becomes irrelevant. because now the 
//         // user can directly pass the id of the node they want to
//         //  retrieve

//         // therefore

//         const note = array.find(n => n.id === id);
//         if(note){
//             res.json(note);
//         }
//         else{
//             res.status(404).send("Note not found.");
//         }
//     }
//     catch(err){
//         res.status(400).json({
//             error : err.message
//         })
//     }
// },)

// notesRouter.post("/", async (req , res ) =>{
//     try{
//         // const new_notes = req.body; this is genric 
//         //which simply accepts what the user sends in the form of
//         //{note} key value pair and not caring about the value

//         //therefore to add structure to the incoming json we use 
//         const new_notes = {
//             id : Date.now(), // Date.now() is an inbuilt 
//                               // function which is used to generate a random 
//                               // unique id or more like a timestam
//             content : req.body.content,
//             createdAt : new Date().toISOString(),//created at is a good 
//                                                   // example of a timestamp 
//                                                   // (like when a record 
//                                                   // was created)in the form
//                                                   // of yyyy-mm-ddT

//             lastUpdate : new Date().toISOString() //last updated is a good 
//                                                   // example of a timestamp 
//                                                   // (like when a record 
//                                                   // was last updated)
//         }
//         // the above logic just takes req.body ie. the content of the notes
//         // and the id , createdAt and the lastUpdate are generated
//         // by the server itself


//         // steps:-
//         // 1. create const to store the notes as the string use await fs.readfile to get it in the form of the string
//         // 2. convert it into a js object using json parsing
//         // 3. then perform the req. operation
//         // 4. convert it back into string using json stringify
//         // 5. use await fs.writefile to write it back to the file

//         const notes = await fs.readFile(NOTES_FILE , 'utf8');
//         const content = JSON.parse(notes);
//         content.push(new_notes);

//         const updatedString = JSON.stringify(content);

//         await fs.writeFile(NOTES_FILE , updatedString);

//         res.status(201).send("Note added successfully");
//     }catch{
//         res.status(500).send("Error Writing file.");
//     }
// })

// notesRouter.delete("/:id", async (req, res) => {
//     try{
//         const id = Number(req.params.id);
//         const to_be_deleted_array = JSON.parse(await fs.readFile(NOTES_FILE, 'utf8'))
//         const idx = to_be_deleted_array.findIndex(n => n.id === id);
//         if(idx === -1){
//             return res.status(404).send("Note not found");
//         }
//         to_be_deleted_array.splice(idx , 1);

//         await fs.writeFile(NOTES_FILE , 
//             JSON.stringify(to_be_deleted_array)
//         );

//         res.status(200).send("Successfully Deleted.");
//     }catch{
//         res.status(404).send("No record Found.");
//     }
// });


// ======================= i've used route chaining over here =====================

// for the route '/'
// the get method is used to extract all notes
// the post method is used to create a note
notesRouter.route("/")
.get((req , res ) => {
    try{
        const notes = notesfromdb.getAllNotes();
        res.json(notes);
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
})
.post(authenticateToken , (req, res) => {
    try {
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({ error: "Content is required" });
        }
        const newNote = notesfromdb.createNote(content);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//here we are dealing with the route "/:id"
//where : id is the dynamic route paramter ie. the id of the note
//the get method is used to extract a specific note
//the delete method is used to delete a specific note

notesRouter.route("/:id")
.get((req, res) => {
    try {
        const id = Number(req.params.id);
        const note = notesfromdb.getNoteById(id);
        if (note) {
            res.json(note);
        } else {
            res.status(404).json({ error: "Note not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})
.delete(authenticateToken , (req, res) => {
    try {
        const id = Number(req.params.id);
        const deleted = notesfromdb.deleteNote(id);
        if (deleted) {
            res.status(200).send("Note deleted successfully");
        } else {
            res.status(404).send("Note not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = notesRouter;
