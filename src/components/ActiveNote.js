import CardNote from "./CardNote"

const ActiveNote = ({notes , deleteNote}) => {
    return (
        <div>
            <h2>Catatan</h2>
            <div className="wrap-notes">
                {
                    notes.length ?
                    notes.map((note,key) => 
                        !note.archived && <CardNote key={key} deleteNote={deleteNote} {...note} />
                    )
                                :
                    <p>Belum ada catatan</p>
                }
                {
                    notes.filter(note => note.archived).length > 0 && <p>Belum ada catatan</p>
                }
            </div>
        </div>
    )
}

export default ActiveNote