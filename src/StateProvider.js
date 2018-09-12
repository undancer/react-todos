import React from "react";
import {FILTER_ALL} from "./filter/fitler";
import {addToList, getAll, updateStatus} from "./todo/todo";
import {objectWithOnly, wrapChildrenWith} from "./common";

class StateProvider extends React.Component {

    constructor() {
        super();
        this.state = {
            filter: FILTER_ALL,
            items: getAll()
        }
    }
    
    addNew = (text) => {
        let updatedList = addToList(this.state.items, {text, completed: false});
        this.setState({
            items: updatedList
        });
    };

    changeFilter = (filter) => {
        this.setState({filter});
    };

    changeStatus = (itemId, completed) => {
        const updatedList = updateStatus(this.state.items, itemId, completed);
        this.setState({items: updatedList});
    };

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus'])
        });
        return <div>{children}</div>;
    }

}

export default StateProvider;