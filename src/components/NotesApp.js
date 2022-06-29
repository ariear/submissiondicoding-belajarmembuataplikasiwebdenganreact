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
        this.archiveNoteHandle = this.archiveNoteHandle.bind(this)
        this.unArchiveNoteHandle = this.unArchiveNoteHandle.bind(this)
    }

    deleteNoteHandle(id){
        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: this.state.notes.filter(note => note.id !== id)  
            }
        })
    }

    archiveNoteHandle(id){
        let note = this.state.notes.filter(note => note.id === id)
        note[0].archived = true

        let newNote = this.state.notes.filter(note => note.id !== id)
        newNote.push(note[0])

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: newNote
            }
        })
    }

    unArchiveNoteHandle(id){
        let note = this.state.notes.filter(note => note.id === id)
        note[0].archived = false

        let newNote = this.state.notes.filter(note => note.id !== id)
        newNote.push(note[0])

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: newNote
            }
        })
    }

    render(){
        return(
            <div className="main">
                <Navbar />
                <NewNote />
                <NoteList notes={this.state.notes} deleteNote={this.deleteNoteHandle} archiveNote={this.archiveNoteHandle} unArchiveNote={this.unArchiveNoteHandle} />
            </div>
        )
    }
}

export default NotesApp