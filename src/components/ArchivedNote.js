import CardNote from "./CardNote"

const ArchivedNote = ({notes , deleteNote, unArchiveNote}) => {
    return (
        <div>
        <h2>Catatan Diarsipkan</h2>
        <div className="wrap-notes">
            {
                notes.length ?
                notes.map((note,key) => 
                    note.archived && <CardNote key={key} deleteNote={deleteNote} unArchiveNote={unArchiveNote} {...note} />
                )
                            :
                <p>Belum ada catatan</p>
            }
            {
                notes.length > 0 &&
                    notes.filter(note => !note.archived).length < 0 && <p>Belum ada catatan</p>
            }
        </div>
    </div>
    )
}

export default ArchivedNote