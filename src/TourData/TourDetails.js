import React from "react";

import "./TourDetails.css"

const TourDetails = ({ tourImg, tourTitle, tourDesc, tourPrice }) => {

    return (
        <article className="artical">
            <img src={tourImg} alt={tourTitle} className="image" />
            <footer className="footer">
                <div className="titleBar">
                    <h4>{tourTitle}</h4>
                    <h4 className="tourPrice">$ {tourPrice}</h4>
                </div>
                <div className="tourDesc">
                    {tourDesc}
                </div>
                <button className="notInterestedBtn">not interested</button>
            </footer>
        </article>
    );
}

export default TourDetails