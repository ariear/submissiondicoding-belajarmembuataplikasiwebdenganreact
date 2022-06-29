const NewNote = () => {
    return (
        <div className="new-note">
            <h2>Buat catatan baru</h2>
            <div className="form-add">
                <p>Sisa karakter : 50</p>
                <input type="text" placeholder="tulis judul catatan" required />
                <textarea cols="50" rows="10" placeholder="tulis catatan disini"></textarea>
                <button>Buat</button>
            </div>
        </div>
    )
}

export default NewNote