import React from 'react';

const options = {
    'all': 'All',
    'active': 'Active',
    'completed': 'Completed'
};

const Filter = (props) => {
    const {filter} = props;

    return (
        <ul className="filters list-unstyled clearfix">
            {
                Object.keys(options).map((key) =>
                    (
                        <li key={key}>
                            <a className={key === filter ? 'selected' : ''}>{options[key]}</a>
                        </li>
                    )
                )
            }
        </ul>
    );
};
export default Filter;
