import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import {useForm, SubmitHandler, Controller} from "react-hook-form"
import {confirmAlert} from "react-confirm-alert"
import uuid from "uuid"
import TextField from "@mui/material/TextField"
import Btn from "../../ui/Button"
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux"
import {addTodo, removeAllTodo} from "../../store/slices/todoSlice"

type Inputs = {
    input: string
}

const AddTodo = () => {
    const dispatch = useAppDispatch()
    const {todos} = useAppSelector(state => state.todos)

    const {register, handleSubmit, reset, control, formState: {errors}} = useForm<Inputs>({mode: "onSubmit"})

    const onSubmit: SubmitHandler<Inputs> = data => {
        const newTodo = {
            title: data.input,
            done: false,
            id: uuid.v4()
        }

        dispatch(addTodo(newTodo))
        reset()
    }

    const removeAll = () => {
        confirmAlert({
            title: "WARNING",
            message: "Do you really want to delete all",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => dispatch(removeAllTodo())
                },
                {
                    label: "No"
                }
            ]
        })
    }

    return (
        <Box
            component="form"
            sx={{
                maxWidth: "500px",
                margin: "10px auto 15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off">

            <Box component="div" sx={{display: "flex", justifyContent: "space-between"}}>

                <Controller control={control} name="input" render={({field}) => (
                    <TextField
                        {...register("input", {
                            required: true,
                            minLength: {
                                value: 3,
                                message: "Minimum 3"
                            }
                        })}
                        id="outlined-basic"
                        label="What needs to be done"
                        color={errors?.input ? "error" : "success"}
                        onChange={e => field.onChange(e)}
                        variant="outlined"/>
                )}/>

                <Btn type="outlined" color="success" onClick={handleSubmit(onSubmit)}>
                    Add
                </Btn>

                {errors?.input &&
                <Typography component="h4" color="error">
                    {errors?.input?.message || "Enter the text"}
                </Typography>}
            </Box>

            <Btn type="outlined" color="error"
                 onClick={removeAll}
                 disabled={!todos.length}>
                Detete All
            </Btn>
        </Box>
    )
}

export default AddTodo