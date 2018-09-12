import React from 'react';
import {getOptions} from "./filter/fitler";

const Filter = (props) => {
    const {filter, changeFilter} = props;
    const getClass = (key) => (key === filter ? 'selected' : '');
    const options = getOptions();

    return (
        <ul className="filters list-unstyled clearfix">
            {
                Object.keys(options).map((key) =>
                    (
                        <li key={key}>
                            <a
                                className={getClass(key)}
                                onClick={() => changeFilter(key)}
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
