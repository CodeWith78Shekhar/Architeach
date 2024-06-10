import React from 'react';
import './Footer.css';
import lines from '../../GFB/Home/bg/start your Bulding Journey.png';


const Footer = () => {
    return (
        <div className='mainFooter'>
            <div className='section1'>
                <img src={lines} />
                <div className='content'>
                    <h1>Start Your Build Journey</h1> <br/> <hr/> <br/>
                    <p>At GFB, we turn aspirations into architectural masterpieces.</p> <br/>
                    <p>Serving California, we're ready to bring your construction dreams to life.</p> <br/>
                    <p>Why wait?</p> <br/>
                    <p>Let's begin your seamless construction journey the right way!</p>
                </div>
                <button><h1>Start Your Project</h1></button>
            </div>

            <div className='section2'>
                <img />
              
            </div>
        </div>
    )
}

export default Footer