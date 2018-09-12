import React from "react";
import {FILTER_ALL} from "./filter/fitler";
import {addToList, getAll, updateStatus} from "./todo/todo";
import {objectWithOnly, wrapChildrenWith} from "./common";
import {MODE_CREATE, MODE_NONE} from "./mode";

class StateProvider extends React.Component {

    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
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

    search = (text) => {
        this.setState({query: text || ''});
    };

    changeFilter = (filter) => {
        this.setState({filter});
    };

    changeStatus = (itemId, completed) => {
        const updatedList = updateStatus(this.state.items, itemId, completed);
        this.setState({items: updatedList});
    };

    changeMode = (mode = MODE_NONE) => {
        this.setState({mode});
    };

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'search'])
        });
        return <div>{children}</div>;
    }

}

export default StateProvider;
