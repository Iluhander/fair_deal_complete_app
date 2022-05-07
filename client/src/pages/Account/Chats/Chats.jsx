import React from 'react';
import './Chats.css';

const Chats = (props) => {
    return (
        <div>
            <div className="chatsList">
                {
                    props.chats.map(chat =>
                        <div key={chat.key} className="chat">
                            <div style={{borderLeft:'130px solid white', width:'20vw'}}>
                                <p>{chat.name}</p>
                            </div>
                            <div style={{width:'4vw'}}>
                                <div className="dot" />
                            </div>
                            <div style={{width:'20vw'}}>
                                <p>{chat.deal}</p>
                            </div>
                            <div style={{borderRight:'60px solid white'}}>
                                <p style={{cursor:'pointer', color:'orange', fontSize:'16px'}}>{chat.status}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Chats;