import * as React from 'react';
import {getOptions} from "../../utils/fitler";

interface IFilterProps {
    readonly filter: string;
    readonly changeFilter: any;
}

class Filter extends React.Component<IFilterProps> {

    render() {
        const {filter, changeFilter} = this.props;
        const getClass = (key: string) => (key === filter ? 'selected' : '');
        const options = getOptions();

        return (
            <ul className="filters list-unstyled clearfix">
                {
                    Object.keys(options).map((key: string) =>
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
    }
    
}

export default Filter;
