import CardNote from "./CardNote"

const ActiveNote = ({notes , deleteNote, archiveNote,unArchiveNote, inputSearch}) => {
    return (
        <div className="active-note">
            <h2>Catatan</h2>
            <div className="wrap-notes">
                {
                    notes.length ?

                    notes.filter((note) => {
                        if (inputSearch === '') {
                            return note
                        }else if (note.title.toLowerCase().includes(inputSearch.toLowerCase())) {
                            return note
                        }
                        return false
                    }).map((note,key) => 
                        !note.archived && <CardNote key={key} deleteNote={deleteNote} archiveNote={archiveNote} {...note} />
                    )
                                :
                    <p>Belum ada catatan</p>
                }
                {
                    notes.length ? notes.filter(note => !note.archived).length <= 0 && <p>Belum ada catatan</p> : false
                }
            </div>
        </div>
    )
}

export default ActiveNote