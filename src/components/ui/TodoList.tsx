import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter, search} from "../../utils/fitler";
import InfoContainer from "../../containers/InfoContainer";
import FilteredListContainer from "../../containers/FilteredListContainer";

interface ITodoListProps {
    readonly title: string;
    filter: string;
    query: string;
    items: any;
}

class TodoList extends React.Component<ITodoListProps> {

    render() {
        const {title, filter, query, items} = this.props;
        const count = items.length;
        const filteredItems = search(applyFilter(items, filter), query);
        return (
            <div className="todolist">
                <Header title={title}/>
                <FilteredListContainer items={filteredItems}/>
                <Footer
                    {...{count}}
                />
                <InfoContainer/>
            </div>
        );
    }

}

export default TodoList;
