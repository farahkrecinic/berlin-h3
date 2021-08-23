import React from 'react';

import EventItem from '../event-item/event-item.component';
import './eventslist.styles.scss';

class EventsList extends React.Component {
    constructor() {
        super();

        this.state = {
            events: [{
                name: 'Run, Baby, Run',
                organizer: 'F7',
                date: '2021-08-28',
                time: '2:45pm',
                location: 'S Südende',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui metus, ultricies vel rutrum et, tincidunt quis elit. Quisque ut libero eu erat condimentum volutpat. Proin ante massa, elementum in velit id, pretium semper massa. Vivamus non eros nec ante dapibus feugiat. Morbi semper sapien in fermentum tempus. Nam mattis purus diam, eget lobortis augue convallis vitae. Curabitur efficitur tincidunt luctus. In non varius dolor, eget congue quam. Aenean gravida ut dui a euismod. Aenean quam dui, tempus sit amet suscipit ut, maximus sit amet urna.',
                id: 1
            },
            {
                name: 'Did Someone say Run',
                organizer: 'Runs From Sex',
                date: '2021-09-05',
                time: '2:45pm',
                location: 'S Grünau',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui metus, ultricies vel rutrum et, tincidunt quis elit. Quisque ut libero eu erat condimentum volutpat. Proin ante massa, elementum in velit id, pretium semper massa. Vivamus non eros nec ante dapibus feugiat. Morbi semper sapien in fermentum tempus. Nam mattis purus diam, eget lobortis augue convallis vitae. Curabitur efficitur tincidunt luctus. In non varius dolor, eget congue quam. Aenean gravida ut dui a euismod. Aenean quam dui, tempus sit amet suscipit ut, maximus sit amet urna.',
                id: 2
            },
            {
                name: 'Full Moon, Run',
                organizer: 'Ring Piece',
                date: '2021-08-31',
                time: '7pm',
                location: 'S Südkreuz',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui metus, ultricies vel rutrum et, tincidunt quis elit. Quisque ut libero eu erat condimentum volutpat. Proin ante massa, elementum in velit id, pretium semper massa. Vivamus non eros nec ante dapibus feugiat. Morbi semper sapien in fermentum tempus. Nam mattis purus diam, eget lobortis augue convallis vitae. Curabitur efficitur tincidunt luctus. In non varius dolor, eget congue quam. Aenean gravida ut dui a euismod. Aenean quam dui, tempus sit amet suscipit ut, maximus sit amet urna.',
                id: 3
            },
            {
                name: 'Just another Run',
                organizer: 'Cyber Donkey Sex',
                date: '2021-09-12',
                time: '2:45pm',
                location: 'S Hauptbahnhof',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui metus, ultricies vel rutrum et, tincidunt quis elit. Quisque ut libero eu erat condimentum volutpat. Proin ante massa, elementum in velit id, pretium semper massa. Vivamus non eros nec ante dapibus feugiat. Morbi semper sapien in fermentum tempus. Nam mattis purus diam, eget lobortis augue convallis vitae. Curabitur efficitur tincidunt luctus. In non varius dolor, eget congue quam. Aenean gravida ut dui a euismod. Aenean quam dui, tempus sit amet suscipit ut, maximus sit amet urna.',
                id: 4
            },
            {
                name: 'Past Run',
                organizer: 'Symphomaniac',
                date: '2020-09-12',
                time: '2:45pm',
                location: 'S Hauptbahnhof',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui metus, ultricies vel rutrum et, tincidunt quis elit. Quisque ut libero eu erat condimentum volutpat. Proin ante massa, elementum in velit id, pretium semper massa. Vivamus non eros nec ante dapibus feugiat. Morbi semper sapien in fermentum tempus. Nam mattis purus diam, eget lobortis augue convallis vitae. Curabitur efficitur tincidunt luctus. In non varius dolor, eget congue quam. Aenean gravida ut dui a euismod. Aenean quam dui, tempus sit amet suscipit ut, maximus sit amet urna.',
                id: 5
            }]
        }
    }

    render () {
        const { events } = this.state;
        var CurrentDate = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        events.map(c => c.date = new Date(c.date));

        return (
            <div className='eventslist' >
                {
                    events.filter(s => s.date >= CurrentDate)
                    .sort((a,b)=>a.date-b.date)
                    .map(({id, date, ...otherSectionProps}) => (
                        <EventItem key={id} date={date.getDate()+'. '+(months[date.getMonth()])} {...otherSectionProps} />
                    ))
                }
            </div>  
        )
    }
}

export default EventsList;