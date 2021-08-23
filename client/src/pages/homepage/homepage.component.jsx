import React from 'react';
import './homepage.styles.scss';

import EventsList from '../../components/eventslist/eventslist.component';

const HomePage = () => (
    <div className='homepage'>
      <EventsList />
    </div>
)

export default HomePage;