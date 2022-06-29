import { showFormattedDate } from "../utils"

const CardNote = ({deleteNote , archiveNote, id, title,body,createdAt,archived, unArchiveNote}) => {
    return (
        <div className="card-note">
            <h3>{title}</h3>
            <label>{showFormattedDate(createdAt)}</label>
            <p>{body}</p>
            <div>
                <button onClick={() => deleteNote(id)} >Hapus</button>
                <button onClick={() => archived ? unArchiveNote(id) : archiveNote(id) } style={{ backgroundColor: archived ? '#3AB0FF' : '#FFC300' }} >{ archived ? 'Aktifkan' : 'Arsipkan' }</button>
            </div>
        </div>
    )
}

export default CardNote