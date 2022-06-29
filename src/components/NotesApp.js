import React from "react";
import Navbar from "./Navbar";
import NewNote from "./NewNote";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class NotesApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getInitialData(),
            inputSearch: '',
            formvalue: {
                id: '',
                title: '',
                body: '',
                archived: false,
                createdAt: ''
            },
            maxchar: 50
        }

        this.deleteNoteHandle = this.deleteNoteHandle.bind(this)
        this.archiveNoteHandle = this.archiveNoteHandle.bind(this)
        this.unArchiveNoteHandle = this.unArchiveNoteHandle.bind(this)
        this.SearchNoteHandle = this.SearchNoteHandle.bind(this)
        this.addNewNoteHandle = this.addNewNoteHandle.bind(this)

        this.onTitleHandle = this.onTitleHandle.bind(this)
        this.onBodyHandle = this.onBodyHandle.bind(this)
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

    SearchNoteHandle(value){
        this.setState((prevstate) => {
            return {
                ...prevstate,
                inputSearch: value
            }
        })
    }

    addNewNoteHandle(event){
        event.preventDefault();
        
        let newState = this.state.notes
        newState.push({
            id: +new Date(),
            title: this.state.formvalue.title,
            body: this.state.formvalue.body,
            archived: this.state.formvalue.archived,
            createdAt: new Date().toISOString().slice(0, 10)
        })

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: newState,
                formvalue: {
                    id: '',
                    title: '',
                    body: '',
                    archived: false,
                    createdAt: ''
                },
                maxchar: 50
            }
        })
    }

    onTitleHandle(value){
        if (value.length > 50) {
            return false
        }
        this.setState((prevstate) => {
            return {
                ...prevstate,
                formvalue: {
                    ...prevstate.formvalue,
                    title: value
                },
                maxchar: value.length === 0 ? 50 : this.state.maxchar - 1
            }
        })
    }

    onBodyHandle(value){
        this.setState((prevstate) => {
            return {
                ...prevstate,
                formvalue: {
                    ...prevstate.formvalue,
                    body: value
                }
            }
        })
    }

    render(){
        return(
            <div className="main">
                <Navbar searchNote={this.SearchNoteHandle} />
                <NewNote addNewNoteHandle={this.addNewNoteHandle} formvalue={this.state.formvalue} onTitleHandle={this.onTitleHandle} onBodyHandle={this.onBodyHandle} maxchar={this.state.maxchar} />
                <NoteList notes={this.state.notes} deleteNote={this.deleteNoteHandle} archiveNote={this.archiveNoteHandle} unArchiveNote={this.unArchiveNoteHandle} inputSearch={this.state.inputSearch} />
            </div>
        )
    }
}

export default NotesApp