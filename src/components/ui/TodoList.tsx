import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter, search} from "../../utils/fitler";
import FilteredList from "./FilteredList";
import InfoContainer from "../../containers/InfoContainer";

interface ITodoListProps {
    readonly title: string;
    filter: string,
    data?: any;
    actions?: any;
}

class TodoList extends React.Component<ITodoListProps> {

    render() {
        const {title, filter} = this.props;
        const {items, mode, query} = this.props.data;
        const {addNew, changeStatus, setSearchQuery} = this.props.actions;
        const count = items.length;
        const filteredItems = search(applyFilter(items, filter), query);
        return (
            <div className="todolist">
                <Header
                    title={title}
                    {...{addNew, mode, query, setSearchQuery}}
                />
                <FilteredList items={filteredItems} changeStatus={changeStatus}/>
                <Footer
                    {...{count}}
                />
                <InfoContainer/>
            </div>
        );
    }

}

export default TodoList;
