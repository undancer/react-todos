import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Footer from "./Footer";

const TodoList = (props) => {
    const {title, items} = props;
    const count = items.length;
    return (
        <div className="todolist">
            <Header title={title}/>
            <ul className="list-unstyled">
                {
                    items.map((item) => (
                        <TodoItem item={item}/>
                    ))
                }
            </ul>
            <Footer count={count}/>
        </div>
    );
};
export default TodoList;