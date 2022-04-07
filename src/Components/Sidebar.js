const Sidebar = ({notes, currentNote, setCurrentNoteId, newNote}) =>{

    const noteElement = notes.map((note, index) =>(
    <div key={note.id}>
       <div 
            className= {`title ${note.id === currentNote.id ? "selected" : ""}`}
            onClick={() => setCurrentNoteId(note.id)}>

         <p className="note-title">Note {index + 1}</p>
       </div>
    </div>
))
     return(
         <div className="side-bar">
            <div className = "header">
                <h1>Notes</h1>
                <p className="add-note" onClick={newNote}>+</p>
            </div>

            {noteElement}
         </div>
     )

}

export default Sidebar;