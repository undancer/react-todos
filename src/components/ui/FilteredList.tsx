import * as React from 'react';
import TodoItem from './TodoItem';
import {MSG_NO_ITEMS} from '../../config/lang/en_US';

interface IFilteredListProps {
    items: any;
    changeStatus: any;
}

class FilteredList extends React.Component<IFilteredListProps> {

    render() {
        const {items, changeStatus} = this.props;
        
        if (items.length === 0) {
            return (
                <p className="alert alert-info">{MSG_NO_ITEMS}</p>
            );
        }

        return (
            <ul className="list-unstyled">
                {
                    items.map((item: any) => (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            data={item.text}
                            completed={item.completed}
                            changeStatus={changeStatus}
                        />
                    ))
                }
            </ul>
        );
    }

}

export default FilteredList;
