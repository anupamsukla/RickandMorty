import React from 'react'
import Search from '../assests/1.webp'

export default function Searchbar({ name, handleSearch }) {
    return (

        <div className='searchbar'>
            <div>
                <img src={Search} alt='icon' />
            </div>
            <input type="text" value={name} onChange={(ev) => handleSearch(ev)} placeholder="Search for a Contact"></input>
        </div>

    )
}
