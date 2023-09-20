import '../style/Footer.css'
import React from 'react'
import 'boxicons'

function Footer(){

    return(
        <div className='footer-main'>
            <div className='footer-center'>
                <div className='ft-body1'>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                </div>
                <div className='ft-body2'>
                    <h1>Newsletter</h1>
                    <p>Stay update with our latest</p>
                    <div className='ft-input'>
                        <input type='text' placeholder="Enter Email" />
                            <a href='#'>
                        <button className='arrow'>
                            <img src="/photo/arrow.png"   alt='footer'/>
                        </button>
                            </a>
                    </div>
                </div>
                <div className='ft-body3'>
                    <h1>Instragram Feed</h1>
                    <div className='footer-img'>
                        <img src="/photo/footer/i1.jpg" alt='footer'/>
                        <img src="/photo/footer/i2.jpg"  alt='footer'/>
                        <img src="/photo/footer/i3.jpg" alt='footer'/>
                        <img src="/photo/footer/i4.jpg"  alt='footer'/>
                        <img src="/photo/footer/i5.jpg"  alt='footer'/>
                        <img src="/photo/footer/i6.jpg"  alt='footer'/>
                        <img src="/photo/footer/i7.jpg"  alt='footer'/>
                        <img src="/photo/footer/i8.jpg" alt='footer'/>
                    </div>
                </div>
                <div className='ft-body4'>
                    <h1>Follow Us</h1>
                    <p>Let us be social</p>
                    <div className='footer-icon'>
                       <box-icon name='facebook' type='logo' ></box-icon>
                       <box-icon name='twitter' type='logo' ></box-icon>
                       <box-icon name='telegram' type='logo' ></box-icon>
                       <box-icon name='instagram' type='logo' ></box-icon>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
export default Footer;