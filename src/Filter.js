import React from 'react';

const Filter = (props) => {
    return (
        <ul className="filters list-unstyled clearfix">
            <li>
                <a className="selected">All</a>
            </li>
            <li>
                <a>Active</a>
            </li>
            <li>
                <a>Completed</a>
            </li>
        </ul>
    );
};
export default Filter;
