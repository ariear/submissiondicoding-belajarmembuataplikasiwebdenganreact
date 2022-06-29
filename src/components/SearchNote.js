
const SearchNote = ({searchNote}) => {
    return (
        <>
        <input type="search" placeholder="Cari catatan" onInput={(event) => searchNote(event.target.value) } />
        </>
    )
}

export default SearchNote