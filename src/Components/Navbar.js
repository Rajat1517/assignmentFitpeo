import React from 'react'

export default function Navbar(props) {

    return (
        <div >
            <nav id="navbar" className="navbar  justify-content-between">
                <h1 className="navbar-brand">Hi, Shahrukh!</h1>
                <button id="button-nav" className='button-right-side' onClick={()=>{
                            props.setMobile(props.mobile==='inline-block'?'none':'inline-block');
                        }}>Menu</button>
                <div >
                    <form id="search" className="form-inline my-2 my-lg-0">
                        <input  id="search-nav" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>
        </div>
    )
}


