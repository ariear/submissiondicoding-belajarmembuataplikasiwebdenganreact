import React from "react";
import Navbar from "./Navbar";
import NewNote from "./NewNote";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class NotesApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getInitialData()
        }

        this.deleteNoteHandle = this.deleteNoteHandle.bind(this)
    }

    deleteNoteHandle(id){
        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: this.state.notes.filter(note => note.id !== id)  
            }
        })
    }

    render(){
        return(
            <div className="main">
                <Navbar />
                <NewNote />
                <NoteList notes={this.state.notes} deleteNote={this.deleteNoteHandle} />
            </div>
        )
    }
}

export default NotesApp