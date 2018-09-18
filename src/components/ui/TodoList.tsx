import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter, search} from "../../utils/fitler";
import FilteredList from "./FilteredList";
import Info from "./Info";

interface ITodoListProps {
    readonly title: string;
    data?: any;
    actions?: any;
}

class TodoList extends React.Component<ITodoListProps> {

    render() {
        const {title} = this.props;
        const {items, filter, mode, query} = this.props.data;
        const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery} = this.props.actions;
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
                    {...{count, filter, mode, changeFilter, changeMode}}
                />
                <Info
                    {...{mode}}
                />
            </div>
        );
    }

}

export default TodoList;
