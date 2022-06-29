import { showFormattedDate } from "../utils"

const CardNote = ({deleteNote, id, title,body,createdAt}) => {
    return (
        <div className="card-note">
            <h3>{title}</h3>
            <label>{showFormattedDate(createdAt)}</label>
            <p>{body}</p>
            <div>
                <button onClick={() => deleteNote(id)} >Hapus</button>
                <button>Arsipkan</button>
            </div>
        </div>
    )
}

export default CardNote