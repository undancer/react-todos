import * as React from "react";
import {FILTER_ALL} from "../../utils/fitler";
import {addToList, getAll, updateStatus} from "../../utils/todo";
import {objectWithOnly, wrapChildrenWith} from "../../utils/common";
import {MODE_CREATE, MODE_NONE} from "../../utils/mode";
import {Row} from "reactstrap";

interface IStateProviderProps {

}


interface IStateProviderState {
    mode: string;
    filter: string;
    query: string;
    items: any;

}

class StateProvider extends React.Component<IStateProviderProps, IStateProviderState> {

    constructor(props: IStateProviderProps) {
        super(props);
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            items: getAll()
        }
    }

    addNew = (text: string) => {
        let updatedList = addToList(this.state.items, {text, completed: false});
        this.setState({
            items: updatedList
        });
    };

    setSearchQuery = (text: string) => {
        this.setState({query: text || ''});
    };

    changeFilter = (filter: string) => {
        this.setState({filter});
    };

    changeStatus = (itemId: number, completed: boolean) => {
        const updatedList = updateStatus(this.state.items, itemId, completed);
        this.setState({items: updatedList});
    };

    changeMode = (mode = MODE_NONE) => {
        this.setState({mode});
    };

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery'])
        });
        return (
            <Row>
                {children}
            </Row>
        );
    }

}

export default StateProvider;
