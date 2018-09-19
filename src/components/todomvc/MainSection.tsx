import * as React from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
    editing: state.todos.editing,
    items: state.todos.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

interface IMainSectionProps {
    editing: number,
    items: [];
}

class MainSection extends React.Component<IMainSectionProps> {
    render() {
        const {editing, items} = this.props;
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <TodoList>
                    {
                        items.map((item: { id: number, text: string, completed: boolean }) => (
                            <TodoItem key={item.id}
                                      id={item.id}
                                      value={item.text}
                                      editing={editing === item.id}
                                      completed={item.completed}
                            />
                        ))
                    }
                </TodoList>
            </section>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
