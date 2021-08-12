import React, { Component } from 'react';
import EventService from "../services/event.service";

import { ListWrapper} from './events.styles';


export default class EventsList extends Component {
    constructor(props) {
        super(props);

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

    render() {
        const { events, isLoading } = this.state;
        var CurrentDate = new Date();

        events.map(c => c.date = new Date(c.date)).sort((a,b)=>a.date-b.date);
        
        return (
            <ListWrapper>
                {
                    events.filter(s => s.date >= CurrentDate).map(({_id, name, organizer, date, time, description}) => (
                        <div className='mapList' key={_id}><h1>{name}</h1>
                        <p>{organizer}</p>
                        <p>{date.toLocaleDateString()} at {time}</p>
                        <p>{description}</p>
                        </div>
                    ))
                }
            </ListWrapper>
        );
    }
}

// .toLocaleDateString()
// .filter(function(s){
//     var dateS = new Date(s.date);
//     var CurrentDate = new Date();
//     return dateS > CurrentDate;
// })