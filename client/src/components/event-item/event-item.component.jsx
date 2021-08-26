import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import './event-item.styles.scss';



const EventItem = ({id, name, organizer, date, time, local, description, history, match}) => (
    <div className='event-item' onClick={() => history.push(`${match.url}event/${id}`)}>
        <div className='content'>
            <h1 className='title'>{name}</h1>
            <span className='date'>{date}</span>
            <span className='genInfo'><strong>When: </strong>{time}</span>
            <span className='genInfo'><strong>Where: </strong>{local}</span>
            <span className='genInfo'><strong>WH-Hare(s): </strong>{organizer}</span>
            <span className='short-description'>{description.substring(0, 75)}...</span>
            <CustomButton type='button' isOnOn onClick={() => history.push(`${match.url}event/${id}`)}> ON-ON </CustomButton>
        </div>
    </div>
);

export default withRouter(EventItem);

//  id, history, match
//  
// 

