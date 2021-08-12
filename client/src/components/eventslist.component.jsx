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
        console.log('TCL: MoviesList -> render -> events', events);

        return (
            <ListWrapper>
                {
                    events.map(({id, name, organizer, date, time, description}) => (
                        <div className='mapList' key={id}><h1>{name}</h1>
                        <p>{organizer}</p>
                        <p>{date} : {time}</p>
                        <p>{description}</p>
                        </div>
                    ))
                }
            </ListWrapper>
        );
    }
}