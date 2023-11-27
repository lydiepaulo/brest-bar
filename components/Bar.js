import React, { useState, useEffect } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Bar(props) {
    const [openStatus, setOpenStatus] = useState("");

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

    // function to format hours and minutes
    const formatTime = (hour, minute) => {
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const currentDate = new Date();
        const currentDay = (currentDate.getDay() + 6) % 7;; // Sunday is 6, Monday is 0, …

        // from json to object to manipulate the data
        const openingHours = JSON.parse(props.opening_hours.replace(/'/g, '"'));
        console.log(openingHours)
        // get previous day
        const prevDay = (currentDay + 5) % 7; // Sunday is 6, Monday is 0, … + ensures that we don't end up with a negative number
        const prevDayClosingTime = openingHours?.[prevDay.toString()]?.split(' – ')[1];

        if (openingHours && openingHours[currentDay]) {
            // get currentDay hours
            const today = openingHours[currentDay];

            const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();

            // if today is closed
            if (today.includes('Fermé')) {
                setOpenStatus("Fermé aujourd'hui");
            } else if (today.includes('Ouvert 24h/24')) {
                setOpenStatus("Ouvert 24h/24");
            } else {
                // handle today
                const timeSlots = today.replace(/^[a-zA-Z]+: /, '').split(', ');

                for (const timeSlot of timeSlots) {
                    const [startHour, startMinute, endHour, endMinute] = timeSlot.split(' – ')
                        .flatMap(time => time.split(':').map(Number));

                    const start = startHour * 60 + startMinute;
                    let end = endHour * 60 + endMinute;

                    // if it closes after midnight, it's the next day
                    end = end < start ? end + 1440 : end;

                    if (currentTime >= start && currentTime <= end) {
                        setOpenStatus(`Ouvert jusqu'à ${formatTime(endHour, endMinute)}`);
                        break;
                    } else {
                        setOpenStatus(`Ouvre à ${formatTime(startHour, startMinute)}`);
                    }
                }
            }

            // Finally, we check if the closing time of the previous day extends past midnight
            if (prevDayClosingTime) {
                const [prevDayEndHour, prevDayEndMinute] = prevDayClosingTime.split(':').map(Number);
                const prevDayEndTime = prevDayEndHour * 60 + prevDayEndMinute;

                // if it's still open from yesterday : 240 is midnight
                if (currentTime >= prevDayEndTime && currentTime <= 240) {
                    setOpenStatus(`Ouvert jusqu'à ${formatTime(prevDayEndHour, prevDayEndMinute)}`);
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