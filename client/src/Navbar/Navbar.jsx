import React from 'react';
import './Navbar.css';

const Navbar = () => {
    // Links on the left side of the navbar.
    let leftLinks = [
        {
            ref: "/about",
            text: "О нас",
            key: "0"
        },
        {
            ref: "/contacts",
            text: "Контакты",
            key: "1"
        }
    ];

    // Links on the right side of the navbar.
    let rightLinks = [
        {
            ref: "/enter",
            text: "Войти",
            key: "2"
        }
    ];

    return (
        <div>
            <div className="navbar">
                <div className="itemsList">
                    {
                        leftLinks.map(link =>
                            <a key={link.key} href={link.ref} className="link"><p>{link.text}</p></a>
                        )
                    }
                </div>
                <a href="/"><div className="icon" style={{width:"70px", height:"70px"}}/></a>
                <div className="itemsList">
                    {
                        rightLinks.map(link =>
                            <a key={link.key} href={link.ref} className="link"><p>{link.text}</p></a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;