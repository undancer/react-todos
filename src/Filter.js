import React from 'react';

const options = {
    'all': 'All',
    'active': 'Active',
    'completed': 'Completed'
};

const Filter = (props) => {
    const {filter, change} = props;
    const getClass = (key) => (key === filter ? 'selected' : '');

    return (
        <ul className="filters list-unstyled clearfix">
            {
                Object.keys(options).map((key) =>
                    (
                        <li key={key}>
                            <a
                                className={getClass(key)}
                                onClick={() => change(key)}
                            >
                                {options[key]}
                            </a>
                        </li>
                    )
                )
            }
        </ul>
    );
};
export default Filter;
