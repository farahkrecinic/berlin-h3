import React from 'react';

import './event-item-details.styles.scss';

const EventItemDetails = ({currentEvent: {name, date, time, organizer, location, googleLocation, image, eventType, eventTypeImage, description, author}})=> (
    <div className='eventItemDetailsContainer'>
        <div className='event-item-header' >
            <div className='background-image'style={{
                backgroundImage: `url(${image==="" ? image : eventTypeImage})`
            }} />
            <div className='titleInfo'>
                <h1 className='title'>{name}</h1>
                <span className='date'>{date}</span>
            </div>
        </div>
        <div className='event-item-content'>
            <span className='genInfo'><strong>When: </strong>{time}</span>
            <span className='genInfo'><strong>Where: </strong>{location}</span>
            <span className='genInfo'><strong>WH-Hare(s): </strong>{organizer}</span>
            <span className='genInfo'><strong>{eventType}</strong></span>
            <span className='genInfo'>{description}</span>
            <span className='genInfo'>{googleLocation}</span>
            <span className='author'>Person to blame if this info is wrong:
            <br />NOT {author}</span>
        </div>
        </div>
);

export default EventItemDetails;