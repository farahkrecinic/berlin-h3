import React from 'react';
import './event-item.styles.scss';

const EventItem = ({name, organizer, date, time, location, description, id}) => (
    <div className='event-item'>
               <div className='content'>
                   <h1 className='title'>{name}</h1>
                   <span className='date'>{
                   date}</span>
                   <span className='genInfo'><strong>When: </strong>{time}</span>
                   <span className='genInfo'><strong>Where: </strong>{location}</span>
                   <span className='genInfo'><strong>WH-Hare(s): </strong>{organizer}</span>
                   <span className='short-description'>{description.substring(0, 75)}...</span>
               </div>
           </div>
);

export default EventItem;

