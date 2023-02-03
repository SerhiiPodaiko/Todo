import {useState} from "react"
import {useAppSelector} from "../hooks/useRedux"
import {Todo} from "../store/types/todoType"

const TodoContainer = (Component: any) => {
    const NewComponent = (props: any) => {
        const [value, setValue] = useState("")
        const [filterActive, setFilterActive] = useState("all")
        const {todos} = useAppSelector(state => state.todos)

        const searchTodos = todos
            .filter(todo => todo.title.toLowerCase().includes(value.toLowerCase()))

        const filterTodos = (todos: Todo[], filterActive: string) => {
            switch (filterActive) {
                case "all":
                    return todos
                case "done":
                    return todos.filter(todo => todo.done)
                default:
                    return todos
            }
        }

        const visibleFilterTodos = filterTodos(searchTodos, filterActive)

        return <Component
            value={value}
            setValue={setValue}
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            visibleFilterTodos={visibleFilterTodos}
            {...props} />
    }

    return NewComponent
}

export default TodoContainer
