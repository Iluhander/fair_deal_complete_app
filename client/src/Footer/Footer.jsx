import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footerElem">
                    <p>+79254605254</p>
                    <p style={{color:'orange'}}>fairdealofficial@gmail.com</p>
                </div>
                <div className="footerElem">
                    <p>@ 2022 Fair Deal</p>
                    <p>Все права защищены</p>
                </div>
                <div className="footerElem">
                    <a href="https://t.me/IlyaLayk">
                        <div className="signature"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;