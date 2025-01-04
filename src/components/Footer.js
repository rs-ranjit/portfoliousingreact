import React from 'react'
import './FooterStyles.css'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}} />
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Nepal.</p>
                    </div>
                    </div>
                    <div className='phone'>
                            <FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}} />  
                        <h4>    
                            <div>
                                <p>9823413412</p>
                            </div>
                        </h4>
                    </div>
                    <div className='email'>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}} />  
                        <h4>
                            <div>
                                <p>ranjitrahul7@gmail.com</p>
                            </div>
                        </h4>
                    </div>
            </div>

            <div className='right'>
                <h4>
                    About Myself.
                </h4>
                <p>A hardworking individual ready to learn. 
                    Enjoying the challenges of life</p>

                <div className='social'>
                <FaLinkedin size={20} style={{color: "#fff", marginRight:"2rem"}} />  
                <FaTwitter size={20} style={{color: "#fff", marginRight:"2rem"}} />  
                <FaGithub size={20} style={{color: "#fff", marginRight:"2rem"}} />  
                <FaFacebook size={20} style={{color: "#fff", marginRight:"2rem"}} />  

                </div>    
            </div>
        </div>
    </div>
  )
}

export default Footer;

