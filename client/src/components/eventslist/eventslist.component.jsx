import React from 'react';
import EventService from '../../services/event.service';

import EventItem from '../event-item/event-item.component';
import './eventslist.styles.scss';

class EventsList extends React.Component {
    constructor() {
        super();

        this.state = {
            events: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        EventService.getAllPublishedEvents().then(
            events => {
                this.setState({
                    events: events.data,
                    isLoading: false
                });
            },
            error => {
                this.setState({
                  content:
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString()
                });
            }
        );
    }

    render () {
        const { events } = this.state;
        var CurrentDate = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        events.map(c => c.date = new Date(c.date));

        return (
            <div className='eventslist' >
                {
                    events.filter(s => s.date >= CurrentDate)
                    .sort((a,b)=>a.date-b.date)
                    .filter((event, idx) => idx < 3)
                    .map(({_id, date, ...otherSectionProps}) => (
                        <EventItem key={_id} id={_id} date={(days[date.getDay()])+'. '+date.getDate()+'. '+(months[date.getMonth()])} {...otherSectionProps} />
                    ))
                }
            </div>  
        )
    }
}

export default EventsList;