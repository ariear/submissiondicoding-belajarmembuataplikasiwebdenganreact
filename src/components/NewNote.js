const NewNote = ({addNewNoteHandle,formvalue, onTitleHandle,onBodyHandle}) => {
    return (
        <div className="new-note">
            <h2>Buat catatan baru</h2>
            <form onSubmit={addNewNoteHandle} >
            <div className="form-add">
                <p>Sisa karakter : {50 - (formvalue.title).length }</p>
                <input type="text" placeholder="tulis judul catatan" value={formvalue.title} onChange={(event) => onTitleHandle(event.target.value)} required />
                <textarea cols="50" rows="10" placeholder="tulis catatan disini" value={formvalue.body} onChange={(event) => onBodyHandle(event.target.value) } ></textarea>
                <button>Buat</button>
            </div>
            </form>
        </div>
    )
}

export default NewNote