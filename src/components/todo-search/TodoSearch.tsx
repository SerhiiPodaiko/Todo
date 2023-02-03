import React, {FC, ChangeEvent, FormEvent} from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import {useAppSelector} from "../../hooks/useRedux"
import TodoFilter from "../todo-filter/TodoFilter"

interface TodoSearchProps {
    value: any,
    setValue: () => any,
    filterActive: string,
    setFilterActive: () => void
}

const TodoSearch: FC<TodoSearchProps> = ({value, setValue, filterActive, setFilterActive}) => {
    const {todos} = useAppSelector(state => state.todos)

    const totalDone = todos
        .filter(todo => todo.done)
        .map(todo => todo.done).length

    return (
        <>
            <Box component="div" sx={{
                maxWidth: "500px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>

                <Box component="div">
                    <Typography>Done {totalDone} of {todos.length}</Typography>
                </Box>
                <TodoFilter
                    filterActive={filterActive}
                    setFilterActive={setFilterActive}/>
            </Box>
            <Box
                onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
                component="form"
                sx={{
                    maxWidth: "500px",
                    margin: "10px auto 15px",
                }}
                noValidate
                autoComplete="off">
                <TextField
                    sx={{width: "100%"}}
                    id="outlined-basic"
                    label="Search.."
                    value={value}
                    // @ts-ignore
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    variant="outlined"/>
            </Box>
        </>
    )
}

export default TodoSearch
