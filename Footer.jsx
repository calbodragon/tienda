import React from 'react';

const Footer=()=>{
    return(
        
        <div className=" ml-5 row">
        <ul className='col-3 '>PRODUCTS
            <li>Princes drop</li>
            <li>new productos</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>sitemap</li>
        </ul>
        <ul className="col-3">OUR COMPANY
            <li>Delyvery</li>
            <li>legal notice</li>
            <li>Terms and conditions of use</li>
            <li>About us</li>
            <li>Secure payment</li>
        </ul>
        <ul className='col-3'>YOUR ACCOUNT
            <li>Addresses</li>
            <li>Credits slips</li>
            <li>Orders</li>
            <li>Personal info</li>
            <li>My wishliss</li>
        </ul>
        <ul className='col-3'>STORE INFORMATION
            <li>Bicycle store <br/>United states</li>
            <li>(555)888 888</li>
            <li>Best sales</li>
            <li>emp@themevolty.com</li>  
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
