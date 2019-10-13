import React from 'react'
import './Searchbox.css'

const Searchbox = props => {
    return (
            <input 
                className="search"
                type="search" 
                placeholder={props.placeholder}
                onChange={props.onSearchChange}
            />

    )
}

export default Searchbox
