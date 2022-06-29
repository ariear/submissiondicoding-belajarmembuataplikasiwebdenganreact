import ActiveNote from "./ActiveNote"
import ArchivedNote from "./ArchivedNote"

const NoteList = ({notes, deleteNote, archiveNote, unArchiveNote}) => {
    return (
        <div className="note-list">
            <ActiveNote notes={notes} deleteNote={deleteNote} archiveNote={archiveNote} />
            <ArchivedNote notes={notes} deleteNote={deleteNote} unArchiveNote={unArchiveNote} />
        </div>
    )
}

export default NoteList