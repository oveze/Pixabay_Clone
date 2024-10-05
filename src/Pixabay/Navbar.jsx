import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext';

import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  const {fetchImagesByCategory , setquery} = useContext(PixabayContext)
  return (
    <>
    <div style={{padding:'10px'}}>
<button onClick={()=> fetchImagesByCategory ('nature')} type="button" className="btn btn-outline-primary mx-3">Nature</button>
<button onClick={()=> fetchImagesByCategory ('science')} type="button" className="btn btn-outline-secondary mx-3">Science</button>
<button onClick={()=> fetchImagesByCategory ('computer')} type="button" className="btn btn-outline-success mx-3">Computer</button>
<button onClick={()=> fetchImagesByCategory ('building')} type="button" className="btn btn-outline-danger mx-3">Building</button>
<button onClick={()=> fetchImagesByCategory ('sports')} type="button" className="btn btn-outline-warning mx-3">Sports</button>
<button onClick={()=> fetchImagesByCategory ('transportation')} type="button" className="btn btn-outline-info mx-3">Transportation</button>
<button onClick={()=> fetchImagesByCategory ('travel')} type="button" className="btn btn-outline-light mx-3">Travel</button>
<button onClick={()=> fetchImagesByCategory ('food')} type="button" className="btn btn-outline-primary mx-3">Food</button>
      
    </div>
    <div className='pinkk' style={{width:'800px',padding:'10px'}}>
    <input type="text" onChange={(e)=>setquery(e.target.value)} class="form-control bg-dark text-light" ></input>
    </div>
    </>
  )
}

export default Navbar
