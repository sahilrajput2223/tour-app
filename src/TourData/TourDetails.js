import React from "react";

import "./TourDetails.css"

const TourDetails = ({ tourImg, tourTitle, tourDesc, tourPrice }) => {
    return (
        <article>
            <img src={tourImg} alt={tourTitle} className="image" />
            <footer>
                <p>
                    {tourDesc}
                </p>
                <p>
                    {tourPrice}
                </p>
            </footer>
        </article>
    );
}

export default TourDetails