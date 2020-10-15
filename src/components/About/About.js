import React from 'react';
import Contact from "../Contact/Contact";
import selfPhoto from "../../assets/photo.png";
import border from "../../assets/border.png";
import LanguageSelector from "../../language/LanguageSelector";
import {Text} from "../../language/LanguageProvider"
import BackButton from "../BackButton/BackButton";

const about = (props) => {

        const { hovered, clicked, width, goHome, hoverBack } = props;
    console.log(clicked)
        return (
            <>
                <Contact/>
                <LanguageSelector/>
                <section className='about'>
                    <div className={`background ${clicked && "back--to--home1"}`}>
                        <div className={`about__title ${clicked ? "fade--out" : "fade--in"}`}>
                            <div className='about__title__name'>
                                <h1><Text tid="about1"/></h1>
                                <h2>Aleksandra Gasidło</h2>
                                {width < 768 ?
                                    <>
                                        <p>
                                            <span className='decorative'> <Text tid="about3"/> </span>
                                            <Text tid="about4"/>
                                        </p>
                                        <p>
                                            <span className='decorative'> <Text tid="about5"/> </span>
                                        </p>
                                    </>
                                    :
                                    <p>
                                        <span className='decorative'> <Text tid="about3"/> </span>
                                        <Text tid="about4"/>
                                        <span className='decorative'> <Text tid="about5"/> </span>
                                    </p>
                                }
                            </div>
                            <div className='about__title__image'>
                                <span className='about__title__image__shape first'></span>
                                <span className='about__title__image__shape second'></span>
                                <span className='about__title__image__shape third'></span>
                                <img src={border} alt='border'/>
                                <img src={selfPhoto} alt='self__photo'/>
                            </div>
                        </div>
                        <div className={`about__description ${clicked ? "fade--out" : "fade--in"}`}>
                            <p>
                                <Text tid="about6"/>
                                <span className='decorative'> <Text tid="about7"/> </span>
                                <Text tid="about8"/>
                                <span className='decorative'> <Text tid="about5"/> </span>
                                <Text tid="about9"/>
                            </p>
                            <p>
                                <Text tid="about10"/>
                                <span className='decorative'> <Text tid="about11"/></span>
                                <Text tid="about12"/>
                                <span className='decorative'> <Text tid="about13"/> </span>
                                <Text tid="about14"/>
                                <span className='decorative'> <Text tid="about15"/></span>
                            </p>
                            <p>
                                <Text tid="about16"/>
                                <span className='decorative'> <Text tid="about17"/> </span>
                                <Text tid="about4"/>
                                <span className='decorative'> <Text tid="about18"/> </span>
                                <Text tid="about19"/>
                                <span className='decorative'> <Text tid="about20"/> </span>
                                <Text tid="about21"/>
                                <span className='decorative'> <Text tid="about22"/> </span>
                            </p>
                        </div>
                    </div>

                    <BackButton hovered={hovered} clicked={clicked} goHome={goHome} hover={hoverBack}/>

                </section>
            </>
        )
}

export default about;