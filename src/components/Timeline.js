import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import TimelineArray from '../shared/TimelineArray';
import TimelineEntry from './TimelineEntry';

const Timeline = () => TimelineArray.length > 0 && (
    <div className='timeline-container'>
        {TimelineArray.map((entry, idx) => (
            <TimelineEntry entry={entry} key={idx} />
        ))}
    </div>
);

<React.Fragment>
<h1>Culture Timeline (change culture to a mapped identifier as add more cultures)</h1>
</React.Fragment>

export default Timeline;