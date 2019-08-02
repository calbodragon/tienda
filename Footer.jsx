import React from 'react';

const Footer=()=>{
    return(
        
        <div className=" ml-5 row">
        <ul className='col-3 '>PRODUCTS
            <li><a href='#'>Princes drop</a></li>
            <li><a href='#'>new productos</a></li>
            <li><a href='#'>Best sales</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>sitemap</a></li>
        </ul>
        <ul className="col-3">OUR COMPANY
            <li><a href='#'>Delyvery</a></li>
            <li><a href='#'>legal notice</a></li>
            <li><a href='#'>Terms and conditions of use</a></li>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Secure payment</a></li>
        </ul>
        <ul className='col-3'>YOUR ACCOUNT
            <li><a href='#'>Addresses</a></li>
            <li><a href='#'>Credits slips</a></li>
            <li><a href='#'>Orders</a></li>
            <li><a href='#'>Personal info</a></li>
            <li><a href='#'>My wishliss</a></li>
        </ul>
        <ul className='col-3'>STORE INFORMATION
            <li><a href='#'>Bicycle store <br/>United states</a></li>
            <li><a href='#'>(555)888 888</a></li>
            <li><a href='#'>Best sales</a></li>
            <li><a href='#'>emp@themevolty.com</a></li>  
        </ul>
       <div className="text-white bg-dark w-100 row " role="alert">
            
            <h6 className="center col-6 ">@ 2018 ecommerse software by prestashop</h6>
            <div className="d-flex col-6 justify-content-end ">
            <i className="fab fa-cc-visa ml-3 "></i>
            <i className="fab fa-cc-mastercard ml-3"></i>
            <i className="fab fa-cc-paypal ml-3"></i>
            </div>
          </div>
      
    </div>
    )
}
export default Footer;
