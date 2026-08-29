const db = require('../db/db');

const getAllNotes = () =>{
    return db.prepare("Select * from notes").all();
};

const getNoteById = (id) => {
    return db.prepare("Select * from notes where id = ?").get(id);
}

const createNote = (content) =>{
    const stmt = db.prepare("Insert into notes (content) values (?)");
    const result = stmt.run(content);

    return getNoteById(result.lastInsertRowid);
}

const deleteNote = (id) =>{
    const result = db.prepare("Delete from notes where id = ?").run(id);
    return result.changes > 0;
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    deleteNote
};
