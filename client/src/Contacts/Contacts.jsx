import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="Contacts">
            <div className="ContactsBlock">
                <a href="https://vk.com/suns_tears"><div className="contactLogo vk"></div></a>
                <a href="https://vk.com/suns_tears"><div className="contactLogo telegram"></div></a>
            </div>
        </div>
    );
};

export default Contacts;