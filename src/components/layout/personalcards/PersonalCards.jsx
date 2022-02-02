import React  from 'react';
/* import Hike from "../../../assets/images/hike.jpeg"
import GuitarSelfie from "../../../assets/images/GuitarSelfie.jpeg";
import SanDiego from "../../../assets/images/SanDiego.jpeg";
import FortBragg1 from "../../../assets/images/FortBragg1.jpeg"; */

import './PersonalCards.scss';

/* COMPONENT FOR INTERACTIVE CARDS ON ABOUT ME */
const PersonalCard = (props) => {
   
    const { cardState, changeCardState, image, index, name, frontHeader, backHeader2, backHeader3, text, BackImage } = props;

    
/* Helper Function to toggle Active cards */
    function toggleActive(index) {
        changeCardState({...cardState, activeObject: cardState.objects[index]})
    }

/* Helper Function to toggle the classNames that are styled */
    function toggleActiveStyles(index) {
        return cardState.objects[index] === cardState.activeObject ? "card__inner is-flipped active" : "card__inner";
    }
    
/* TODO: Need to change cards to make scrollable: */
/* I need only one card to render at once - currentl all three cards render */
        return(
            <>
            {/* <div className="card">{cardInfo.map(renderCard)}</div> */}
            
            <div className={name} key={"card-" + index}>
                <div className={toggleActiveStyles(index)} onClick={() => { toggleActive(index)}}>
                    <div className="card__face card__face--front">
                        <h2>{frontHeader}</h2>
                        <div className="img__container">
                            <img className="front__image" src={BackImage} alt=""/>
                        </div>
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src={image} alt=""/>
                        <h2>{backHeader2}</h2>
                    </div>
                    <div className="card__body">
                        <h3>{backHeader3}</h3>
                        <p>{text}</p>
                    </div>
                    </div>
                </div>
            </div>
            
            </>
            
            
        )
    
}

export default PersonalCard;