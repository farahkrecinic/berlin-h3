import React from 'react';
import EventService from '../../services/event.service';
import EventItemDetails from '../../components/event-item-details/event-item-details.component';

import './eventdetails.styles.scss';

class EventDetailsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            currentEvent: {},
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        EventService.getEvent(this.props.match.params.eventId).then(
            event => {
                this.setState({
                    currentEvent: event,
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

    render() {
        const { currentEvent } = this.state;
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        currentEvent.date = new Date(currentEvent.date);
        currentEvent.date = (days[currentEvent.date.getDay()])+'. '+currentEvent.date.getDate()+'. '+(months[currentEvent.date.getMonth()]);
        
        return (
            <EventItemDetails currentEvent={currentEvent} />
        )
    }
}

export default EventDetailsPage;