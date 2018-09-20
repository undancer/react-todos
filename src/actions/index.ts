export const clearCompleted = () => ({type: 'CLEAR_COMPLETED'});
export const editTodo = (id: number) => ({type: 'EDIT', id});
export const destroyTodo = (id: number) => ({type: 'DESTROY', id});
export const toggleTodo = (id: number, completed: boolean) => ({type: 'CHANGE_STATUS', id, completed});
export const saveTodo = (id: number, text: string) => ({type: 'CHANGE_TODO', id, text});
export const cancelTodo = (id: number) => ({type: 'CANCEL', id});
export const newTodo = (value: string) => ({type: 'ADD_NEW_TODO', value});
export const toggleAll = (completed: boolean) => ({type: 'TOGGLE_ALL', completed});
