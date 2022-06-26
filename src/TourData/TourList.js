import React from "react";
import TourDetails from "./TourDetails";

import "./TourList.css";

const dataUrl = "https://course-api.com/react-tours-project";

const TourList = () => {

    const [tourData, setTourData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        console.log("use effect called")
        fetch(dataUrl)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    setIsError(true)
                    setIsLoading(false)
                    throw new Error(response.statusText)
                }
            })
            .then((touDataFromAPI) => {
                setTourData(touDataFromAPI)
                setIsLoading(false)
            })
            .catch((error) => { console.log(error) });

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

    if (isError) {
        return (
            <div className="error">
                <h2>
                    Error ...
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