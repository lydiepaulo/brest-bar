import React, { useState } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Bar(props) {
    /* rating stars */
    const ratingStar = Array.from({ length: 5 }, (e, i) => {
        let number = i + 0.5;
        return (
            <span key={i}>
                {props.rating >= i + 1 ? <FaStar /> : props.rating >= number ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
        )
    });

    /* OPENING HOURS */
    let openClosed = "";
    const openingHours = JSON.parse(props.opening_hours.replace(/'/g, '"'));

    const currentDate = new Date();
    const currentDay = currentDate.getDay() - 1;  // Sunday is 0, Monday is 1, ..., Saturday is 6

    if (openingHours) {
        const today = openingHours[currentDay];
        if (today.includes('Fermé')) openClosed = "Fermé aujourd'hui";
        else if (today.includes('Ouvert 24h/24')) openClosed = "Ouvert 24h/24";
        else {
            const timeSlots = today.replace(/^[a-zA-Z]+: /, '').split(', ');
            const currentTime = currentDate.getHours() * 100 + currentDate.getMinutes();
            console.log(today)
            for (const timeSlot of timeSlots) {
                const [startHour, endHour] = timeSlot.split(' – ');
                let [start, end] = timeSlot.split(' – ').map(slot => parseInt(slot.replace(':', '')))

                // if it closes after midnight, consider it as the next day
                end = end < start ? end + 2400 : end;

                if (currentTime >= start && currentTime <= end) {
                    openClosed = `Ouvert jusqu'à ${endHour}`;
                } else {
                    openClosed = `${startHour} - ${endHour}`
                }
            }
        }
    }


    return (
        <div className="ui-secondary flex flex-col rounded-2xl gap-2 p-6 my-6">
            <h4 className="tx-primary flex gap-2 items-center"><span className="flex">{ratingStar}</span> ({props.rating}/5, {props.user_ratings_total} votes)</h4>
            <h3 className="tx-inverted text-2xl font-bold">{props.name}</h3>
            <p className="tx-primary">🏃‍♂️ {props.address}</p>
            {openClosed}
        </div>
    )
}
