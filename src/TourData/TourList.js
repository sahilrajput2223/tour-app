import React from "react";
import TourDetails from "./TourDetails";

const dataUrl = "https://course-api.com/react-tours-project";

const TourList = () => {

    const [tourData, setTourData] = React.useState([]);

    React.useEffect(() => {
        console.log("use effect called")
        fetch(dataUrl)
            .then((response) => {
                return response.json();
            })
            .then((touDataFromAPI) => {
                setTourData(touDataFromAPI)
            });

    }, []);

    const removeTourData = (id) => {
        const newTourData = tourData.filter((tour) => tour.id !== id);
        setTourData(newTourData)
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