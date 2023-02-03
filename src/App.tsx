import {FC} from "react"
import AppBar from "./components/header/Header"
import TodoSearch from "./components/todo-search/TodoSearch"
import Box from "@mui/material/Box"
import TodoList from "./components/todo-list/TodoList"
import AddTodo from "./components/add-todo/AddTodo"
import TodoContainer from "./HOC/TodoContainer"

interface AppProps {
    value: string,
    setValue: () => void,
    filterActive: string,
    setFilterActive: () => void,
    visibleFilterTodos: [],
    props: any
}

const App: FC<AppProps> = ({value, setValue, filterActive, setFilterActive, visibleFilterTodos}) => {
    return (
        <div className="app">
            <AppBar/>

            <Box component="main" sx={{padding: '50px 15px'}}>
                <TodoSearch
                    filterActive={filterActive}
                    setFilterActive={setFilterActive}
                    value={value}
                    setValue={setValue}/>

                <TodoList
                    visibleFilterTodos={visibleFilterTodos}/>

                <AddTodo/>
            </Box>

        </div>
    )
}

export default TodoContainer(App)
