import * as React from "react";
import {addToList, getAll, updateStatus} from "../../utils/todo";
import {objectWithOnly, wrapChildrenWith} from "../../utils/common";
import {Row} from "reactstrap";

interface IStateProviderProps {

}


interface IStateProviderState {
    items: any;
}

class StateProvider extends React.Component<IStateProviderProps, IStateProviderState> {

    constructor(props: IStateProviderProps) {
        super(props);
        this.state = {
            items: getAll()
        }
    }

    addNew = (text: string) => {
        let updatedList = addToList(this.state.items, {text, completed: false});
        this.setState({
            items: updatedList
        });
    };

    changeStatus = (itemId: number, completed: boolean) => {
        const updatedList = updateStatus(this.state.items, itemId, completed);
        this.setState({items: updatedList});
    };

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeStatus'])
        });
        return (
            <Row>
                {children}
            </Row>
        );
    }

}

export default StateProvider;
