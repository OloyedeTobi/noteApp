import { useState } from "react";
import {nanoid} from "nanoid"
import Sidebar from "./Components/Sidebar";
import Editor from "./Components/Editor";
import './Styles/app.css';



function App() {

  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
)

function createNewNote() {
    const newNote = {
        id: nanoid(),
        body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
}

function updateNote(text) {
    setNotes(oldNotes => oldNotes.map(oldNote => {
        return oldNote.id === currentNoteId
            ? { ...oldNote, body: text }
            : oldNote
    }))
}

function findCurrentNote() {
    return notes.find(note => {
        return note.id === currentNoteId
    }) || notes[0]
}

return (
    <main>
    {
        notes.length > 0 
        ?
       <div className="split">
            <Sidebar
                notes={notes}
                currentNote={findCurrentNote()}
                setCurrentNoteId={setCurrentNoteId}
                newNote={createNewNote}
            />
             
            {
                currentNoteId && 
                notes.length > 0 &&
                <Editor 
                    currentNote={findCurrentNote()} 
                    updateNote={updateNote} 
                />
            }
        </div>
        :
        <div className="no-notes">
            <h1>You have no notes</h1>
            <button 
                className="first-note" 
                onClick={createNewNote}
            >
                Create one now
            </button>
        </div>
 }  
    
    </main>
)
}


 

export default App;
