import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="descriptionBlock">
                <div style={{width:'340px', flexDirection:'column', border:'4px white'}}>
                    <a>
                        <div className="avatar"
                            style={{
                                height:'80px',
                                background:'url(../../people/andrey.png)',
                                backgroundPosition:'center',
                                backgroundSize:'cover'
                            }}/>
                    </a>
                    <p style={{color:'gray'}}>Елисеев Андрей,<br/> основатель Fair Deal</p>
                </div>
                <div className="textBlock" style={{width:'620px'}}>
                    <p>
                        Fair Deal - это молодой стартап, целью которого является искоренение мошенничества в
                         интернете. <br/>
                        В течение последних лет так называемый "скам" набирает обороты и всё больше и больше
                         людей становятся жертвами обманщиков. При покупке Б/У вещей ключевой этап "скам"
                         схемы - заставить жертву поверить на слово и передать деньги/товар, не имея
                         фактически никаких гарантий. <br/>
                        Принцип работы Fair Deal прост: мы пропускаем через себя товар и деньги (неся за них
                         полною юридическую ответственность), лично убеждаемся, что товар и деньги приходят и
                         соответсвуют изначальной договорённости, а далее передаём товар покупателю и деньги
                         продавцу. В случае возникновения каких-либо проблем, товар и деньги задерживаются у
                         нас и могут быть возвращены по требованию любой их сторон сделки.
                    </p>
                </div>
            </div>
            <div className="buttonsBlock">
                <a href="/enter"><button style={{backgroundColor:'white'}}>Присоединиться</button></a>
                <a href="/contacts"><button style={{backgroundColor:'orange'}}>Связатья с нами</button></a>
            </div>
        </div>
    );
};

export default About;