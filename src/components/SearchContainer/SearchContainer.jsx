import React from 'react'
import './SearchContainer.css';

import SearchBackground from "../../images/search-background.png";

function SearchContainer() {
  return (
    <div className='SearchContainer'>
        <div className="background">
            <img src={SearchBackground} alt="" width={"100%"} />
        </div>
        <div className="search">
            <input type="text" placeholder='Enter Keywords' className='text-keyword' />
            <input type="text" placeholder='Any Classification' className='text-classification' />
            <button type='submit' className='find-button'>FIND</button>
        </div>
    </div>
  )
}

export default SearchContainer