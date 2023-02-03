import {FC} from "react"
import ListItem from "@mui/material/ListItem"
import Box from "@mui/material/Box"
import Btn from "../../ui/Button"
import {removeItemTodo, toggleTodoDone} from "../../store/slices/todoSlice"
import {useAppDispatch} from "../../hooks/useRedux"
import {confirmAlert} from "react-confirm-alert"

interface TodoItemProps {
    item: {
        title: string,
        done: boolean,
        id: string
    }
}

const TodoItem: FC<TodoItemProps> = ({item}) => {
    const dispatch = useAppDispatch()

    const removeItem = (id: string) => {
        confirmAlert({
            title: 'WARNING',
            message: 'You really want to delete',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(removeItemTodo(id))
                },
                {
                    label: 'No'
                }
            ]
        })
    }

    return (
        <ListItem onClick={() => dispatch(toggleTodoDone({id: item.id, done: item.done}))}
                  sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px",
                      margin: "10px 0",
                      border: "1.5px solid #ccc",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: ".3s ease",
                      "&:hover": {
                          transform: "translateX(5px)",
                          border: "1.5px solid #1976d3"
                      }
                  }}>

            <Box component="span" sx={{textDecoration: item.done ? "line-through" : ""}}>
                {item.title}
            </Box>
            <Btn type="contained" color="error" onClick={() => removeItem(item.id)}>
                Delete
            </Btn>
        </ListItem>
    )
}

export default TodoItem
