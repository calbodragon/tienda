import React from 'react';

const Footer=()=>{
    return(
        
        <div className=" ml-5 row">
        <ul className='col-3 '>PRODUCTS
            <li><link to='/'>Princes drop</link></li>
            <li><link to='/'>new productos</link></li>
            <li><link to='/'>Best sales</link></li>
            <li><link to='/'>Contact us</link></li>
            <li><link to='/'>sitemap</link></li>
        </ul>
        <ul className="col-3">OUR COMPANY
            <li><link to='/'>Delyvery</link></li>
            <li><link to='/'>legal notice</link></li>
            <li><link to='/'>Terms and conditions of use</link></li>
            <li><link to='/'>About us</link></li>
            <li><link to='/'>Secure payment</link></li>
        </ul>
        <ul className='col-3'>YOUR ACCOUNT
            <li><link to='/'>>Addresses</link></li>
            <li><link to='/'>Credits slips</link></li>
            <li><link to='/'>Orders</link></li>
            <li><link to='/'>Personal info</link></li>
            <li><link to='/'>My wishliss</link></li>
        </ul>
        <ul className='col-3'>STORE INFORMATION
            <li><link to='/'>Bicycle store <br/>United states</link></li>
            <li><link to='/'>(555)888 888</link></li>
            <li><link to='/'>Best sales</link></li>
            <li><link to='/'>emp@themevolty.com</link></li>  
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
