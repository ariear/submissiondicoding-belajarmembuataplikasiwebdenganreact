import SearchNote from "./SearchNote"

const Navbar = ({searchNote}) => {
    return (
        <nav>
            <h2>Notes.</h2>
            <SearchNote searchNote={searchNote} />
        </nav>
    )
}

export default Navbar