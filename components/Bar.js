import React, { useState, useEffect } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Bar(props) {
    const [openStatus, setOpenStatus] = useState("Fermé")

    /* RATING STARS */
    const ratingStar = Array.from({ length: 5 }, (e, i) => {
        let number = i + 0.5;
        return (
            <span key={i}>
                {props.rating >= i + 1 ? (
                    <FaStar />
                ) : props.rating >= number ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
        );
    });

    /* OPENING HOURS */
    useEffect(() => {
        const openingHours = JSON.parse(props.opening_hours.replace(/'/g, '"'))

        const currentDate = new Date()
        const currentDay = ((currentDate.getDay() + 5) % 7) + 1 // Sunday is 6, Monday is 0

        if (openingHours && openingHours[currentDay]) {
            const today = openingHours[currentDay]
            if (today.includes('Fermé')) {
                setOpenStatus("Fermé aujourd'hui")
            } else if (today.includes('Ouvert 24h/24')) {
                setOpenStatus("Ouvert 24h/24")
            } else {
                const timeSlots = today.replace(/^[a-zA-Z]+: /, '').split(', ')
                const currentTime = currentDate.getHours() * 100 + currentDate.getMinutes()

                for (const timeSlot of timeSlots) {
                    const [startHour, endHour] = timeSlot.split(' – ')
                    let [start, end] = timeSlot.split(' – ').map((slot) => parseInt(slot.replace(':', '')))

                    // if it closes after midnight, it's the next day
                    end = end < start ? end + 2400 : end;

                    if (currentTime >= start && currentTime <= end) {
                        setOpenStatus(`Ouvert jusqu'à ${endHour}`)
                        break
                    } else {
                        setOpenStatus(`${startHour} - ${endHour}`)
                    }
                }
            }

            // Check if the closing time of the previous day extends past midnight
            const prevDay = (currentDay - 1 + 7) % 7; // Ensure we get a positive value for the previous day
            const prevDayClosingTime = openingHours[prevDay.toString()]?.split(' – ')[1];

            if (prevDayClosingTime) {
                const [prevDayEndHour] = prevDayClosingTime.split(':').map(Number);
                if (prevDayEndHour >= 0 && prevDayEndHour <= 4) {
                    setOpenStatus(`Ouvert jusqu'à ${prevDayClosingTime}`);
                }
            }
        }
    }, [props.opening_hours]);

    // zoom on location
    const handleCardClick = () => {
        const { coordinates } = props.location;
        props.zoomToLocation(coordinates);
    };

    return (
        <div className="ui-secondary flex flex-col rounded-2xl gap-2 p-6 my-6 hover:scale-[1.02] transition-transform" onClick={handleCardClick}>
            <h4 className="tx-primary flex gap-2 items-center">
                <span className="flex">{ratingStar}</span> ({props.rating}/5, {props.user_ratings_total} votes)
            </h4>
            <h3 className="tx-inverted text-2xl font-bold">{props.name}</h3>
            <p className="tx-primary">🏃‍♂️ {props.address}</p>
            <span className="bg-tertiary tx-tertiary w-fit px-2 rounded">{openStatus}</span>
        </div>
    );
}
