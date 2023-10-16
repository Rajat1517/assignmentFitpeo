import React from "react";

function Cards({src,heading,tail,largeText}) {
    return(
        <div className="row card-item">
          <div className="col-lg-6 -6 card-item-left">
            <img id="card-img" src={src} alt="" />
          </div>  
          <div className="col-lg-6 -6 card-item-right">
            <p id="card-text">{heading} <h5>{largeText}</h5> {tail}</p>
          </div>
        </div>
    )
}

export default Cards;