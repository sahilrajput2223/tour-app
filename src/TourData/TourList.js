import React from "react";
import TourDetails from "./TourDetails";

import "./TourList.css";

const dataUrl = "https://course-api.com/react-tours-project";

const TourList = () => {

    const [tourData, setTourData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        console.log("use effect called")
        fetch(dataUrl)
            .then((response) => {
                return response.json();
            })
            .then((touDataFromAPI) => {
                setTourData(touDataFromAPI)
                setIsLoading(false)
            });

    }, []);

    const removeTourData = (id) => {
        const newTourData = tourData.filter((tour) => tour.id !== id);
        setTourData(newTourData)
    }

    if (isLoading) {
        return (
            <div className="loading">
                <h2>
                    Loading ...
                </h2>
            </div>
        );
    }

    return (
        <div>
            {tourData.map((tour) => {
                const { id, image, name, info, price } = tour
                return (
                    <TourDetails key={id} id={id} tourImg={image} tourTitle={name} tourDesc={info} tourPrice={price} removeTour={removeTourData} />
                );
            })}
        </div>
    );
}

export default TourList