import React from 'react'

export default function Product({img,head,text}) {
  return (
    <div className='row lowerbox-left'>
      <div className='col-lg-2'>
            <img className='box-img' src={img} alt="" />
      </div>
      <div className='col-lg-10'>
            <h6>{head}</h6>
            <p>{text}</p>
      </div>
    </div>
  )
}
