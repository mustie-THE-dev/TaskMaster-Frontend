import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <div className='div-header'>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <h2>Taskmaster Pokemon</h2>
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Link to="/pokemon" className='btn'>
                        Pokemon Feed
                    </Link>
                    <Link to="/" className='btn'>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default  Navbar;