import React from 'react'

const Navbar = ({filterData, catlist}) => {
    
  return (

    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
 
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {
            catlist.map((curElem)=>{
                return  (<button type="button" className="btn" onClick={()=>{filterData(curElem)}}>{curElem}</button>)
     
            })
        }
     
 
      </div>
    </div>
  </div>
</nav>
      
      
    </>
  )
}

export default Navbar;
