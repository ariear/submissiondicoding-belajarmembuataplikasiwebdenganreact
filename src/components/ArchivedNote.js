import CardNote from "./CardNote"

const ArchivedNote = ({notes , deleteNote, unArchiveNote, inputSearch}) => {
    return (
        <div>
        <h2>Catatan Diarsipkan</h2>
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
                    note.archived && <CardNote key={key} deleteNote={deleteNote} unArchiveNote={unArchiveNote} {...note} />
                )
                            :
                <p>Belum ada catatan</p>
            }
            {
                notes.length ? notes.filter(note => note.archived).length <= 0 && <p>Belum ada catatan</p> : false
            }
        </div>
    </div>
    )
}

export default ArchivedNote