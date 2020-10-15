import React from "react";
import {Text} from "../../../../language/LanguageProvider";

const backToButton = (props) => (

    <div className={`projects__buttons ${props.changePage ? "fade--out" : "fade--in"}
            ${props.clicked ? "fade--out" : "fade--in"} `} >
        <span className='projects__buttons__small'></span>
        <span className='projects__buttons__big'></span>
        <button className={`back projects__buttons--active`}
                onClick={props.back}><Text tid='projects2'/></button>
        <span className='projects__buttons__big'></span>
        <span className='projects__buttons__small'></span>
    </div>
);

export default backToButton;