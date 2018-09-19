import * as React from "react";

class TodoApp extends React.Component {
    render() {
        return (
            <section className="todoapp">
                {this.props.children}
            </section>
        )
    }
}

export default TodoApp;
