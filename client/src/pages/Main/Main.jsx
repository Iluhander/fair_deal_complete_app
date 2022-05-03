import React, {useEffect, useState} from 'react';
import './Main.css'
import './Main.Animations.css'
import './Main.Keyframes.css'
import {Transition} from "react-transition-group";

const Main = () => {
    let [answersDisplay, setAnswersDisplay] = useState(0);

    // List of all components, used in block with answers to client's questions.
    // The list consists of object. Each object has properties 'component' (this one stores the
    // actual jsx component) and 'description' with text description of component.
    let answersBlocks = [
        {
            component: <Transition
                        key="0"
                        in={answersDisplay==0}
                        timeout={700}
                        mountOnEnter
                        unmountOnExit>
                        {
                            answersDisplay =>
                            <div className={'slideBlock' + ' ' + answersDisplay}
                                 style={{background:'orange'}}>
                                <div style={{width:'80%'}}>
                                    <h1><span>Fair Deal</span> - <br/> безопасно, просто, прозрачно</h1>
                                    <p>Сервис для безопасных покупок бу товаров</p>
                                </div>
                            </div>
                        }
                    </Transition>,
            description: "Кто мы ?"
        },
        {
            component: <Transition
                            key="1"
                            in={answersDisplay == 1}
                            timeout={700}
                            mountOnEnter
                            unmountOnExit
                        >
                            {
                                answersDisplay =>
                                    <div className={'slideBlock' + ' ' + answersDisplay}
                                         style={{background: 'powderblue'}}>
                                        <div style={{width: '80%'}}>
                                            <p style={{fontSize: '22px'}}>
                                                Наша команда выступает третьей стороной в каждой сделке,
                                                контролируя передачу денег и товаров. Такой подход исключает
                                                любой обман.
                                            </p>
                                        </div>
                                    </div>
                            }
                        </Transition>,
            description: "Как мы помогаем не стать жертвой обмана ?"
        },
        {
            component: <Transition
                key="2"
                in={answersDisplay == 2}
                timeout={700}
                mountOnEnter
                unmountOnExit
            >
                {
                    answersDisplay =>
                        <div className={'slideBlock' + ' ' + answersDisplay}
                             style={{background: 'rgba(227,192,171,0.86)'}}>
                            <div style={{width: '80%'}}>
                                <p style={{fontSize: '22px'}}>
                                    <span style={{fontWeight:'bold', fontSize:'24px'}}>Это очень просто)</span>
                                    <br/><br/>
                                    Для начала вам потребуется зарегестрироваться (ссылка в меню сверху).
                                    После вам откроется личный кабинет и вы в два клика сможете согласовать с
                                    нами покупку.
                                </p>
                                <a><button>Присоединиться</button></a>
                            </div>
                        </div>
                }
            </Transition>,
            description: "Как безопасно купить товар с Fair Deal ?"
        }
    ];

    // Adding id property to each component.
    for (let i = 0; i < answersBlocks.length; ++i) {
        answersBlocks[i].id = i;
    }

    return (
        <div>
            <div className="infoBlock">
                <div className="mainBlock leftBlock">
                    {
                        // Creating answers to questions.
                        answersBlocks.map(content => content.component)
                    }
                </div>
                <div className="mainBlock rightBlock">
                    {
                        answersBlocks.map(content =>
                            <div key={content.id} className="link"
                                 style={{height:'80px', textAlign:'center'}}
                                 onMouseEnter={() => setAnswersDisplay(content.id)}>
                                <p> - {content.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;