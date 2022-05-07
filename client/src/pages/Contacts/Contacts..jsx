import React from 'react';
import './Contacts.css'

const Contacts = () => {
    return (
        <div>
            <div className="contacts">
                <h1>Свяжитесь с <span style={{color:'orange'}}>нами</span></h1>
                <div className="itemsRow">
                    <a href="https://vk.com/suns_tears">
                        <div className="media"
                            style={{background:'url("../../icons/vk.png")',
                                backgroundSize:'cover',
                                backgroundPosition:'center'}}/>
                    </a>
                    <a href="https://t.me/IlyaLayk">
                        <div className="media"
                             style={{background:'url("../../icons/telegram.png")',
                                 backgroundSize:'cover',
                                 backgroundPosition:'center'}}/>
                    </a>
                    <a href="mailto:mrapple433@gmail.com">
                        <div className="media"
                             style={{background:'url("../../icons/mail.png")',
                                 backgroundSize:'cover',
                                 backgroundPosition:'center'}}/>
                    </a>
                    <a href="tel:+79254605254">
                        <div className="media"
                             style={{background:'url("../../icons/phone.png")',
                                 backgroundSize:'cover',
                                 backgroundPosition:'center'}}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;