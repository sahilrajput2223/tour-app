import React from "react";

import "./TourDetails.css"

const TourDetails = ({ tourImg, tourTitle, tourDesc, tourPrice }) => {

    const [isRead, setIsRead] = React.useState(true);

    return (
        <article className="artical">
            <img src={tourImg} alt={tourTitle} className="image" />
            <footer className="footer">
                <div className="titleBar">
                    <h4>{tourTitle}</h4>
                    <h4 className="tourPrice">$ {tourPrice}</h4>
                </div>
                <div className="tourDesc">
                    {isRead && tourDesc.substring(0, 200) + "..."}
                    {!isRead && tourDesc}

                    {isRead && <button className="readBtn" onClick={() => setIsRead(false)}>Read More</button>}
                    {!isRead && <button className="readBtn" onClick={() => setIsRead(true)}>Show Less</button>}

                </div>
                <button className="notInterestedBtn">not interested</button>
            </footer>
        </article>
    );
}

export default TourDetails