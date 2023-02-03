import {ReactNode, FC} from "react"
import Button from "@mui/material/Button"

interface BtnProps {
    children: ReactNode,
    type: any,
    color: any,
    onClick?: () => any,
    disabled?: any
}

const Btn: FC<BtnProps> = ({children, type, color, onClick, disabled}) => {
    return (
        <Button variant={type} color={color} onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    )
}

export default Btn
