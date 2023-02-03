import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Todo} from "../types/todoType"

type TodosState = {
    todos: Todo[],
}

const initialState: TodosState = {
    todos: [
        {title: 'Open a door', done: false, id: 1},
        {title: 'Close a door', done: false, id: 2}
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: ((state, action: PayloadAction<Todo>) => {
            state.todos.unshift(action.payload)
        }),
        removeItemTodo: ((state, action: PayloadAction<any>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }),
        removeAllTodo: (state => {
            state.todos = []
        }),
        toggleTodoDone: ((state, action: PayloadAction<any>) => {
            const itemIndex = state.todos.findIndex(todo => todo.id === action.payload.id)

            state.todos[itemIndex].done = !action.payload.done
        })
    },
})

export const {addTodo, removeItemTodo, removeAllTodo, toggleTodoDone} = todoSlice.actions
export default todoSlice.reducer
