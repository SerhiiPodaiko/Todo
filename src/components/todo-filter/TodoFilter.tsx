import {FC} from "react"
import Box from "@mui/material/Box"
import Btn from "../../ui/Button"

interface TodoFilterProps {
    filterActive: string,
    setFilterActive: any
}

const TodoFilter: FC<TodoFilterProps> = ({filterActive, setFilterActive}) => {
    const btnAll = filterActive === "all" ? "contained" : "outlined"
    const btnDone = filterActive === "done" ? "contained" : "outlined"

    return (
        <Box component="div">
            <Btn type={btnAll} color="success" onClick={() => setFilterActive("all")}>
                All
            </Btn>
            <Btn type={btnDone} color="success" onClick={() => setFilterActive("done")}>
                Done
            </Btn>
        </Box>

    )
}

export default TodoFilter
