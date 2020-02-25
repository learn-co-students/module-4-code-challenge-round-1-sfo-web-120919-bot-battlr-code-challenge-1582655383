import React from 'react'


 const Search = (props) => {
    return (
        <div className="search">
           <input value={props.query} onChange={props.handleSearchChange} name="search" id="search" /><label>Search</label>
        </div>
    )
}

export default Search