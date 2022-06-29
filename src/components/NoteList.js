import ActiveNote from "./ActiveNote"
import ArchivedNote from "./ArchivedNote"

const NoteList = ({notes, deleteNote, archiveNote, unArchiveNote, inputSearch}) => {
    return (
        <div className="note-list">
            <ActiveNote notes={notes} deleteNote={deleteNote} archiveNote={archiveNote} inputSearch={inputSearch} />
            <ArchivedNote notes={notes} deleteNote={deleteNote} unArchiveNote={unArchiveNote} inputSearch={inputSearch} />
        </div>
    )
}

export default NoteList