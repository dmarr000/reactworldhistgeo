import React from 'react';

const TimelineEntry = ({ entry }) => (
    <div className='timeline-item'>
        <div className='timeline-item-content'>
            <span className='country' style={{ background: entry.category.color}}>
            {entry.category.country}
            </span>
            <time>{entry.date}</time>
            <p>{entry.text}</p>
            {entry.link && (
            <a href={entry.link.url} target='_blank' rel='noopener noreferrer'>
                {entry.link.text}
            </a>
            )}
            <span className='circle'></span>
        </div>
    </div>
);

export default TimelineEntry;