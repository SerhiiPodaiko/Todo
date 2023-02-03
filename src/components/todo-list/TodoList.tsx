import {FC} from "react"
import Box from "@mui/material/Box"
import Alert from "@mui/material/Alert"
import List from "@mui/material/List"
import TodoItem from "../todo-item/TodoItem"
import {Todo} from "../../store/types/todoType"

interface TodoListProps {
    visibleFilterTodos: Todo[],
}

const TodoList: FC<TodoListProps> = ({visibleFilterTodos}) => {
    return (
        <Box component="div" sx={{
            maxWidth: "500px",
            width: "100%",
            margin: "0 auto"
        }}>
            <List>
                {
                    !visibleFilterTodos.length ? (
                        <Alert severity="error">The list is empty!</Alert>
                    ) : visibleFilterTodos.map(item => (
                        <TodoItem
                            key={item.id}
                            item={item}/>
                    ))
                }
            </List>
        </Box>
    )
}

export default TodoList
