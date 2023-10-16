import React from 'react'
import Product from './Product'
import img1 from "../assets/images/abstract.jpg";
import img2 from "../assets/images/sharpens.jpeg";

export default function Lowerbox() {
    return (
        <div className='row lowerbox'>
            <div className='col-lg-8 -8' >
                <div className='chart-text'>
                    <h4>Product Sell</h4>
                    <p>Product Name</p>
                </div>
                <Product img={img1} head="Abstract 3D" text="Lorem ipsum hgbcdhj"></Product>
                <Product img={img2} head="Sharpens Illustration" text="loren ipsum hvfj" />
            </div>
            <div className='col-lg-4 -4'>
                <div className='chart-text flex-container'>
                    <input class="input form-control mr-sm-2" type="search" placeholder ={`Search`} aria-label="Search" />
                    <button className='button-right-side'> Last 30 days <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg></button>
                </div>
                <table style={{width:"100%"}}>
                    <tr>
                        <th>Stocks</th>
                        <th>Prices</th>
                        <th>Total Sales</th>
                    </tr>
                    <tr>
                        <td>32 in stock</td>
                        <td>$ 45.99</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>32 in stock</td>
                        <td>$ 45.99</td>
                        <td>20</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
