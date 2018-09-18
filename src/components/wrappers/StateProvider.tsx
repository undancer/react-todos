import * as React from "react";
import {getAll, updateStatus} from "../../utils/todo";
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

    changeStatus = (itemId: number, completed: boolean) => {
        const updatedList = updateStatus(this.state.items, itemId, completed);
        this.setState({items: updatedList});
    };

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['changeStatus'])
        });
        return (
            <Row>
                {children}
            </Row>
        );
    }

}

export default StateProvider;
