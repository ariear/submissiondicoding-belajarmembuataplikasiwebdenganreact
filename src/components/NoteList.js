import ActiveNote from "./ActiveNote"

const NoteList = ({notes, deleteNote}) => {
    return (
        <div className="note-list">
            <ActiveNote notes={notes} deleteNote={deleteNote} />
        </div>
    )
}

export default NoteList