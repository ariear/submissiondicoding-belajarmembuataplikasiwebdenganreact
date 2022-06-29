import CardNote from "./CardNote"

const ActiveNote = ({notes , deleteNote, archiveNote,unArchiveNote}) => {
    return (
        <div className="active-note">
            <h2>Catatan</h2>
            <div className="wrap-notes">
                {
                    notes.length ?
                    notes.map((note,key) => 
                        !note.archived && <CardNote key={key} deleteNote={deleteNote} archiveNote={archiveNote} unArchiveNote={unArchiveNote} {...note} />
                    )
                                :
                    <p>Belum ada catatan</p>
                }
                {
                    notes.filter(note => note.archived).length < 0 && <p>Belum ada catatan</p>
                }
            </div>
        </div>
    )
}

export default ActiveNote