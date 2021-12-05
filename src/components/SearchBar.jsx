import React from 'react'

function SearchBar(props) {

    const {search} = props
    return (
        <div>
            <input type="text" onChange={search} placeholder="Search for goodies"/>
        </div>
    )
}

export default SearchBar
